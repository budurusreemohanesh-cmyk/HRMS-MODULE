from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List

from app.db.session import get_db
from app.hrms.performance import models, schemas

router = APIRouter()

@router.post("/cycles", response_model=schemas.AppraisalCycleResponse)
async def create_appraisal_cycle(cycle: schemas.AppraisalCycleCreate, db: AsyncSession = Depends(get_db)):
    db_cycle = models.AppraisalCycle(**cycle.model_dump())
    db.add(db_cycle)
    await db.commit()
    await db.refresh(db_cycle)
    return db_cycle

@router.post("/goals", response_model=schemas.GoalResponse)
async def create_goal(goal: schemas.GoalCreate, db: AsyncSession = Depends(get_db)):
    db_goal = models.Goal(**goal.model_dump())
    db.add(db_goal)
    await db.commit()
    await db.refresh(db_goal)
    return db_goal

@router.post("/appraisals", response_model=schemas.AppraisalResponse)
async def create_appraisal(appraisal: schemas.AppraisalCreate, db: AsyncSession = Depends(get_db)):
    db_appraisal = models.Appraisal(**appraisal.model_dump())
    db.add(db_appraisal)
    await db.commit()
    await db.refresh(db_appraisal)
    return db_appraisal

@router.post("/appraisals/feedback", response_model=schemas.AppraisalFeedbackResponse)
async def create_appraisal_feedback(feedback: schemas.AppraisalFeedbackCreate, db: AsyncSession = Depends(get_db)):
    db_feedback = models.AppraisalFeedback(**feedback.model_dump())
    db.add(db_feedback)
    await db.commit()
    await db.refresh(db_feedback)
    return db_feedback

@router.post("/appraisals/{appraisal_id}/calculate", response_model=schemas.AppraisalResponse)
async def calculate_appraisal_score(appraisal_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.Appraisal).where(models.Appraisal.id == appraisal_id))
    appraisal = result.scalars().first()
    if not appraisal:
        raise HTTPException(status_code=404, detail="Appraisal not found")

    # 1. Get Goal progress (we map progress 0-100 to a 1-5 scale)
    goals_result = await db.execute(select(models.Goal).where(
        models.Goal.employee_id == appraisal.employee_id,
        models.Goal.appraisal_cycle_id == appraisal.appraisal_cycle_id
    ))
    goals = goals_result.scalars().all()
    
    total_goal_weight = sum(g.weight for g in goals)
    goal_score = 0
    if total_goal_weight > 0:
        weighted_progress = sum((g.progress / 100.0) * g.weight for g in goals)
        goal_score = (weighted_progress / total_goal_weight) * 5.0  # scale to 5

    # 2. Get Feedback scores
    feedback_result = await db.execute(select(models.AppraisalFeedback).where(models.AppraisalFeedback.appraisal_id == appraisal_id))
    feedbacks = feedback_result.scalars().all()
    
    feedback_score = 0
    if feedbacks:
        feedback_score = sum(f.score for f in feedbacks) / len(feedbacks)

    # Simple average of goals and 360 feedback
    if total_goal_weight > 0 and feedbacks:
        final_score = (goal_score + feedback_score) / 2
    elif total_goal_weight > 0:
        final_score = goal_score
    elif feedbacks:
        final_score = feedback_score
    else:
        final_score = 0

    appraisal.final_score = final_score
    appraisal.status = "Completed"
    
    await db.commit()
    await db.refresh(appraisal)
    return appraisal
