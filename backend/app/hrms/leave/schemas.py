from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime, date

class LeaveApplicationBase(BaseModel):
    employee_id: int
    leave_type_id: int
    from_date: date
    to_date: date
    half_day: bool = False

class LeaveApplicationCreate(LeaveApplicationBase):
    pass

class LeaveApplicationResponse(LeaveApplicationBase):
    id: int
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None

class LeaveBalanceLedgerBase(BaseModel):
    employee_id: int
    leave_type_id: int
    transaction_type: str
    leaves: float
    from_date: date
    to_date: date
    reference_type: str
    reference_id: int

class LeaveBalanceLedgerResponse(LeaveBalanceLedgerBase):
    id: int
    created_at: datetime
