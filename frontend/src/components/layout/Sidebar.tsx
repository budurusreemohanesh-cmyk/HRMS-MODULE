import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isOrganisationActive = location.pathname.includes('/companies') || location.pathname.includes('/organisation');
  const isAttendanceActive = location.pathname.includes('/attendance') || location.pathname.includes('/leave-ledger') || location.pathname.includes('/leave-requests');
  const isPayrollActive = location.pathname.includes('/payroll');
  const isStatutoryActive = location.pathname.includes('/statutory');

  const [isOrganisationOpen, setIsOrganisationOpen] = useState(isOrganisationActive);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(isAttendanceActive);
  const [isPayrollOpen, setIsPayrollOpen] = useState(isPayrollActive);
  const [isStatutoryOpen, setIsStatutoryOpen] = useState(isStatutoryActive);

  useEffect(() => {
    if (isOrganisationActive) setIsOrganisationOpen(true);
    if (isAttendanceActive) setIsAttendanceOpen(true);
    if (isPayrollActive) setIsPayrollOpen(true);
    if (isStatutoryActive) setIsStatutoryOpen(true);
  }, [isOrganisationActive, isAttendanceActive, isPayrollActive, isStatutoryActive]);

  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center w-full px-md py-sm transition-all duration-200 ${
      isActive 
        ? 'bg-primary-container text-on-primary border-l-4 border-primary opacity-100'
        : 'text-secondary-fixed-dim hover:bg-secondary-container hover:text-on-secondary-container'
    }`;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-sidebar-width bg-inverse-surface border-r border-outline-variant flex flex-col z-50">
      <div className="px-lg py-xl">
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-primary">Enterprise HRMS</h1>
        <p className="font-label-group text-label-group uppercase tracking-widest text-secondary-fixed-dim mt-xs">HR Admin Portal</p>
      </div>
      
      <nav className="flex-1 px-sm space-y-xs overflow-y-auto custom-scrollbar">
        {/* Active Tab Logic */}
        <NavLink to="/dashboard" className={getNavClass}>
          <span className="material-symbols-outlined mr-md">dashboard</span>
          <span className="font-nav-item text-nav-item">Dashboard</span>
        </NavLink>
        <li className="list-none">
          <div 
            onClick={() => setIsOrganisationOpen(!isOrganisationOpen)}
            className={`flex items-center justify-between px-md py-sm cursor-pointer group transition-all duration-200 ${
            isOrganisationActive
              ? 'bg-on-secondary-fixed-variant text-white border-l-4 border-primary-container' 
              : 'text-on-surface-variant hover:text-white hover:bg-on-secondary-fixed-variant border-l-4 border-transparent'
          }`}>
            <div className="flex items-center gap-md">
              <span className={`material-symbols-outlined ${isOrganisationActive ? 'filled' : ''}`}>corporate_fare</span>
              <span className="font-nav-item text-nav-item">Organisation</span>
            </div>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: isOrganisationOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
          </div>
          
          {isOrganisationOpen && (
            <ul className="ml-xl mt-xs flex flex-col gap-xs border-l border-outline-variant pl-sm">
              <li>
                <NavLink 
                  to="/companies" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/organisation/branches" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Branches
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/organisation/departments" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Departments
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/organisation/designations" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Designations
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/organisation/grades" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Grades
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <NavLink to="/employees" className={getNavClass}>
          <span className="material-symbols-outlined mr-md">groups</span>
          <span className="font-nav-item text-nav-item">Employees</span>
        </NavLink>
        <li className="list-none">
          <div 
            onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
            className={`flex items-center justify-between px-md py-sm cursor-pointer group transition-all duration-200 ${
            isAttendanceActive
              ? 'bg-on-secondary-fixed-variant text-white border-l-4 border-primary-container' 
              : 'text-on-surface-variant hover:text-white hover:bg-on-secondary-fixed-variant border-l-4 border-transparent'
          }`}>
            <div className="flex items-center gap-md">
              <span className={`material-symbols-outlined ${isAttendanceActive ? 'filled' : ''}`}>calendar_today</span>
              <span className="font-nav-item text-nav-item">Attendance & Leave</span>
            </div>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: isAttendanceOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
          </div>
          
          {/* Sub-navigation */}
          {isAttendanceOpen && (
            <ul className="ml-xl mt-xs flex flex-col gap-xs border-l border-outline-variant pl-sm">
              <li>
                <NavLink 
                  to="/attendance" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Attendance Logs
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/attendance/shifts" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Shift Types
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/attendance/holidays" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Holiday Lists
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/leave-requests" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Leave Requests
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/leave-ledger" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Leave Ledger
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/attendance/leave-config" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Leave Configuration
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/attendance/leave-encashment" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Leave Encashment
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="list-none">
          <div 
            onClick={() => setIsPayrollOpen(!isPayrollOpen)}
            className={`flex items-center justify-between px-md py-sm cursor-pointer group transition-all duration-200 ${
            isPayrollActive
              ? 'bg-on-secondary-fixed-variant text-white border-l-4 border-primary-container' 
              : 'text-on-surface-variant hover:text-white hover:bg-on-secondary-fixed-variant border-l-4 border-transparent'
          }`}>
            <div className="flex items-center gap-md">
              <span className={`material-symbols-outlined ${isPayrollActive ? 'filled' : ''}`}>payments</span>
              <span className="font-nav-item text-nav-item">Payroll</span>
            </div>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: isPayrollOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
          </div>
          
          {isPayrollOpen && (
            <ul className="ml-xl mt-xs flex flex-col gap-xs border-l border-outline-variant pl-sm">
              <li>
                <NavLink 
                  to="/payroll/salary-components" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Salary Components
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/payroll/salary-structures" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Salary Structures
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/payroll/periods" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Payroll Periods
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/payroll/additional-salary" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Additional Salary
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/payroll" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive && location.pathname === '/payroll' ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Payroll Processing
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        
        {/* Statutory & Tax with sub-navigation */}
        <li className="list-none">
          <div 
            onClick={() => setIsStatutoryOpen(!isStatutoryOpen)}
            className={`flex items-center justify-between px-md py-sm cursor-pointer group transition-all duration-200 ${
            isStatutoryActive 
              ? 'bg-on-secondary-fixed-variant text-white border-l-4 border-primary-container' 
              : 'text-on-surface-variant hover:text-white hover:bg-on-secondary-fixed-variant border-l-4 border-transparent'
          }`}>
            <div className="flex items-center gap-md">
              <span className={`material-symbols-outlined ${isStatutoryActive ? 'filled' : ''}`}>account_balance</span>
              <span className="font-nav-item text-nav-item">Statutory & Tax</span>
            </div>
            <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ transform: isStatutoryOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
          </div>
          
          {/* Sub-navigation */}
          {isStatutoryOpen && (
            <ul className="ml-xl mt-xs flex flex-col gap-xs border-l border-outline-variant pl-sm">
              <li>
                <NavLink 
                  to="/statutory/pf" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  PF Rules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/esi" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  ESI Rules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/pt" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  PT Rules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/lwf" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  LWF Rules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/tds" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  TDS Slabs
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/exemptions" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Tax Exemptions
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/gratuity" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Gratuity Rules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/statutory/bonus" 
                  className={({ isActive }) => `block py-[4px] px-sm transition-colors ${isActive ? 'text-white font-semibold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Bonus Rules
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </nav>

      <div className="mt-auto px-sm space-y-base pb-md">
        <NavLink to="/settings" className={getNavClass}>
          <span className="material-symbols-outlined mr-md">settings</span>
          <span className="font-nav-item text-nav-item">Settings</span>
        </NavLink>
        <button onClick={handleLogout} className="flex items-center w-full px-md py-sm transition-all duration-200 text-error hover:bg-error/10 rounded">
          <span className="material-symbols-outlined mr-md">logout</span>
          <span className="font-nav-item text-nav-item">Logout</span>
        </button>
      </div>

      <div className="p-md border-t border-outline-variant/20">
        <div className="flex items-center space-x-md">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary-container flex items-center justify-center text-white font-bold">
            HR
          </div>
          <div>
            <p className="text-on-primary font-nav-item text-nav-item">Admin User</p>
            <p className="text-secondary-fixed-dim text-[11px]">admin@company.in</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
