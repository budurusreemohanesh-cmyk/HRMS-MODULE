from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import or_
from typing import List
from app.db.session import get_db
from app.hrms.statutory.india import models, schemas

router = APIRouter()

# --- PF Rules ---
@router.post("/pf-rules", response_model=schemas.PfRuleResponse)
async def create_pf_rule(rule: schemas.PfRuleCreate, db: AsyncSession = Depends(get_db)):
    stmt = select(models.PfRule).where(
        models.PfRule.company_id == rule.company_id,
        models.PfRule.effective_to >= rule.effective_from,
        models.PfRule.effective_from <= rule.effective_to if rule.effective_to else True
    )
    result = await db.execute(stmt)
    overlap = result.scalars().first()
    
    if overlap:
        raise HTTPException(status_code=400, detail="Overlapping PF Rule exists for this company and date range.")
    
    db_rule = models.PfRule(**rule.model_dump())
    db.add(db_rule)
    await db.commit()
    await db.refresh(db_rule)
    return db_rule

@router.get("/pf-rules", response_model=List[schemas.PfRuleResponse])
async def get_pf_rules(company_id: int, db: AsyncSession = Depends(get_db)):
    stmt = select(models.PfRule).where(models.PfRule.company_id == company_id)
    result = await db.execute(stmt)
    return result.scalars().all()


# --- ESI Rules ---
@router.post("/esi-rules", response_model=schemas.EsiRuleResponse)
async def create_esi_rule(rule: schemas.EsiRuleCreate, db: AsyncSession = Depends(get_db)):
    stmt = select(models.EsiRule).where(
        models.EsiRule.company_id == rule.company_id,
        models.EsiRule.effective_to >= rule.effective_from,
        models.EsiRule.effective_from <= rule.effective_to if rule.effective_to else True
    )
    result = await db.execute(stmt)
    overlap = result.scalars().first()
    
    if overlap:
        raise HTTPException(status_code=400, detail="Overlapping ESI Rule exists for this company and date range.")

    db_rule = models.EsiRule(**rule.model_dump())
    db.add(db_rule)
    await db.commit()
    await db.refresh(db_rule)
    return db_rule

@router.get("/esi-rules", response_model=List[schemas.EsiRuleResponse])
async def get_esi_rules(company_id: int, db: AsyncSession = Depends(get_db)):
    stmt = select(models.EsiRule).where(models.EsiRule.company_id == company_id)
    result = await db.execute(stmt)
    return result.scalars().all()


# --- PT Slabs ---
@router.post("/pt-slabs", response_model=schemas.ProfessionalTaxSlabResponse)
async def create_pt_slab(slab: schemas.ProfessionalTaxSlabCreate, db: AsyncSession = Depends(get_db)):
    db_slab = models.ProfessionalTaxSlab(**slab.model_dump())
    db.add(db_slab)
    await db.commit()
    await db.refresh(db_slab)
    return db_slab

@router.get("/pt-slabs", response_model=List[schemas.ProfessionalTaxSlabResponse])
async def get_pt_slabs(state: str, db: AsyncSession = Depends(get_db)):
    stmt = select(models.ProfessionalTaxSlab).where(models.ProfessionalTaxSlab.state == state)
    result = await db.execute(stmt)
    return result.scalars().all()


# --- TDS Slabs ---
@router.post("/tds-slabs", response_model=schemas.TdsSlabResponse)
async def create_tds_slab(slab: schemas.TdsSlabCreate, db: AsyncSession = Depends(get_db)):
    db_slab = models.TdsSlab(**slab.model_dump())
    db.add(db_slab)
    await db.commit()
    await db.refresh(db_slab)
    return db_slab

@router.get("/tds-slabs", response_model=List[schemas.TdsSlabResponse])
async def get_tds_slabs(regime: str, db: AsyncSession = Depends(get_db)):
    stmt = select(models.TdsSlab).where(models.TdsSlab.tax_regime == regime)
    result = await db.execute(stmt)
    return result.scalars().all()
