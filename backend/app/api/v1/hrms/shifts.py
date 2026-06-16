from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db
from app.hrms.shifts import models, schemas

router = APIRouter()

@router.post("/types", response_model=schemas.ShiftTypeResponse)
async def create_shift_type(shift_type: schemas.ShiftTypeCreate, db: AsyncSession = Depends(get_db)):
    db_shift_type = models.ShiftType(**shift_type.model_dump())
    db.add(db_shift_type)
    await db.commit()
    await db.refresh(db_shift_type)
    return db_shift_type

@router.post("/assignments", response_model=schemas.ShiftAssignmentResponse)
async def create_shift_assignment(assignment: schemas.ShiftAssignmentCreate, db: AsyncSession = Depends(get_db)):
    db_assignment = models.ShiftAssignment(**assignment.model_dump())
    db.add(db_assignment)
    await db.commit()
    await db.refresh(db_assignment)
    return db_assignment
