from pydantic import BaseModel
from typing import Optional
from datetime import datetime, date

class TrainingProgramBase(BaseModel):
    company_id: int
    name: str
    description: Optional[str] = None

class TrainingProgramCreate(TrainingProgramBase):
    pass

class TrainingProgramResponse(TrainingProgramBase):
    id: int
    created_at: datetime

class TrainingEventBase(BaseModel):
    training_program_id: int
    event_name: str
    event_date: date
    trainer_name: Optional[str] = None

class TrainingEventCreate(TrainingEventBase):
    pass

class TrainingEventResponse(TrainingEventBase):
    id: int
    created_at: datetime

class TrainingResultBase(BaseModel):
    training_event_id: int
    employee_id: int
    score: Optional[float] = None

class TrainingResultCreate(TrainingResultBase):
    pass

class TrainingResultResponse(TrainingResultBase):
    id: int
    status: str
    created_at: datetime
