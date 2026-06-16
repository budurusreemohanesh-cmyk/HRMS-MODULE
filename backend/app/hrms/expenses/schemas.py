from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime, date

class ExpenseCategoryBase(BaseModel):
    company_id: int
    name: str
    description: Optional[str] = None

class ExpenseCategoryCreate(ExpenseCategoryBase):
    pass

class ExpenseCategoryResponse(ExpenseCategoryBase):
    id: int

class ExpenseClaimDetailBase(BaseModel):
    expense_category_id: int
    expense_date: date
    description: str
    amount: float

class ExpenseClaimDetailCreate(ExpenseClaimDetailBase):
    pass

class ExpenseClaimBase(BaseModel):
    employee_id: int
    company_id: int
    total_amount_claimed: float
    is_paid_via_payroll: bool = False

class ExpenseClaimCreate(ExpenseClaimBase):
    details: List[ExpenseClaimDetailCreate]

class ExpenseClaimResponse(ExpenseClaimBase):
    id: int
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None
