import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from './components/StatCard';
import PayrollCard from './components/PayrollCard';
import AttendanceTrends from './components/AttendanceTrends';
import RecentActivities from './components/RecentActivities';
import PendingApprovals from './components/PendingApprovals';

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Dashboard Welcome Section */}
      <div className="mb-lg flex justify-between items-end">
        <div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">Good Morning, Siddharth</h3>
          <p className="text-on-surface-variant font-body-md">Here's a snapshot of Acme India Corp's activities for today.</p>
        </div>
        <div className="flex gap-sm">
          <div className="relative" ref={calendarRef}>
            <button 
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="px-md py-sm bg-surface border border-outline-variant text-on-surface font-nav-item text-nav-item rounded-lg hover:bg-surface-container transition-all flex items-center gap-xs"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              Sep 21, 2026
            </button>
            
            {/* Simple Calendar Dropdown Mock */}
            {isCalendarOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-surface rounded-xl shadow-lg border border-outline-variant z-50 p-4">
                <div className="flex justify-between items-center mb-4">
                  <button className="p-1 hover:bg-surface-container rounded"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                  <span className="font-bold text-on-surface text-nav-item">September 2026</span>
                  <button className="p-1 hover:bg-surface-container rounded"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  <div className="text-caption font-bold text-on-surface-variant">Su</div>
                  <div className="text-caption font-bold text-on-surface-variant">Mo</div>
                  <div className="text-caption font-bold text-on-surface-variant">Tu</div>
                  <div className="text-caption font-bold text-on-surface-variant">We</div>
                  <div className="text-caption font-bold text-on-surface-variant">Th</div>
                  <div className="text-caption font-bold text-on-surface-variant">Fr</div>
                  <div className="text-caption font-bold text-on-surface-variant">Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {/* Mock calendar days */}
                  {[...Array(30)].map((_, i) => (
                    <button 
                      key={i} 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${i+1 === 21 ? 'bg-primary text-on-primary font-bold' : 'text-on-surface hover:bg-surface-container'}`}
                      onClick={() => setIsCalendarOpen(false)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-md py-sm bg-primary-container text-on-primary font-nav-item text-nav-item rounded-lg hover:shadow-lg hover:opacity-90 transition-all flex items-center gap-xs"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              New Transaction
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-surface border border-outline-variant rounded-xl shadow-lg z-50 overflow-hidden">
                <ul className="py-2">
                  <li>
                    <button 
                      onClick={() => { setIsDropdownOpen(false); navigate('/employees/new'); }}
                      className="w-full text-left px-4 py-2 hover:bg-surface-container transition-colors flex items-center gap-3 text-on-surface"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">person_add</span>
                      Add New Employee
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setIsDropdownOpen(false); navigate('/leave-requests'); }}
                      className="w-full text-left px-4 py-2 hover:bg-surface-container transition-colors flex items-center gap-3 text-on-surface"
                    >
                      <span className="material-symbols-outlined text-secondary text-lg">event_busy</span>
                      Create Leave Request
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setIsDropdownOpen(false); navigate('/payroll'); }}
                      className="w-full text-left px-4 py-2 hover:bg-surface-container transition-colors flex items-center gap-3 text-on-surface"
                    >
                      <span className="material-symbols-outlined text-tertiary text-lg">payments</span>
                      Start Payroll Run
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setIsDropdownOpen(false); navigate('/leave-ledger'); }}
                      className="w-full text-left px-4 py-2 hover:bg-surface-container transition-colors flex items-center gap-3 text-on-surface"
                    >
                      <span className="material-symbols-outlined text-primary text-lg">account_balance_wallet</span>
                      Allocate Leaves
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bento Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-lg auto-rows-min">
        {/* Stat Card: Attendance */}
        <StatCard 
          icon="how_to_reg"
          iconBgClass="bg-primary-container/10"
          iconTextClass="text-primary-container"
          trendText="+12%"
          trendIcon="trending_up"
          trendClass="text-success text-green-600"
          title="Today's Attendance"
          value="1,248"
          subtitle="94.2% of total strength"
        />

        {/* Stat Card: Leave Applications */}
        <StatCard 
          icon="event_busy"
          iconBgClass="bg-secondary-container/30"
          iconTextClass="text-secondary"
          title="Pending Leaves"
          value="42"
          subtitle="Requires your approval"
        />

        {/* Stat Card: Payroll Pulse */}
        <PayrollCard />

        {/* Main Chart Area: Attendance Trends */}
        <AttendanceTrends />

        {/* Recent Employee Activity Side-bar */}
        <RecentActivities />

        {/* Table Section: Leave Requests */}
        <PendingApprovals />
      </div>
    </>
  );
};

export default Dashboard;
