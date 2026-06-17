import { useParams, Link } from 'react-router-dom';
import PayslipHeaderCard from './components/PayslipHeaderCard';
import EarningsDeductions from './components/EarningsDeductions';
import StatutoryBreakup from './components/StatutoryBreakup';
import AttendanceSummary from './components/AttendanceSummary';
import StatutoryRules from './components/StatutoryRules';

const PayslipDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col gap-lg">
      {/* Breadcrumbs */}
      <div className="flex justify-between items-end mb-sm">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-caption mb-1">
            <Link to="/payroll" className="hover:text-primary transition-colors">Payroll</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-medium">Payslip #{id || 'PS-2023-10-0842'}</span>
          </nav>
        </div>
      </div>

      <PayslipHeaderCard />

      {/* Main Layout Grid */}
      <div className="flex flex-col xl:flex-row gap-lg">
        {/* Left Content (Tables) */}
        <div className="flex-1 flex flex-col gap-lg">
          {/* Net Pay Banner */}
          <div className="bg-primary-container text-white rounded-xl px-lg py-md flex items-center justify-between border border-outline-variant h-16 shadow-sm">
            <span className="font-body-lg text-body-lg">Net Pay for October 2023</span>
            <span className="font-headline-lg text-headline-lg font-bold">₹ 1,05,000</span>
          </div>
          
          <EarningsDeductions />
          <StatutoryBreakup />
        </div>

        {/* Right Sidebar (Attendance) */}
        <aside className="w-full xl:w-[240px] flex flex-col gap-md">
          <AttendanceSummary />
        </aside>
      </div>

      {/* Statutory Rules Collapsible */}
      <StatutoryRules />
    </div>
  );
};

export default PayslipDetail;
