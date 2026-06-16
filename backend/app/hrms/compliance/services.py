import csv
from io import StringIO
from typing import List, Dict, Any
from jinja2 import Environment, FileSystemLoader
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from decimal import Decimal
import os
import math

from app.hrms.payroll.models import Payslip, PayrollRun
from app.hrms.employee.models import Employee, EmployeeBankDetail, EmployeeStatutoryId
from app.hrms.org.models import Company, Department, Designation

def number_to_words(n):
    # A simplified stub. A real implementation would use inflect or num2words library.
    return f"{n} (in words generation requires library)"

class ComplianceService:
    def __init__(self, db: AsyncSession):
        self.db = db
        # Set up Jinja2 environment
        template_dir = os.path.join(os.path.dirname(__file__), 'templates')
        self.env = Environment(loader=FileSystemLoader(template_dir))

    async def generate_payslip_html(self, payslip_id: int) -> str:
        # Load Payslip with components
        stmt = select(Payslip).options(
            selectinload(Payslip.components)
        ).where(Payslip.id == payslip_id)
        result = await self.db.execute(stmt)
        payslip = result.scalars().first()

        if not payslip:
            raise ValueError(f"Payslip {payslip_id} not found")

        # Load Employee
        stmt_emp = select(Employee).where(Employee.id == payslip.employee_id)
        result_emp = await self.db.execute(stmt_emp)
        employee = result_emp.scalars().first()

        # Load Company, Dept, Designation, Bank, Statutory
        stmt_comp = select(Company).where(Company.id == employee.company_id)
        company = (await self.db.execute(stmt_comp)).scalars().first()

        stmt_dept = select(Department).where(Department.id == employee.department_id)
        department = (await self.db.execute(stmt_dept)).scalars().first()

        stmt_desg = select(Designation).where(Designation.id == employee.designation_id)
        designation = (await self.db.execute(stmt_desg)).scalars().first()

        stmt_bank = select(EmployeeBankDetail).where(EmployeeBankDetail.employee_id == employee.id)
        bank = (await self.db.execute(stmt_bank)).scalars().first()

        stmt_stat = select(EmployeeStatutoryId).where(EmployeeStatutoryId.employee_id == employee.id)
        statutory = (await self.db.execute(stmt_stat)).scalars().first()

        # Load Payroll Period from Payroll Run
        stmt_pr = select(PayrollRun).where(PayrollRun.id == payslip.payroll_run_id)
        payroll_run = (await self.db.execute(stmt_pr)).scalars().first()

        earnings = [c for c in payslip.components if c.type == 'earning']
        deductions = [c for c in payslip.components if c.type == 'deduction']

        # Fake the component names for now since we don't have the SalaryComponent table joined deeply here
        # In a real scenario, we would join SalaryComponent
        
        template = self.env.get_template('payslip.html')
        html_content = template.render(
            company=company,
            payroll_period=payroll_run,
            employee=employee,
            department=department,
            designation=designation,
            bank=bank,
            statutory=statutory,
            payslip=payslip,
            earnings=earnings,
            deductions=deductions,
            net_pay_words=number_to_words(payslip.net_pay)
        )
        return html_content

    async def generate_pf_ecr(self, payroll_run_id: int) -> str:
        # PF ECR requires: UAN, Name, Gross Wages, EPF Wages, EPS Wages, EDLI Wages, 
        # EPF Contri Remitted, EPS Contri Remitted, EPF EPS Diff, NCP Days, Refunds
        
        # 1. Fetch all payslips for the run
        stmt = select(Payslip).where(Payslip.payroll_run_id == payroll_run_id)
        result = await self.db.execute(stmt)
        payslips = result.scalars().all()

        output = StringIO()
        writer = csv.writer(output, delimiter='#~#')
        
        # ECR does not have a header row in the TXT file, but we'll return CSV format for easy download
        # Usually it's UAN#~#Member_Name#~#Gross_Wages#~#EPF_Wages...
        
        for p in payslips:
            # fetch statutory IDs
            stmt_stat = select(EmployeeStatutoryId).where(EmployeeStatutoryId.employee_id == p.employee_id)
            stat = (await self.db.execute(stmt_stat)).scalars().first()
            
            stmt_emp = select(Employee).where(Employee.id == p.employee_id)
            emp = (await self.db.execute(stmt_emp)).scalars().first()
            
            uan = stat.uan if stat and stat.uan else ''
            name = f"{emp.first_name} {emp.last_name}"
            
            # These would ideally come from the payslip's rule snapshots
            gross_wages = int(p.gross_pay)
            epf_wages = min(gross_wages, 15000)
            eps_wages = min(gross_wages, 15000)
            edli_wages = min(gross_wages, 15000)
            
            epf_contri = math.ceil(epf_wages * 0.12)
            eps_contri = math.ceil(eps_wages * 0.0833)
            epf_eps_diff = epf_contri - eps_contri
            ncp_days = int(p.leave_without_pay)
            refunds = 0
            
            writer.writerow([
                uan, name, gross_wages, epf_wages, eps_wages, edli_wages,
                epf_contri, eps_contri, epf_eps_diff, ncp_days, refunds
            ])
            
        return output.getvalue()

    async def generate_bank_remittance(self, payroll_run_id: int) -> str:
        stmt = select(Payslip).where(Payslip.payroll_run_id == payroll_run_id)
        result = await self.db.execute(stmt)
        payslips = result.scalars().all()

        output = StringIO()
        writer = csv.writer(output)
        writer.writerow(['Employee Code', 'Employee Name', 'Bank Account Number', 'IFSC Code', 'Amount'])
        
        for p in payslips:
            stmt_emp = select(Employee).where(Employee.id == p.employee_id)
            emp = (await self.db.execute(stmt_emp)).scalars().first()
            
            stmt_bank = select(EmployeeBankDetail).where(EmployeeBankDetail.employee_id == p.employee_id)
            bank = (await self.db.execute(stmt_bank)).scalars().first()
            
            emp_code = emp.employee_number
            name = f"{emp.first_name} {emp.last_name}"
            ac_num = bank.account_number if bank else ''
            ifsc = bank.ifsc_code if bank else ''
            amount = f"{p.net_pay:.2f}"
            
            writer.writerow([emp_code, name, ac_num, ifsc, amount])
            
        return output.getvalue()
