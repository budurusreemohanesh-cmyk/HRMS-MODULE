from sqlalchemy import Column, Integer, String, Boolean, DateTime, Date, ForeignKey, Time
from sqlalchemy.sql import func
from app.db.base import Base

class ShiftType(Base):
    __tablename__ = "shift_type"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class ShiftAssignment(Base):
    __tablename__ = "shift_assignment"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    shift_type_id = Column(Integer, ForeignKey("shift_type.id"), nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class EmployeeCheckin(Base):
    __tablename__ = "employee_checkin"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    timestamp = Column(DateTime(timezone=True), nullable=False)
    log_type = Column(String, nullable=False) # "IN" or "OUT"
    device_id = Column(String, nullable=True) # For Biometric Sync

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class AttendanceRecord(Base):
    __tablename__ = "attendance_record"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    attendance_date = Column(Date, nullable=False)
    status = Column(String, nullable=False) # "Present", "Absent", "Half Day", "On Leave"
    shift_type_id = Column(Integer, ForeignKey("shift_type.id"), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class HolidayList(Base):
    __tablename__ = "holiday_list"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    from_date = Column(Date, nullable=False)
    to_date = Column(Date, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

class HolidayListAssignment(Base):
    __tablename__ = "holiday_list_assignment"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    holiday_list_id = Column(Integer, ForeignKey("holiday_list.id"), nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
