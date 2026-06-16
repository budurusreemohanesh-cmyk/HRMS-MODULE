from pydantic import BaseModel, ConfigDict
from datetime import date, datetime
from typing import Optional

class AppraisalCycleBase(BaseModel):
    company_id: int
    cycle_name: str
    start_date: date
    end_date: date
    status: str = "Active"

class AppraisalCycleCreate(AppraisalCycleBase):
    pass

class AppraisalCycleResponse(AppraisalCycleBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)

class GoalBase(BaseModel):
    employee_id: int
    appraisal_cycle_id: int
    title: str
    description: Optional[str] = None
    weight: float = 1.0
    progress: int = 0
    status: str = "In Progress"

class GoalCreate(GoalBase):
    pass

class GoalResponse(GoalBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)

class AppraisalBase(BaseModel):
    employee_id: int
    appraisal_cycle_id: int
    final_score: Optional[float] = None
    manager_feedback: Optional[str] = None
    status: str = "Draft"

class AppraisalCreate(AppraisalBase):
    pass

class AppraisalResponse(AppraisalBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)

class AppraisalFeedbackBase(BaseModel):
    appraisal_id: int
    reviewer_id: int
    feedback_text: str
    score: float

class AppraisalFeedbackCreate(AppraisalFeedbackBase):
    pass

class AppraisalFeedbackResponse(AppraisalFeedbackBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)
