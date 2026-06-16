from pydantic import BaseModel, ConfigDict
from datetime import date, datetime
from typing import Optional

class JobOpeningBase(BaseModel):
    company_id: int
    department_id: int
    job_title: str
    description: Optional[str] = None
    target_hires: int = 1
    status: str = "Open"

class JobOpeningCreate(JobOpeningBase):
    pass

class JobOpeningResponse(JobOpeningBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)

class ApplicantBase(BaseModel):
    job_opening_id: int
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = None
    source: Optional[str] = None
    resume_url: Optional[str] = None
    status: str = "Applied"

class ApplicantCreate(ApplicantBase):
    pass

class ApplicantResponse(ApplicantBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)

class InterviewBase(BaseModel):
    applicant_id: int
    interviewer_id: int
    interview_date: date
    status: str = "Scheduled"
    feedback: Optional[str] = None
    rating: Optional[int] = None

class InterviewCreate(InterviewBase):
    pass

class InterviewResponse(InterviewBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)
