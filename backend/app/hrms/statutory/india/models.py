from sqlalchemy import Column, Integer, String, Boolean, Date, Numeric, ForeignKey
from app.db.base import Base

class PfRule(Base):
    __tablename__ = "hrms_pf_rules"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("hrms_companies.id"), nullable=False)
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    employee_contribution_percent = Column(Numeric(5, 2), default=12.0)
    employer_contribution_percent = Column(Numeric(5, 2), default=12.0)
    eps_contribution_percent = Column(Numeric(5, 2), default=8.33)
    edli_contribution_percent = Column(Numeric(5, 2), default=0.5)
    admin_charges_percent = Column(Numeric(5, 2), default=0.5)
    
    pf_wage_limit = Column(Numeric(12, 2), default=15000)
    is_active = Column(Boolean, default=True)


class EsiRule(Base):
    __tablename__ = "hrms_esi_rules"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("hrms_companies.id"), nullable=False)
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    employee_contribution_percent = Column(Numeric(5, 2), default=0.75)
    employer_contribution_percent = Column(Numeric(5, 2), default=3.25)
    
    esi_wage_limit = Column(Numeric(12, 2), default=21000)
    is_active = Column(Boolean, default=True)


class ProfessionalTaxSlab(Base):
    __tablename__ = "hrms_pt_slabs"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String(50), nullable=False) # e.g. 'KA', 'MH'
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    min_income = Column(Numeric(12, 2), nullable=False)
    max_income = Column(Numeric(12, 2), nullable=True) # Null means infinity
    tax_amount = Column(Numeric(12, 2), nullable=False)
    
    # E.g. MH has different tax in Feb
    february_tax_amount = Column(Numeric(12, 2), nullable=True)


class TdsSlab(Base):
    __tablename__ = "hrms_tds_slabs"

    id = Column(Integer, primary_key=True, index=True)
    tax_regime = Column(String(20), nullable=False) # 'old', 'new'
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    min_income = Column(Numeric(12, 2), nullable=False)
    max_income = Column(Numeric(12, 2), nullable=True)
    tax_percent = Column(Numeric(5, 2), nullable=False)
    
    # Standard deduction applicable to this regime
    standard_deduction = Column(Numeric(12, 2), default=50000)


class GratuityRule(Base):
    __tablename__ = "hrms_gratuity_rules"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("hrms_companies.id"), nullable=False)
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    minimum_years_for_eligibility = Column(Numeric(5, 2), default=5.0)
    days_per_year = Column(Integer, default=15)
    working_days_per_month = Column(Integer, default=26)


class BonusRule(Base):
    __tablename__ = "hrms_bonus_rules"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("hrms_companies.id"), nullable=False)
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    minimum_wage_limit = Column(Numeric(12, 2), default=21000)
    bonus_percent = Column(Numeric(5, 2), default=8.33)
    max_bonus_percent = Column(Numeric(5, 2), default=20.0)


class LwfRule(Base):
    __tablename__ = "hrms_lwf_rules"

    id = Column(Integer, primary_key=True, index=True)
    state = Column(String(50), nullable=False)
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)
    
    employee_contribution = Column(Numeric(12, 2), nullable=False)
    employer_contribution = Column(Numeric(12, 2), nullable=False)
    deduction_month = Column(Integer, nullable=True) # 1-12, or null for all months
