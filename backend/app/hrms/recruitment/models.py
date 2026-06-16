from sqlalchemy import Column, Integer, String, Date, Text, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.base import Base

class JobOpening(Base):
    __tablename__ = "job_opening"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    department_id = Column(Integer, ForeignKey("department.id"), nullable=False)
    job_title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    status = Column(String, default="Open") # Open, Closed, On Hold
    target_hires = Column(Integer, default=1)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Applicant(Base):
    __tablename__ = "applicant"

    id = Column(Integer, primary_key=True, index=True)
    job_opening_id = Column(Integer, ForeignKey("job_opening.id"), nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    source = Column(String, nullable=True) # Website, Referral, LinkedIn
    resume_url = Column(String, nullable=True)
    status = Column(String, default="Applied") # Applied, Interviewing, Offered, Rejected, Hired
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Interview(Base):
    __tablename__ = "interview"

    id = Column(Integer, primary_key=True, index=True)
    applicant_id = Column(Integer, ForeignKey("applicant.id"), nullable=False)
    interviewer_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    interview_date = Column(Date, nullable=False)
    status = Column(String, default="Scheduled") # Scheduled, Completed, Cancelled
    feedback = Column(Text, nullable=True)
    rating = Column(Integer, nullable=True) # 1 to 5
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
