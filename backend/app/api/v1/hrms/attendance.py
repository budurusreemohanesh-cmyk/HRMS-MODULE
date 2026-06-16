from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List, Optional
from datetime import date

from app.db.session import get_db
from app.hrms.attendance import models, schemas

router = APIRouter()

@router.post("/check-in", response_model=schemas.EmployeeCheckinResponse)
async def check_in(checkin: schemas.EmployeeCheckinCreate, db: AsyncSession = Depends(get_db)):
    if checkin.log_type not in ["IN", "OUT"]:
        raise HTTPException(status_code=400, detail="log_type must be IN or OUT")
    
    db_checkin = models.EmployeeCheckin(**checkin.model_dump())
    db.add(db_checkin)
    await db.commit()
    await db.refresh(db_checkin)
    return db_checkin

@router.get("/{employee_id}/attendance", response_model=List[schemas.AttendanceRecordResponse])
async def get_employee_attendance(
    employee_id: int, 
    from_date: Optional[date] = None, 
    to_date: Optional[date] = None, 
    db: AsyncSession = Depends(get_db)
):
    query = select(models.AttendanceRecord).where(models.AttendanceRecord.employee_id == employee_id)
    if from_date:
        query = query.where(models.AttendanceRecord.attendance_date >= from_date)
    if to_date:
        query = query.where(models.AttendanceRecord.attendance_date <= to_date)
        
    result = await db.execute(query)
    return result.scalars().all()
