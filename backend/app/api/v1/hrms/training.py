from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db
from app.hrms.training import models, schemas

router = APIRouter()

@router.post("/programs", response_model=schemas.TrainingProgramResponse)
async def create_training_program(program: schemas.TrainingProgramCreate, db: AsyncSession = Depends(get_db)):
    db_program = models.TrainingProgram(**program.model_dump())
    db.add(db_program)
    await db.commit()
    await db.refresh(db_program)
    return db_program

@router.post("/events", response_model=schemas.TrainingEventResponse)
async def create_training_event(event: schemas.TrainingEventCreate, db: AsyncSession = Depends(get_db)):
    db_event = models.TrainingEvent(**event.model_dump())
    db.add(db_event)
    await db.commit()
    await db.refresh(db_event)
    return db_event

@router.post("/results", response_model=schemas.TrainingResultResponse)
async def create_training_result(result: schemas.TrainingResultCreate, db: AsyncSession = Depends(get_db)):
    db_result = models.TrainingResult(**result.model_dump())
    db.add(db_result)
    await db.commit()
    await db.refresh(db_result)
    return db_result
