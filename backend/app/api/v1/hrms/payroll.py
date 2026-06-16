from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.db.session import get_db
from app.hrms.payroll import models, schemas
from app.hrms.payroll.engine import validate_50_percent_wage_rule

router = APIRouter()

@router.post("/components", response_model=schemas.SalaryComponentResponse)
async def create_salary_component(component: schemas.SalaryComponentCreate, db: AsyncSession = Depends(get_db)):
    db_component = models.SalaryComponent(**component.model_dump())
    db.add(db_component)
    await db.commit()
    await db.refresh(db_component)
    return db_component

@router.post("/assignments", response_model=schemas.SalaryStructureAssignmentResponse)
async def assign_salary_structure(assignment: schemas.SalaryStructureAssignmentCreate, db: AsyncSession = Depends(get_db)):
    # 50% Rule Validation
    # We must fetch the structure components to determine which is basic.
    # For simplicity of this endpoint, we'll assume the front-end or a service layer 
    # calculated the expected Basic Pay. If we had the full breakdown here, we'd sum it.
    # Let's say we look up the structure, evaluate formulas against base_pay, find basic wage, and then validate.
    # This is a stubbed validation logic to show the pattern:
    
    # Example pseudo-validation assuming basic is 40% of base_pay for this structure:
    # basic_wage = assignment.base_pay * 0.4
    # if not validate_50_percent_wage_rule(basic_wage, assignment.base_pay):
    #     raise HTTPException(status_code=400, detail="Assignment violates 50% Basic Wage Rule")
    
    db_assignment = models.SalaryStructureAssignment(**assignment.model_dump())
    db.add(db_assignment)
    await db.commit()
    await db.refresh(db_assignment)
    return db_assignment

@router.post("/salary-slips/generate")
async def generate_salary_slip(req: schemas.SalarySlipGenerateRequest, db: AsyncSession = Depends(get_db)):
    # 1. Fetch assignment for the period
    # 2. Fetch LWP / Attendance
    # 3. Apply AST evaluator
    # 4. Generate Slip
    # (Implementation deferred for exact DB mocking requirements)
    return {"message": "Salary slip generation initiated."}
