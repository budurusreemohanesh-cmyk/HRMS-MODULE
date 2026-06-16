from datetime import date
from decimal import Decimal
from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import or_, and_, desc, asc
from app.hrms.statutory.india.models import (
    PfRule, EsiRule, ProfessionalTaxSlab, TdsSlab, GratuityRule
)

class TdsContext:
    def __init__(self, gross_annual: Decimal, regime: str, deductions: Decimal):
        self.gross_annual = gross_annual
        self.regime = regime
        self.deductions = deductions

class TdsResult:
    def __init__(self, monthly_tax: Decimal, rule_id: int):
        self.monthly_tax = monthly_tax
        self.rule_id = rule_id

class PayslipStatutoryContext:
    def __init__(self, company_id: int, as_of: date, state: str, monthly_gross: Decimal, pf_wage: Decimal, esi_wage: Decimal):
        self.company_id = company_id
        self.as_of = as_of
        self.state = state
        self.monthly_gross = monthly_gross
        self.pf_wage = pf_wage
        self.esi_wage = esi_wage

class StatutoryBreakup:
    def __init__(self, pf_amount: Decimal, esi_amount: Decimal, pt_amount: Decimal, 
                 pf_rule_id: Optional[int] = None, esi_rule_id: Optional[int] = None, 
                 pt_slab_id: Optional[int] = None):
        self.pf_amount = pf_amount
        self.esi_amount = esi_amount
        self.pt_amount = pt_amount
        
        self.pf_rule_id = pf_rule_id
        self.esi_rule_id = esi_rule_id
        self.pt_slab_id = pt_slab_id

class StatutoryRuleEngine:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_pf(self, as_of: date, company_id: int) -> Optional[PfRule]:
        stmt = select(PfRule).where(
            PfRule.company_id == company_id,
            PfRule.effective_from <= as_of,
            or_(PfRule.effective_to >= as_of, PfRule.effective_to == None),
            PfRule.is_active == True
        ).order_by(desc(PfRule.effective_from))
        result = await self.db.execute(stmt)
        return result.scalars().first()

    async def get_esi(self, as_of: date, company_id: int) -> Optional[EsiRule]:
        stmt = select(EsiRule).where(
            EsiRule.company_id == company_id,
            EsiRule.effective_from <= as_of,
            or_(EsiRule.effective_to >= as_of, EsiRule.effective_to == None),
            EsiRule.is_active == True
        ).order_by(desc(EsiRule.effective_from))
        result = await self.db.execute(stmt)
        return result.scalars().first()

    async def get_pt(self, as_of: date, state: str, gross: Decimal) -> Optional[ProfessionalTaxSlab]:
        stmt = select(ProfessionalTaxSlab).where(
            ProfessionalTaxSlab.state == state,
            ProfessionalTaxSlab.effective_from <= as_of,
            or_(ProfessionalTaxSlab.effective_to >= as_of, ProfessionalTaxSlab.effective_to == None),
            ProfessionalTaxSlab.min_income <= gross,
            or_(ProfessionalTaxSlab.max_income >= gross, ProfessionalTaxSlab.max_income == None)
        )
        result = await self.db.execute(stmt)
        return result.scalars().first()

    async def get_tds_monthly(self, ctx: TdsContext, as_of: date) -> TdsResult:
        stmt = select(TdsSlab).where(
            TdsSlab.tax_regime == ctx.regime,
            TdsSlab.effective_from <= as_of,
            or_(TdsSlab.effective_to >= as_of, TdsSlab.effective_to == None)
        ).order_by(asc(TdsSlab.min_income))
        result = await self.db.execute(stmt)
        slabs = result.scalars().all()

        if not slabs:
            return TdsResult(Decimal(0), 0)

        taxable_income = ctx.gross_annual - ctx.deductions
        total_tax = Decimal(0)
        
        for slab in slabs:
            if taxable_income > slab.min_income:
                taxable_in_this_slab = min(taxable_income, slab.max_income or taxable_income) - slab.min_income
                total_tax += taxable_in_this_slab * (slab.tax_percent / 100)
                
        return TdsResult(total_tax / 12, slabs[0].id)

    async def compute_payslip_deductions(self, ctx: PayslipStatutoryContext) -> StatutoryBreakup:
        pf_rule = await self.get_pf(ctx.as_of, ctx.company_id)
        esi_rule = await self.get_esi(ctx.as_of, ctx.company_id)
        pt_slab = await self.get_pt(ctx.as_of, ctx.state, ctx.monthly_gross)

        pf_amount = Decimal(0)
        esi_amount = Decimal(0)
        pt_amount = Decimal(0)

        pf_rule_id = None
        esi_rule_id = None
        pt_slab_id = None

        if pf_rule:
            capped_wage = min(ctx.pf_wage, pf_rule.pf_wage_limit)
            pf_amount = capped_wage * (pf_rule.employee_contribution_percent / Decimal(100))
            pf_rule_id = pf_rule.id
            
        if esi_rule and ctx.monthly_gross <= esi_rule.esi_wage_limit:
            esi_amount = ctx.monthly_gross * (esi_rule.employee_contribution_percent / Decimal(100))
            esi_rule_id = esi_rule.id
            
        if pt_slab:
            # check if it's february
            if ctx.as_of.month == 2 and pt_slab.february_tax_amount is not None:
                pt_amount = pt_slab.february_tax_amount
            else:
                pt_amount = pt_slab.tax_amount
            pt_slab_id = pt_slab.id

        return StatutoryBreakup(
            pf_amount=pf_amount,
            esi_amount=esi_amount,
            pt_amount=pt_amount,
            pf_rule_id=pf_rule_id,
            esi_rule_id=esi_rule_id,
            pt_slab_id=pt_slab_id
        )
