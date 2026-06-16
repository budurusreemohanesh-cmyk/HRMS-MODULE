from pydantic import BaseModel, ConfigDict
from datetime import date
from typing import Optional
from decimal import Decimal

class PfRuleBase(BaseModel):
    company_id: int
    effective_from: date
    effective_to: Optional[date] = None
    employee_contribution_percent: Decimal = Decimal('12.0')
    employer_contribution_percent: Decimal = Decimal('12.0')
    eps_contribution_percent: Decimal = Decimal('8.33')
    edli_contribution_percent: Decimal = Decimal('0.5')
    admin_charges_percent: Decimal = Decimal('0.5')
    pf_wage_limit: Decimal = Decimal('15000')
    is_active: bool = True

class PfRuleCreate(PfRuleBase):
    pass

class PfRuleResponse(PfRuleBase):
    id: int
    model_config = ConfigDict(from_attributes=True)


class EsiRuleBase(BaseModel):
    company_id: int
    effective_from: date
    effective_to: Optional[date] = None
    employee_contribution_percent: Decimal = Decimal('0.75')
    employer_contribution_percent: Decimal = Decimal('3.25')
    esi_wage_limit: Decimal = Decimal('21000')
    is_active: bool = True

class EsiRuleCreate(EsiRuleBase):
    pass

class EsiRuleResponse(EsiRuleBase):
    id: int
    model_config = ConfigDict(from_attributes=True)


class ProfessionalTaxSlabBase(BaseModel):
    state: str
    effective_from: date
    effective_to: Optional[date] = None
    min_income: Decimal
    max_income: Optional[Decimal] = None
    tax_amount: Decimal
    february_tax_amount: Optional[Decimal] = None

class ProfessionalTaxSlabCreate(ProfessionalTaxSlabBase):
    pass

class ProfessionalTaxSlabResponse(ProfessionalTaxSlabBase):
    id: int
    model_config = ConfigDict(from_attributes=True)


class TdsSlabBase(BaseModel):
    tax_regime: str
    effective_from: date
    effective_to: Optional[date] = None
    min_income: Decimal
    max_income: Optional[Decimal] = None
    tax_percent: Decimal
    standard_deduction: Decimal = Decimal('50000')

class TdsSlabCreate(TdsSlabBase):
    pass

class TdsSlabResponse(TdsSlabBase):
    id: int
    model_config = ConfigDict(from_attributes=True)
