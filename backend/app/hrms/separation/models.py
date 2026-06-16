from sqlalchemy import Column, Integer, String, Float, Date, Boolean, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.base import Base

class Resignation(Base):
    __tablename__ = "resignation"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    resignation_date = Column(Date, nullable=False)
    reason = Column(String, nullable=True)
    status = Column(String, default="Pending") # Pending, Accepted, Rejected
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class ExitInterview(Base):
    __tablename__ = "exit_interview"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    interviewer_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    interview_date = Column(Date, nullable=False)
    feedback = Column(String, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class FullAndFinalSettlement(Base):
    __tablename__ = "full_and_final_settlement"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    settlement_date = Column(Date, nullable=False)
    payable_amount = Column(Float, nullable=False)
    status = Column(String, default="Draft") # Draft, Paid
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
