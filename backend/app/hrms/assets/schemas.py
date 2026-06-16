from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date

class AssetCategoryBase(BaseModel):
    company_id: int
    name: str

class AssetCategoryCreate(AssetCategoryBase):
    pass

class AssetCategoryResponse(AssetCategoryBase):
    id: int

class AssetBase(BaseModel):
    company_id: int
    asset_category_id: int
    name: str
    serial_number: Optional[str] = None
    purchase_date: Optional[date] = None

class AssetCreate(AssetBase):
    pass

class AssetResponse(AssetBase):
    id: int
    status: str
    created_at: datetime
    updated_at: Optional[datetime] = None

class AssetAssignmentBase(BaseModel):
    asset_id: int
    employee_id: int
    checkout_date: date
    expected_return_date: Optional[date] = None

class AssetAssignmentCreate(AssetAssignmentBase):
    pass

class AssetAssignmentResponse(AssetAssignmentBase):
    id: int
    status: str
    created_at: datetime
