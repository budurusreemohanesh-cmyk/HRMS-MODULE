from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func
from typing import List

from app.db.session import get_db
from app.hrms.leave import models, schemas

router = APIRouter()

@router.post("/applications", response_model=schemas.LeaveApplicationResponse)
async def apply_leave(application: schemas.LeaveApplicationCreate, db: AsyncSession = Depends(get_db)):
    db_app = models.LeaveApplication(**application.model_dump(), status="Pending")
    db.add(db_app)
    await db.commit()
    await db.refresh(db_app)
    return db_app

@router.patch("/applications/{application_id}/approve", response_model=schemas.LeaveApplicationResponse)
async def approve_leave(application_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.LeaveApplication).where(models.LeaveApplication.id == application_id))
    db_app = result.scalar_one_or_none()
    
    if not db_app:
        raise HTTPException(status_code=404, detail="Leave application not found")
    if db_app.status == "Approved":
        raise HTTPException(status_code=400, detail="Leave already approved")

    db_app.status = "Approved"
    
    # Calculate days
    delta = db_app.to_date - db_app.from_date
    days = delta.days + 1
    if db_app.half_day:
        days -= 0.5
        
    # Create append-only ledger entry (negative balance)
    ledger_entry = models.LeaveBalanceLedger(
        employee_id=db_app.employee_id,
        leave_type_id=db_app.leave_type_id,
        transaction_type="application",
        leaves=-days,
        from_date=db_app.from_date,
        to_date=db_app.to_date,
        reference_type="leave_application",
        reference_id=db_app.id
    )
    db.add(ledger_entry)
    
    await db.commit()
    await db.refresh(db_app)
    return db_app

@router.patch("/applications/{application_id}/reject", response_model=schemas.LeaveApplicationResponse)
async def reject_leave(application_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.LeaveApplication).where(models.LeaveApplication.id == application_id))
    db_app = result.scalar_one_or_none()
    if not db_app:
        raise HTTPException(status_code=404, detail="Leave application not found")
        
    db_app.status = "Rejected"
    await db.commit()
    await db.refresh(db_app)
    return db_app

@router.get("/{employee_id}/balance")
async def get_leave_balance(employee_id: int, leave_type_id: int, db: AsyncSession = Depends(get_db)):
    query = select(func.sum(models.LeaveBalanceLedger.leaves)).where(
        models.LeaveBalanceLedger.employee_id == employee_id,
        models.LeaveBalanceLedger.leave_type_id == leave_type_id
    )
    result = await db.execute(query)
    balance = result.scalar() or 0.0
    return {"employee_id": employee_id, "leave_type_id": leave_type_id, "balance": balance}
