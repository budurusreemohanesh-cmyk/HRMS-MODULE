from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class CompanyBase(BaseModel):
    name: str
    pf_applicable: bool = True
    esi_applicable: bool = True
    lwf_state: Optional[str] = None
    pt_state: Optional[str] = None

class CompanyCreate(CompanyBase):
    pass

class CompanyResponse(CompanyBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class BranchBase(BaseModel):
    company_id: int
    name: str

class BranchCreate(BranchBase):
    pass

class BranchResponse(BranchBase):
    id: int
    
    class Config:
        from_attributes = True

class DepartmentBase(BaseModel):
    company_id: int
    name: str

class DepartmentCreate(DepartmentBase):
    pass

class DepartmentResponse(DepartmentBase):
    id: int
    
    class Config:
        from_attributes = True

class DesignationBase(BaseModel):
    company_id: int
    name: str

class DesignationCreate(DesignationBase):
    pass

class DesignationResponse(DesignationBase):
    id: int
    
    class Config:
        from_attributes = True

class GradeBase(BaseModel):
    company_id: int
    name: str

class GradeCreate(GradeBase):
    pass

class GradeResponse(GradeBase):
    id: int
    
    class Config:
        from_attributes = True
