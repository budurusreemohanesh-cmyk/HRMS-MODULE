from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.db.session import get_db
from app.hrms.assets import models, schemas

router = APIRouter()

@router.post("/categories", response_model=schemas.AssetCategoryResponse)
async def create_category(category: schemas.AssetCategoryCreate, db: AsyncSession = Depends(get_db)):
    db_cat = models.AssetCategory(**category.model_dump())
    db.add(db_cat)
    await db.commit()
    await db.refresh(db_cat)
    return db_cat

@router.post("/assets", response_model=schemas.AssetResponse)
async def create_asset(asset: schemas.AssetCreate, db: AsyncSession = Depends(get_db)):
    db_asset = models.Asset(**asset.model_dump())
    db.add(db_asset)
    await db.commit()
    await db.refresh(db_asset)
    return db_asset

@router.post("/assignments", response_model=schemas.AssetAssignmentResponse)
async def assign_asset(assignment: schemas.AssetAssignmentCreate, db: AsyncSession = Depends(get_db)):
    # 1. Verify Asset is Available
    asset_res = await db.execute(select(models.Asset).where(models.Asset.id == assignment.asset_id))
    asset = asset_res.scalar_one_or_none()
    if not asset:
        raise HTTPException(status_code=404, detail="Asset not found")
    
    if asset.status != "Available":
        raise HTTPException(status_code=400, detail=f"Asset is not available. Current status: {asset.status}")
    
    # 2. Create Assignment
    db_assign = models.AssetAssignment(**assignment.model_dump())
    db.add(db_assign)
    
    # 3. Update Asset status to In Use
    asset.status = "In Use"
    
    await db.commit()
    await db.refresh(db_assign)
    return db_assign

@router.patch("/assignments/{assignment_id}/return", response_model=schemas.AssetAssignmentResponse)
async def return_asset(assignment_id: int, return_date: str, db: AsyncSession = Depends(get_db)):
    # This acts as a manual endpoint, but our event listener will do similar logic automatically
    from datetime import date
    try:
        parsed_date = date.fromisoformat(return_date)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")

    assign_res = await db.execute(select(models.AssetAssignment).where(models.AssetAssignment.id == assignment_id))
    assignment = assign_res.scalar_one_or_none()
    if not assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
        
    if assignment.status == "Returned":
        raise HTTPException(status_code=400, detail="Asset already returned")
        
    assignment.status = "Returned"
    assignment.return_date = parsed_date
    
    asset_res = await db.execute(select(models.Asset).where(models.Asset.id == assignment.asset_id))
    asset = asset_res.scalar_one_or_none()
    if asset:
        asset.status = "Available"
        
    await db.commit()
    await db.refresh(assignment)
    return assignment
