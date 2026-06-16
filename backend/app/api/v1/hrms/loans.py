from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db
from app.hrms.loans import models, schemas

router = APIRouter()

@router.post("/types", response_model=schemas.LoanTypeResponse)
async def create_loan_type(loan_type: schemas.LoanTypeCreate, db: AsyncSession = Depends(get_db)):
    db_type = models.LoanType(**loan_type.model_dump())
    db.add(db_type)
    await db.commit()
    await db.refresh(db_type)
    return db_type

@router.post("/applications", response_model=schemas.LoanApplicationResponse)
async def apply_for_loan(application: schemas.LoanApplicationCreate, db: AsyncSession = Depends(get_db)):
    db_app = models.LoanApplication(**application.model_dump())
    db.add(db_app)
    await db.commit()
    await db.refresh(db_app)
    return db_app

@router.post("/schedules", response_model=schemas.LoanRepaymentScheduleResponse)
async def create_repayment_schedule(schedule: schemas.LoanRepaymentScheduleCreate, db: AsyncSession = Depends(get_db)):
    db_schedule = models.LoanRepaymentSchedule(**schedule.model_dump())
    db.add(db_schedule)
    await db.commit()
    await db.refresh(db_schedule)
    return db_schedule
