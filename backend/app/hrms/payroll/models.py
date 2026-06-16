from sqlalchemy import Column, Integer, String, Float, Date, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base import Base

class SalaryComponent(Base):
    __tablename__ = "salary_component"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, unique=True)
    is_earning = Column(Boolean, default=True) # True = Earning, False = Deduction
    is_tax_applicable = Column(Boolean, default=True)
    depends_on_payment_days = Column(Boolean, default=True) # Prorated for LWP
    is_part_of_basic_wage = Column(Boolean, default=False) # Used for 50% rule
    
class SalaryStructure(Base):
    __tablename__ = "salary_structure"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, unique=True)
    is_active = Column(Boolean, default=True)
    
class SalaryStructureItem(Base):
    __tablename__ = "salary_structure_item"

    id = Column(Integer, primary_key=True, index=True)
    structure_id = Column(Integer, ForeignKey("salary_structure.id"), nullable=False)
    component_id = Column(Integer, ForeignKey("salary_component.id"), nullable=False)
    
    amount = Column(Float, nullable=True) # Fixed amount
    formula = Column(String, nullable=True) # e.g. "base * 0.4"
    
class SalaryStructureAssignment(Base):
    __tablename__ = "salary_structure_assignment"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    structure_id = Column(Integer, ForeignKey("salary_structure.id"), nullable=False)
    
    base_pay = Column(Float, nullable=False)
    effective_from = Column(Date, nullable=False)
    effective_to = Column(Date, nullable=True)

class SalarySlip(Base):
    __tablename__ = "salary_slip"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    
    total_working_days = Column(Float, nullable=False)
    payment_days = Column(Float, nullable=False) # working_days - LWP
    leave_without_pay = Column(Float, default=0.0)
    
    gross_pay = Column(Float, nullable=False)
    total_deduction = Column(Float, nullable=False)
    net_pay = Column(Float, nullable=False)
    
    status = Column(String, default="Draft") # Draft, Submitted, Paid
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class SalaryDetail(Base):
    __tablename__ = "salary_detail"

    id = Column(Integer, primary_key=True, index=True)
    salary_slip_id = Column(Integer, ForeignKey("salary_slip.id"), nullable=False)
    component_id = Column(Integer, ForeignKey("salary_component.id"), nullable=False)
    amount = Column(Float, nullable=False)
    is_earning = Column(Boolean, nullable=False)
