import { EmployeeProfileCard } from './components/EmployeeProfileCard';
import { EmployeeTabs } from './components/EmployeeTabs';
import { Link } from 'react-router-dom';

const EmployeeDetail = () => {
  return (
    <>
      {/* Top Navigation / Breadcrumbs for this specific view can be placed here if we override the global Header, 
          or just below the global header as a secondary nav */}
      <div className="mb-lg flex items-center gap-sm text-on-surface-variant font-caption text-caption">
        <Link to="/employees" className="hover:text-primary cursor-pointer transition-colors">Employees</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-on-surface font-medium">Arjun Singh</span>
      </div>

      <div className="grid grid-cols-12 gap-lg items-start">
        <EmployeeProfileCard />
        <EmployeeTabs />
      </div>
    </>
  );
};

export default EmployeeDetail;
