from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
import uuid

from app.db.session import get_db
from app.hrms.recruitment import models, schemas
from app.hrms.employee.models import Employee

router = APIRouter()

@router.post("/jobs", response_model=schemas.JobOpeningResponse)
async def create_job_opening(job: schemas.JobOpeningCreate, db: AsyncSession = Depends(get_db)):
    db_job = models.JobOpening(**job.model_dump())
    db.add(db_job)
    await db.commit()
    await db.refresh(db_job)
    return db_job

@router.post("/applicants", response_model=schemas.ApplicantResponse)
async def create_applicant(applicant: schemas.ApplicantCreate, db: AsyncSession = Depends(get_db)):
    db_applicant = models.Applicant(**applicant.model_dump())
    db.add(db_applicant)
    await db.commit()
    await db.refresh(db_applicant)
    return db_applicant

@router.patch("/applicants/{applicant_id}/status", response_model=schemas.ApplicantResponse)
async def update_applicant_status(applicant_id: int, status: str, db: AsyncSession = Depends(get_db)):
    valid_statuses = ["Applied", "Interviewing", "Offered", "Rejected", "Hired"]
    if status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Status must be one of {valid_statuses}")

    result = await db.execute(select(models.Applicant).where(models.Applicant.id == applicant_id))
    db_applicant = result.scalars().first()
    
    if not db_applicant:
        raise HTTPException(status_code=404, detail="Applicant not found")
        
    db_applicant.status = status
    
    # Auto-instantiate employee if hired
    if status == "Hired":
        job_result = await db.execute(select(models.JobOpening).where(models.JobOpening.id == db_applicant.job_opening_id))
        job = job_result.scalars().first()
        
        # Generate a temporary employee_number based on UUID (HR can update it later)
        emp_num = f"EMP-{uuid.uuid4().hex[:6].upper()}"
        
        new_emp = Employee(
            employee_number=emp_num,
            company_id=job.company_id,
            department_id=job.department_id,
            first_name=db_applicant.first_name,
            last_name=db_applicant.last_name,
            email=db_applicant.email,
            status="Active"
        )
        db.add(new_emp)
        
    await db.commit()
    await db.refresh(db_applicant)
    return db_applicant

@router.post("/interviews", response_model=schemas.InterviewResponse)
async def schedule_interview(interview: schemas.InterviewCreate, db: AsyncSession = Depends(get_db)):
    db_interview = models.Interview(**interview.model_dump())
    db.add(db_interview)
    await db.commit()
    await db.refresh(db_interview)
    return db_interview
