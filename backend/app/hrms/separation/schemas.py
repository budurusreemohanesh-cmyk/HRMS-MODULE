from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date

class ResignationBase(BaseModel):
    employee_id: int
    resignation_date: date
    reason: Optional[str] = None

class ResignationCreate(ResignationBase):
    pass

class ResignationResponse(ResignationBase):
    id: int
    status: str
    created_at: datetime

class ExitInterviewBase(BaseModel):
    employee_id: int
    interviewer_id: int
    interview_date: date
    feedback: Optional[str] = None

class ExitInterviewCreate(ExitInterviewBase):
    pass

class ExitInterviewResponse(ExitInterviewBase):
    id: int
    created_at: datetime

class FullAndFinalSettlementBase(BaseModel):
    employee_id: int
    settlement_date: date
    payable_amount: float

class FullAndFinalSettlementCreate(FullAndFinalSettlementBase):
    pass

class FullAndFinalSettlementResponse(FullAndFinalSettlementBase):
    id: int
    status: str
    created_at: datetime
