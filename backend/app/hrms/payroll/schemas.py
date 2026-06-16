from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime, date

class SalaryComponentBase(BaseModel):
    name: str
    is_earning: bool = True
    is_tax_applicable: bool = True
    depends_on_payment_days: bool = True
    is_part_of_basic_wage: bool = False

class SalaryComponentCreate(SalaryComponentBase):
    pass

class SalaryComponentResponse(SalaryComponentBase):
    id: int

class SalaryStructureItemBase(BaseModel):
    component_id: int
    amount: Optional[float] = None
    formula: Optional[str] = None

class SalaryStructureBase(BaseModel):
    name: str
    is_active: bool = True

class SalaryStructureCreate(SalaryStructureBase):
    items: List[SalaryStructureItemBase]

class SalaryStructureAssignmentBase(BaseModel):
    employee_id: int
    structure_id: int
    base_pay: float
    effective_from: date
    effective_to: Optional[date] = None

class SalaryStructureAssignmentCreate(SalaryStructureAssignmentBase):
    pass

class SalaryStructureAssignmentResponse(SalaryStructureAssignmentBase):
    id: int

class SalarySlipGenerateRequest(BaseModel):
    employee_id: int
    start_date: date
    end_date: date
