from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List, Optional
from datetime import date

from app.db.session import get_db
from app.hrms.employee import models, schemas
from app.hrms.employee.models import EmployeePropertyHistory

router = APIRouter()

@router.post("/", response_model=schemas.EmployeeResponse)
async def create_employee(employee: schemas.EmployeeCreate, db: AsyncSession = Depends(get_db)):
    db_employee = models.Employee(**employee.model_dump())
    db.add(db_employee)
    await db.commit()
    await db.refresh(db_employee)
    return db_employee

@router.get("/", response_model=List[schemas.EmployeeResponse])
async def list_employees(
    status: Optional[str] = None, 
    department_id: Optional[int] = None, 
    skip: int = 0, 
    limit: int = 100, 
    db: AsyncSession = Depends(get_db)
):
    query = select(models.Employee)
    if status:
        query = query.where(models.Employee.status == status)
    if department_id:
        query = query.where(models.Employee.department_id == department_id)
        
    result = await db.execute(query.offset(skip).limit(limit))
    return result.scalars().all()

@router.get("/{id}", response_model=schemas.EmployeeResponse)
async def get_employee(id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Employee).where(models.Employee.id == id))
    employee = result.scalar_one_or_none()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee

from app.events.bus import bus

@router.patch("/{id}", response_model=schemas.EmployeeResponse)
async def update_employee(id: int, emp_update: schemas.EmployeeUpdate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Employee).where(models.Employee.id == id))
    employee = result.scalar_one_or_none()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    update_data = emp_update.model_dump(exclude_unset=True)
    old_status = employee.status
    
    # Handle append-only property history for designation
    if 'designation_id' in update_data and update_data['designation_id'] != employee.designation_id:
        history = EmployeePropertyHistory(
            employee_id=employee.id,
            property_name='designation_id',
            old_value=str(employee.designation_id) if employee.designation_id else None,
            new_value=str(update_data['designation_id']),
            effective_from=date.today()
        )
        db.add(history)

    for key, value in update_data.items():
        setattr(employee, key, value)
        
    # Dispatch event if status changed
    if 'status' in update_data and update_data['status'] != old_status:
        bus.publish('employee.status_changed', {
            'employee_id': employee.id,
            'old_status': old_status,
            'new_status': employee.status
        })
        
    await db.commit()
    await db.refresh(employee)
    return employee

@router.get("/{id}/history")
async def get_employee_history(id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(EmployeePropertyHistory).where(EmployeePropertyHistory.employee_id == id))
    return result.scalars().all()
