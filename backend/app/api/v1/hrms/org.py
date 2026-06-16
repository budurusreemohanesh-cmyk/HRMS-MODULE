from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.db.session import get_db
from app.hrms.org import models, schemas

router = APIRouter()

# --- Companies ---
@router.post("/companies", response_model=schemas.CompanyResponse)
async def create_company(company: schemas.CompanyCreate, db: AsyncSession = Depends(get_db)):
    db_company = models.Company(**company.model_dump())
    db.add(db_company)
    await db.commit()
    await db.refresh(db_company)
    return db_company

@router.get("/companies", response_model=List[schemas.CompanyResponse])
async def list_companies(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Company).offset(skip).limit(limit))
    return result.scalars().all()

# --- Departments ---
@router.post("/departments", response_model=schemas.DepartmentResponse)
async def create_department(dept: schemas.DepartmentCreate, db: AsyncSession = Depends(get_db)):
    db_dept = models.Department(**dept.model_dump())
    db.add(db_dept)
    await db.commit()
    await db.refresh(db_dept)
    return db_dept

@router.get("/departments", response_model=List[schemas.DepartmentResponse])
async def list_departments(company_id: int, skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Department).where(models.Department.company_id == company_id).offset(skip).limit(limit))
    return result.scalars().all()

# --- Designations ---
@router.post("/designations", response_model=schemas.DesignationResponse)
async def create_designation(desig: schemas.DesignationCreate, db: AsyncSession = Depends(get_db)):
    db_desig = models.Designation(**desig.model_dump())
    db.add(db_desig)
    await db.commit()
    await db.refresh(db_desig)
    return db_desig

@router.get("/designations", response_model=List[schemas.DesignationResponse])
async def list_designations(company_id: int, skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Designation).where(models.Designation.company_id == company_id).offset(skip).limit(limit))
    return result.scalars().all()
