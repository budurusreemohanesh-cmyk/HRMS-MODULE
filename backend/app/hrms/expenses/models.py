from sqlalchemy import Column, Integer, String, Float, Date, Boolean, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.base import Base

class ExpenseCategory(Base):
    __tablename__ = "expense_category"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)

class ExpenseClaim(Base):
    __tablename__ = "expense_claim"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    
    total_amount_claimed = Column(Float, default=0.0)
    total_amount_sanctioned = Column(Float, default=0.0)
    
    is_paid_via_payroll = Column(Boolean, default=False)
    status = Column(String, default="Draft") # Draft, Submitted, Approved, Paid, Rejected
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class ExpenseClaimDetail(Base):
    __tablename__ = "expense_claim_detail"

    id = Column(Integer, primary_key=True, index=True)
    expense_claim_id = Column(Integer, ForeignKey("expense_claim.id"), nullable=False)
    expense_category_id = Column(Integer, ForeignKey("expense_category.id"), nullable=False)
    
    expense_date = Column(Date, nullable=False)
    description = Column(String, nullable=False)
    amount = Column(Float, nullable=False)
    sanctioned_amount = Column(Float, nullable=True)
