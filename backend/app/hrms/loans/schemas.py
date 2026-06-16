from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date

class LoanTypeBase(BaseModel):
    company_id: int
    name: str
    maximum_amount: float
    interest_rate: float = 0.0

class LoanTypeCreate(LoanTypeBase):
    pass

class LoanTypeResponse(LoanTypeBase):
    id: int
    created_at: datetime

class LoanApplicationBase(BaseModel):
    employee_id: int
    loan_type_id: int
    amount: float
    repayment_method: str = "Repay Over Number of Periods"
    repayment_periods: int

class LoanApplicationCreate(LoanApplicationBase):
    pass

class LoanApplicationResponse(LoanApplicationBase):
    id: int
    status: str
    created_at: datetime

class LoanRepaymentScheduleBase(BaseModel):
    loan_application_id: int
    payment_date: date
    principal_amount: float
    interest_amount: float = 0.0
    total_payment: float

class LoanRepaymentScheduleCreate(LoanRepaymentScheduleBase):
    pass

class LoanRepaymentScheduleResponse(LoanRepaymentScheduleBase):
    id: int
    is_paid: bool
