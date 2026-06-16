from fastapi import FastAPI
from app.core.config import settings
from app.api.v1.hrms import (
    org, employees, attendance, leave, payroll, 
    expenses, assets, recruitment, performance, 
    training, loans, separation, statutory, compliance
)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

app.include_router(org.router, prefix=f"{settings.API_V1_STR}/hrms/org", tags=["Organization"])
app.include_router(employees.router, prefix=f"{settings.API_V1_STR}/hrms/employees", tags=["Employees"])
app.include_router(attendance.router, prefix=f"{settings.API_V1_STR}/hrms/attendance", tags=["Attendance"])
app.include_router(leave.router, prefix=f"{settings.API_V1_STR}/hrms/leave", tags=["Leave"])
app.include_router(payroll.router, prefix=f"{settings.API_V1_STR}/hrms/payroll", tags=["Payroll"])
app.include_router(expenses.router, prefix=f"{settings.API_V1_STR}/hrms/expenses", tags=["Expenses"])
app.include_router(assets.router, prefix=f"{settings.API_V1_STR}/hrms/assets", tags=["Assets"])
app.include_router(recruitment.router, prefix=f"{settings.API_V1_STR}/hrms/recruitment", tags=["Recruitment"])
app.include_router(performance.router, prefix=f"{settings.API_V1_STR}/hrms/performance", tags=["Performance"])
app.include_router(training.router, prefix=f"{settings.API_V1_STR}/hrms/training", tags=["Training"])
app.include_router(loans.router, prefix=f"{settings.API_V1_STR}/hrms/loans", tags=["Loans"])
app.include_router(separation.router, prefix=f"{settings.API_V1_STR}/hrms/separation", tags=["Separation"])
app.include_router(statutory.router, prefix=f"{settings.API_V1_STR}/hrms/statutory", tags=["Statutory Rules"])
app.include_router(compliance.router, prefix=f"{settings.API_V1_STR}/hrms/compliance", tags=["Compliance Outputs"])

@app.on_event("startup")
async def startup_event():
    from app.hrms.assets.listeners import register_listeners as register_asset_listeners
    register_asset_listeners()

@app.get("/health")
async def health_check():
    return {"status": "ok"}
