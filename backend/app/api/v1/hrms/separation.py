from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db
from app.hrms.separation import models, schemas

router = APIRouter()

@router.post("/resignations", response_model=schemas.ResignationResponse)
async def submit_resignation(resignation: schemas.ResignationCreate, db: AsyncSession = Depends(get_db)):
    db_resignation = models.Resignation(**resignation.model_dump())
    db.add(db_resignation)
    await db.commit()
    await db.refresh(db_resignation)
    return db_resignation

@router.post("/exit_interviews", response_model=schemas.ExitInterviewResponse)
async def log_exit_interview(interview: schemas.ExitInterviewCreate, db: AsyncSession = Depends(get_db)):
    db_interview = models.ExitInterview(**interview.model_dump())
    db.add(db_interview)
    await db.commit()
    await db.refresh(db_interview)
    return db_interview

@router.post("/fnf", response_model=schemas.FullAndFinalSettlementResponse)
async def process_fnf(fnf: schemas.FullAndFinalSettlementCreate, db: AsyncSession = Depends(get_db)):
    db_fnf = models.FullAndFinalSettlement(**fnf.model_dump())
    db.add(db_fnf)
    await db.commit()
    await db.refresh(db_fnf)
    return db_fnf
