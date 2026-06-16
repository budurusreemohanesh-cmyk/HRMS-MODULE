from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.base import Base

class Employee(Base):
    __tablename__ = "employee"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    
    # Business keys
    employee_number = Column(String, index=True, nullable=False)
    external_id = Column(String, index=True, nullable=True) # For Frappe sync
    
    # Core Data
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=True)
    gender = Column(String, nullable=True)
    date_of_birth = Column(Date, nullable=True)
    
    # Employment
    date_of_joining = Column(Date, nullable=False)
    relieving_date = Column(Date, nullable=True)
    status = Column(String, nullable=False, default="active") # active, inactive, suspended, left
    
    # Current Assignments (mirrored from EmployeePropertyHistory for fast query)
    department_id = Column(Integer, ForeignKey("department.id"), nullable=True)
    designation_id = Column(Integer, ForeignKey("designation.id"), nullable=True)
    branch_id = Column(Integer, ForeignKey("branch.id"), nullable=True)
    grade_id = Column(Integer, ForeignKey("grade.id"), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())


class EmployeeDocument(Base):
    __tablename__ = "employee_document"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    document_type = Column(String, nullable=False) # e.g. Resume, ID Proof
    document_url = Column(String, nullable=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class EmployeeBankDetail(Base):
    __tablename__ = "employee_bank_detail"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    bank_name = Column(String, nullable=False)
    account_number = Column(String, nullable=False)
    ifsc_code = Column(String, nullable=False)
    micr_code = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())


class EmployeeStatutoryId(Base):
    __tablename__ = "employee_statutory_id"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    # These should be encrypted at rest in the future
    pan_number = Column(String, nullable=True)
    aadhaar_number = Column(String, nullable=True) # Usually store last 4 or hash
    uan = Column(String, nullable=True)
    provident_fund_account = Column(String, nullable=True)
    esi_number = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())


class EmployeePropertyHistory(Base):
    """Append-only history for designation/department/grade changes"""
    __tablename__ = "employee_property_history"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    property_name = Column(String, nullable=False) # e.g., 'designation_id', 'department_id'
    old_value = Column(String, nullable=True)
    new_value = Column(String, nullable=False)
    
    effective_from = Column(Date, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class EmployeeTransfer(Base):
    __tablename__ = "employee_transfer"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    old_branch_id = Column(Integer, ForeignKey("branch.id"), nullable=True)
    new_branch_id = Column(Integer, ForeignKey("branch.id"), nullable=False)
    
    transfer_date = Column(Date, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class EmployeePromotion(Base):
    __tablename__ = "employee_promotion"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    old_designation_id = Column(Integer, ForeignKey("designation.id"), nullable=True)
    new_designation_id = Column(Integer, ForeignKey("designation.id"), nullable=False)
    
    promotion_date = Column(Date, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
