from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime

class EmployeeBase(BaseModel):
    company_id: int
    employee_number: str
    external_id: Optional[str] = None
    first_name: str
    last_name: Optional[str] = None
    gender: Optional[str] = None
    date_of_birth: Optional[date] = None
    date_of_joining: date
    relieving_date: Optional[date] = None
    status: str = "active"
    department_id: Optional[int] = None
    designation_id: Optional[int] = None
    branch_id: Optional[int] = None
    grade_id: Optional[int] = None

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    status: Optional[str] = None
    department_id: Optional[int] = None
    designation_id: Optional[int] = None
    # Add other fields as necessary

class EmployeeResponse(EmployeeBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
