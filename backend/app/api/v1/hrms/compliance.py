from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.hrms.compliance.services import ComplianceService

router = APIRouter()

@router.get("/payslips/{payslip_id}/html")
async def get_payslip_html(payslip_id: int, db: AsyncSession = Depends(get_db)):
    svc = ComplianceService(db)
    try:
        html = await svc.generate_payslip_html(payslip_id)
        return Response(content=html, media_type="text/html")
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.get("/payroll-runs/{run_id}/pf-ecr")
async def get_pf_ecr_csv(run_id: int, db: AsyncSession = Depends(get_db)):
    svc = ComplianceService(db)
    csv_data = await svc.generate_pf_ecr(run_id)
    
    return Response(
        content=csv_data, 
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename=ecr_run_{run_id}.txt"}
    )

@router.get("/payroll-runs/{run_id}/bank-remittance")
async def get_bank_remittance_csv(run_id: int, db: AsyncSession = Depends(get_db)):
    svc = ComplianceService(db)
    csv_data = await svc.generate_bank_remittance(run_id)
    
    return Response(
        content=csv_data, 
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename=bank_remittance_{run_id}.csv"}
    )
