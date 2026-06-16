from sqlalchemy import Column, Integer, String, Float, Date, Boolean, ForeignKey, DateTime
from sqlalchemy.sql import func
from app.db.base import Base

class TrainingProgram(Base):
    __tablename__ = "training_program"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), nullable=False)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class TrainingEvent(Base):
    __tablename__ = "training_event"

    id = Column(Integer, primary_key=True, index=True)
    training_program_id = Column(Integer, ForeignKey("training_program.id"), nullable=False)
    event_name = Column(String, nullable=False)
    event_date = Column(Date, nullable=False)
    trainer_name = Column(String, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class TrainingResult(Base):
    __tablename__ = "training_result"

    id = Column(Integer, primary_key=True, index=True)
    training_event_id = Column(Integer, ForeignKey("training_event.id"), nullable=False)
    employee_id = Column(Integer, ForeignKey("employee.id"), nullable=False)
    
    status = Column(String, default="Scheduled") # Scheduled, Completed, Failed
    score = Column(Float, nullable=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
