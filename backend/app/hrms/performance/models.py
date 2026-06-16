from sqlalchemy import Column, Integer, String, Date, Text, ForeignKey, DateTime, Float
from sqlalchemy.sql import func
from app.db.base import Base

class AppraisalCycle(Base):
    __tablename__ = "appraisal_cycle"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    cycle_name = Column(String, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    status = Column(String, default="Active") # Active, Closed
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Goal(Base):
    __tablename__ = "goal"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    appraisal_cycle_id = Column(Integer, ForeignKey("appraisal_cycle.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    weight = Column(Float, default=1.0) # Used for weighted average
    progress = Column(Integer, default=0) # 0 to 100
    status = Column(String, default="In Progress") # In Progress, Completed, Abandoned
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Appraisal(Base):
    __tablename__ = "appraisal"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    appraisal_cycle_id = Column(Integer, ForeignKey("appraisal_cycle.id"), nullable=False)
    final_score = Column(Float, nullable=True)
    manager_feedback = Column(Text, nullable=True)
    status = Column(String, default="Draft") # Draft, In Review, Completed
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class AppraisalFeedback(Base):
    __tablename__ = "appraisal_feedback"

    id = Column(Integer, primary_key=True, index=True)
    appraisal_id = Column(Integer, ForeignKey("appraisal.id"), nullable=False)
    reviewer_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    feedback_text = Column(Text, nullable=False)
    score = Column(Float, nullable=False) # e.g. 1 to 5
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
