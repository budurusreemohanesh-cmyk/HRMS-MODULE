from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.db.session import get_db
from app.hrms.expenses import models, schemas
from app.hrms.payroll.models import AdditionalSalary

router = APIRouter()

@router.post("/categories", response_model=schemas.ExpenseCategoryResponse)
async def create_expense_category(category: schemas.ExpenseCategoryCreate, db: AsyncSession = Depends(get_db)):
    db_category = models.ExpenseCategory(**category.model_dump())
    db.add(db_category)
    await db.commit()
    await db.refresh(db_category)
    return db_category

@router.post("/claims", response_model=schemas.ExpenseClaimResponse)
async def create_expense_claim(claim: schemas.ExpenseClaimCreate, db: AsyncSession = Depends(get_db)):
    claim_dict = claim.model_dump()
    details = claim_dict.pop('details', [])
    
    db_claim = models.ExpenseClaim(**claim_dict)
    db.add(db_claim)
    await db.commit()
    await db.refresh(db_claim)
    
    for detail in details:
        db_detail = models.ExpenseClaimDetail(expense_claim_id=db_claim.id, **detail)
        db.add(db_detail)
        
    await db.commit()
    return db_claim

@router.patch("/claims/{claim_id}/approve", response_model=schemas.ExpenseClaimResponse)
async def approve_expense_claim(claim_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.ExpenseClaim).where(models.ExpenseClaim.id == claim_id))
    db_claim = result.scalars().first()
    
    if not db_claim:
        raise HTTPException(status_code=404, detail="Expense claim not found")
        
    if db_claim.status == "Approved":
        raise HTTPException(status_code=400, detail="Claim is already approved")
        
    db_claim.status = "Approved"
    
    # Optional logic: sanction total amount (summing up details or using claimed amount)
    db_claim.total_amount_sanctioned = db_claim.total_amount_claimed
    
    # If the expense is to be paid via payroll, create an Additional Salary component
    if db_claim.is_paid_via_payroll:
        # NOTE: A real implementation requires determining the payroll period start/end dates
        # We will create an AdditionalSalary entry that the payroll engine picks up.
        from datetime import date
        add_salary = AdditionalSalary(
            employee_id=db_claim.employee_id,
            company_id=db_claim.company_id,
            salary_component_id=1,  # Hardcoding a generic 'Expense Reimbursement' component ID
            amount=db_claim.total_amount_sanctioned,
            payroll_date=date.today(),
            type="earning"
        )
        db.add(add_salary)
        
    await db.commit()
    await db.refresh(db_claim)
    return db_claim
