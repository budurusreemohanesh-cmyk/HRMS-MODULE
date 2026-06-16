from sqlalchemy import Column, Integer, String, Date, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.base import Base

class AssetCategory(Base):
    __tablename__ = "asset_category"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False) # e.g. "Laptop"

class Asset(Base):
    __tablename__ = "asset"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    asset_category_id = Column(Integer, ForeignKey("asset_category.id"), nullable=False)
    
    name = Column(String, nullable=False)
    status = Column(String, default="Available") # Available, In Use, Maintenance, Retired
    serial_number = Column(String, nullable=True)
    purchase_date = Column(Date, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class AssetAssignment(Base):
    __tablename__ = "asset_assignment"

    id = Column(Integer, primary_key=True, index=True)
    asset_id = Column(Integer, ForeignKey("asset.id"), nullable=False)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    checkout_date = Column(Date, nullable=False)
    expected_return_date = Column(Date, nullable=True)
    return_date = Column(Date, nullable=True)
    
    status = Column(String, default="Assigned") # Assigned, Returned
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
