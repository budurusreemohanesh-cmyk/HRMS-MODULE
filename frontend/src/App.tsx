import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/AuthLayout';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Companies from './pages/Companies/Companies';
import CompanyDetail from './pages/CompanyDetail/CompanyDetail';
import Branches from './pages/Branches/Branches';
import Departments from './pages/Departments/Departments';
import Designations from './pages/Designations/Designations';
import Grades from './pages/Grades/Grades';
import ShiftTypes from './pages/ShiftTypes/ShiftTypes';
import HolidayLists from './pages/HolidayLists/HolidayLists';
import LeaveConfig from './pages/LeaveConfig/LeaveConfig';
import LeaveEncashment from './pages/LeaveEncashment/LeaveEncashment';
import SalaryComponents from './pages/SalaryComponents/SalaryComponents';
import SalaryStructures from './pages/SalaryStructures/SalaryStructures';
import PayrollPeriods from './pages/PayrollPeriods/PayrollPeriods';
import AdditionalSalary from './pages/AdditionalSalary/AdditionalSalary';
import PFRules from './pages/Statutory/PFRules';
import ESIRules from './pages/Statutory/ESIRules';
import PTRules from './pages/Statutory/PTRules';
import LWFRules from './pages/Statutory/LWFRules';
import TDSSlabs from './pages/Statutory/TDSSlabs';
import TaxExemptions from './pages/Statutory/TaxExemptions';
import GratuityRules from './pages/Statutory/GratuityRules';
import BonusRules from './pages/Statutory/BonusRules';
import Employees from './pages/Employees/Employees';
import EmployeeDetail from './pages/EmployeeDetail/EmployeeDetail';
import AddEmployee from './pages/AddEmployee/AddEmployee';
import LeaveLedger from './pages/LeaveLedger/LeaveLedger';
import AttendanceLogs from './pages/AttendanceLogs/AttendanceLogs';
import LeaveRequests from './pages/LeaveRequests/LeaveRequests';
import PayrollRuns from './pages/PayrollRuns/PayrollRuns';
import PayslipDetail from './pages/PayslipDetail/PayslipDetail';
import SalaryAssignment from './pages/SalaryAssignment/SalaryAssignment';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes (No Sidebar/Header) */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />

        {/* Protected Routes (With Sidebar/Header) */}
        <Route path="/" element={<Layout><Navigate to="/dashboard" replace /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/companies" element={<Layout><Companies /></Layout>} />
        <Route path="/companies/:id" element={<Layout><CompanyDetail /></Layout>} />
        <Route path="/organisation/branches" element={<Layout><Branches /></Layout>} />
        <Route path="/organisation/departments" element={<Layout><Departments /></Layout>} />
        <Route path="/organisation/designations" element={<Layout><Designations /></Layout>} />
        <Route path="/organisation/grades" element={<Layout><Grades /></Layout>} />
        <Route path="/attendance/shifts" element={<Layout><ShiftTypes /></Layout>} />
        <Route path="/attendance/holidays" element={<Layout><HolidayLists /></Layout>} />
        <Route path="/attendance/leave-config" element={<Layout><LeaveConfig /></Layout>} />
        <Route path="/attendance/leave-encashment" element={<Layout><LeaveEncashment /></Layout>} />
        <Route path="/payroll/salary-components" element={<Layout><SalaryComponents /></Layout>} />
        <Route path="/payroll/salary-structures" element={<Layout><SalaryStructures /></Layout>} />
        <Route path="/payroll/periods" element={<Layout><PayrollPeriods /></Layout>} />
        <Route path="/payroll/additional-salary" element={<Layout><AdditionalSalary /></Layout>} />
        <Route path="/statutory/pf" element={<Layout><PFRules /></Layout>} />
        <Route path="/statutory/esi" element={<Layout><ESIRules /></Layout>} />
        <Route path="/statutory/pt" element={<Layout><PTRules /></Layout>} />
        <Route path="/statutory/lwf" element={<Layout><LWFRules /></Layout>} />
        <Route path="/statutory/tds" element={<Layout><TDSSlabs /></Layout>} />
        <Route path="/statutory/exemptions" element={<Layout><TaxExemptions /></Layout>} />
        <Route path="/statutory/gratuity" element={<Layout><GratuityRules /></Layout>} />
        <Route path="/statutory/bonus" element={<Layout><BonusRules /></Layout>} />
        <Route path="/employees" element={<Layout><Employees /></Layout>} />
        <Route path="/employees/new" element={<Layout><AddEmployee /></Layout>} />
        <Route path="/employees/:id" element={<Layout><EmployeeDetail /></Layout>} />
        <Route path="/attendance" element={<Layout><AttendanceLogs /></Layout>} />
        <Route path="/leave-requests" element={<Layout><LeaveRequests /></Layout>} />
        <Route path="/leave-ledger" element={<Layout><LeaveLedger /></Layout>} />
        <Route path="/payroll" element={<Layout><PayrollRuns /></Layout>} />
        <Route path="/payroll/salary-assignment" element={<Layout><SalaryAssignment /></Layout>} />
        <Route path="/payslips/:id" element={<Layout><PayslipDetail /></Layout>} />

        
        {/* System & User Routes */}
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
