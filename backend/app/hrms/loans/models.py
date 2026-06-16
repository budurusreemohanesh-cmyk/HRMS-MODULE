from sqlalchemy import Column, Integer, String, Float, Date, Boolean, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.base import Base

class LoanType(Base):
    __tablename__ = "loan_type"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    maximum_amount = Column(Float, nullable=False)
    interest_rate = Column(Float, default=0.0)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class LoanApplication(Base):
    __tablename__ = "loan_application"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    loan_type_id = Column(Integer, ForeignKey("loan_type.id"), nullable=False)
    
    amount = Column(Float, nullable=False)
    repayment_method = Column(String, default="Repay Over Number of Periods")
    repayment_periods = Column(Integer, nullable=False)
    
    status = Column(String, default="Applied") # Applied, Approved, Disbursed, Repaid
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class LoanRepaymentSchedule(Base):
    __tablename__ = "loan_repayment_schedule"

    id = Column(Integer, primary_key=True, index=True)
    loan_application_id = Column(Integer, ForeignKey("loan_application.id"), nullable=False)
    
    payment_date = Column(Date, nullable=False)
    principal_amount = Column(Float, nullable=False)
    interest_amount = Column(Float, default=0.0)
    total_payment = Column(Float, nullable=False)
    
    is_paid = Column(Boolean, default=False)
