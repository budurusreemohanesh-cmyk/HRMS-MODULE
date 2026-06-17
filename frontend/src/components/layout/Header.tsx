import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-gutter sticky top-0 z-30 w-full">
      <div className="flex items-center">
        <h2 className="font-headline-md text-headline-md font-bold text-primary mr-xl cursor-pointer" onClick={() => navigate('/dashboard')}>HR Management System</h2>
        <nav className="hidden md:flex space-x-lg">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `font-medium border-b-2 pb-1 transition-colors ${isActive ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/reports" 
            className={({ isActive }) => `font-medium border-b-2 pb-1 transition-colors ${isActive ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Reports
          </NavLink>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => `font-medium border-b-2 pb-1 transition-colors ${isActive ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Settings
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center space-x-lg">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-surface-container-low px-md py-xs rounded-lg border border-outline-variant/30 w-48 lg:w-64 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <span className="material-symbols-outlined text-outline text-[20px]">search</span>
          <input type="text" placeholder="Search resources..." className="bg-transparent border-none focus:ring-0 text-body-md w-full ml-sm outline-none placeholder:text-on-surface-variant" />
        </div>

        <div className="flex items-center gap-md">
          <div className="relative" ref={notificationsRef}>
            <button 
              className="relative p-xs hover:bg-surface-container text-on-surface-variant transition-colors rounded active:scale-95"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-[2px] right-[2px] w-2 h-2 bg-error rounded-full ring-2 ring-surface"></span>
            </button>
            
            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-surface rounded-lg shadow-lg border border-outline-variant z-50 overflow-hidden flex flex-col">
                <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
                  <h4 className="font-headline-sm text-on-surface font-bold">Notifications</h4>
                  <button className="text-primary text-caption font-bold hover:underline">Mark all as read</button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <div className="p-md border-b border-outline-variant hover:bg-surface-container/30 cursor-pointer transition-colors">
                    <p className="text-body-md text-on-surface font-bold">Leave Request Approved</p>
                    <p className="text-body-sm text-on-surface-variant mt-xs">Your sick leave for Sep 25 has been approved by your manager.</p>
                    <p className="text-caption text-on-surface-variant mt-sm">2 hours ago</p>
                  </div>
                  <div className="p-md border-b border-outline-variant hover:bg-surface-container/30 cursor-pointer transition-colors bg-primary-container/5">
                    <p className="text-body-md text-on-surface font-bold">Action Required: Pending Approvals</p>
                    <p className="text-body-sm text-on-surface-variant mt-xs">You have 2 pending leave requests waiting for your approval.</p>
                    <p className="text-caption text-on-surface-variant mt-sm">5 hours ago</p>
                  </div>
                  <div className="p-md hover:bg-surface-container/30 cursor-pointer transition-colors">
                    <p className="text-body-md text-on-surface font-bold">Payroll Processed</p>
                    <p className="text-body-sm text-on-surface-variant mt-xs">The payroll run for August 2026 has been successfully completed.</p>
                    <p className="text-caption text-on-surface-variant mt-sm">1 day ago</p>
                  </div>
                </div>
                <div className="p-sm border-t border-outline-variant bg-surface-container-lowest text-center">
                  <button className="text-primary font-bold text-caption hover:underline">View All Notifications</button>
                </div>
              </div>
            )}
          </div>
          
          <button className="p-xs hover:bg-surface-container text-on-surface-variant transition-colors rounded active:scale-95">
            <span className="material-symbols-outlined">apps</span>
          </button>

          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center gap-sm pl-md border-l border-outline-variant/30 cursor-pointer hover:bg-surface-container/50 p-1 rounded transition-colors"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="text-right hidden sm:block">
                <p className="font-nav-item text-nav-item text-on-surface leading-tight">Siddharth Sharma</p>
                <p className="font-caption text-caption text-on-surface-variant leading-tight">HR Director</p>
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8xC6jVNjMm5LRRjvl2wjtvbG9dFjKAwSO5YOCn6EX3SNXYWHOpv_rF9a5IctMbVWR2v3IReb9-i07LmQZi7S_Z2cTSLiDGAuGuwn_OcRi0nTdJZvCVdYsFuUxlDg_DVCrD0faH9GgLr4I6PvxlqbzjvPGSNGCLYEdIS_28xKtfGo5uZocPo6utlm6PcUcO5t_sTMcuLr8a3i3X1Bax1tFFsonolPxUWAajuzxowV2cAZ_5vof64m6vpYsatzapfuycqQE3-Al654" 
                alt="Siddharth Sharma" 
                className="w-9 h-9 rounded-full object-cover border-2 border-primary-container/20" 
              />
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-outline-variant py-1 z-50">
                <button 
                  onClick={() => { setIsProfileOpen(false); navigate('/profile'); }}
                  className="w-full text-left px-4 py-2 text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">person</span>
                  My Profile
                </button>
                <button 
                  onClick={() => { setIsProfileOpen(false); navigate('/settings'); }}
                  className="w-full text-left px-4 py-2 text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                  Settings
                </button>
                <hr className="my-1 border-outline-variant/30" />
                <button 
                  onClick={() => { setIsProfileOpen(false); navigate('/login'); }}
                  className="w-full text-left px-4 py-2 text-error hover:bg-error/10 transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
