from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date, ForeignKey, Float
from sqlalchemy.sql import func
from app.db.base import Base

class LeaveType(Base):
    __tablename__ = "leave_type"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    is_lwp = Column(Boolean, default=False)
    is_encashable = Column(Boolean, default=False)
    is_carry_forward = Column(Boolean, default=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class LeavePeriod(Base):
    __tablename__ = "leave_period"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    from_date = Column(Date, nullable=False)
    to_date = Column(Date, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class LeaveAllocation(Base):
    __tablename__ = "leave_allocation"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    leave_type_id = Column(Integer, ForeignKey("leave_type.id"), nullable=False)
    leave_period_id = Column(Integer, ForeignKey("leave_period.id"), nullable=False)
    new_leaves_allocated = Column(Float, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class LeaveApplication(Base):
    __tablename__ = "leave_application"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    leave_type_id = Column(Integer, ForeignKey("leave_type.id"), nullable=False)
    from_date = Column(Date, nullable=False)
    to_date = Column(Date, nullable=False)
    half_day = Column(Boolean, default=False)
    status = Column(String, default="Pending") # Pending, Approved, Rejected

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class LeaveBalanceLedger(Base):
    """
    CRITICAL: Append-only ledger for all leave transactions.
    Balance = sum(leaves) for a given employee & leave_type & period
    """
    __tablename__ = "leave_balance_ledger"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    leave_type_id = Column(Integer, ForeignKey("leave_type.id"), nullable=False)
    
    # "allocation", "application", "encashment", "expiry", "adjustment"
    transaction_type = Column(String, nullable=False)
    
    # Positive for allocation, negative for application/encashment
    leaves = Column(Float, nullable=False)
    
    from_date = Column(Date, nullable=False)
    to_date = Column(Date, nullable=False)
    
    # E.g. "leave_application", 42
    reference_type = Column(String, nullable=False)
    reference_id = Column(Integer, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class LeaveEncashment(Base):
    __tablename__ = "leave_encashment"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    leave_type_id = Column(Integer, ForeignKey("leave_type.id"), nullable=False)
    encashment_date = Column(Date, nullable=False)
    encashable_days = Column(Float, nullable=False)
    is_part_of_wage = Column(Boolean, default=True) # Exposes for 50% wage rule computation

    created_at = Column(DateTime(timezone=True), server_default=func.now())
