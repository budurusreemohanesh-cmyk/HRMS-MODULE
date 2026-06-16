from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date, time

class ShiftTypeBase(BaseModel):
    company_id: int
    name: str
    start_time: time
    end_time: time

class ShiftTypeCreate(ShiftTypeBase):
    pass

class ShiftTypeResponse(ShiftTypeBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

class EmployeeCheckinBase(BaseModel):
    employee_id: int
    timestamp: datetime
    log_type: str # "IN" or "OUT"
    device_id: Optional[str] = None

class EmployeeCheckinCreate(EmployeeCheckinBase):
    pass

class EmployeeCheckinResponse(EmployeeCheckinBase):
    id: int
    created_at: datetime

class AttendanceRecordBase(BaseModel):
    employee_id: int
    attendance_date: date
    status: str
    shift_type_id: Optional[int] = None

class AttendanceRecordCreate(AttendanceRecordBase):
    pass

class AttendanceRecordResponse(AttendanceRecordBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
