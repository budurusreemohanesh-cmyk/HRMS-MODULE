import { useNavigate } from 'react-router-dom';

const RecentActivities = () => {
  const navigate = useNavigate();

  return (
    <div className="md:col-span-4 bg-surface border border-outline-variant p-lg rounded-xl flex flex-col">
      <h5 className="text-headline-md font-headline-md text-on-surface mb-lg">Recent Activities</h5>
      <div className="space-y-md flex-1">
        {/* Activity 1 */}
        <div className="flex gap-md">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px] text-on-secondary-container">person_add</span>
          </div>
          <div>
            <p className="text-nav-item font-nav-item text-on-surface leading-tight">Rahul Verma joined the Sales team</p>
            <p className="text-caption text-on-surface-variant mt-xs">2 hours ago • Bangalore Branch</p>
          </div>
        </div>

        {/* Activity 2 */}
        <div className="flex gap-md">
          <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px] text-on-error-container">campaign</span>
          </div>
          <div>
            <p className="text-nav-item font-nav-item text-on-surface leading-tight">Statutory Update: New TDS Slabs</p>
            <p className="text-caption text-on-surface-variant mt-xs">4 hours ago • System Update</p>
          </div>
        </div>

        {/* Activity 3 */}
        <div className="flex gap-md">
          <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px] text-primary">description</span>
          </div>
          <div>
            <p className="text-nav-item font-nav-item text-on-surface leading-tight">Priya Nair uploaded bank details</p>
            <p className="text-caption text-on-surface-variant mt-xs">Yesterday • Verification Pending</p>
          </div>
        </div>

        {/* Activity 4 */}
        <div className="flex gap-md">
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">flight_takeoff</span>
          </div>
          <div>
            <p className="text-nav-item font-nav-item text-on-surface leading-tight">Anil Kapur leave approved</p>
            <p className="text-caption text-on-surface-variant mt-xs">Sep 19 • Casual Leave</p>
          </div>
        </div>
      </div>
      <button 
        onClick={() => navigate('/reports')}
        className="w-full mt-xl py-sm border border-outline-variant rounded-lg font-bold text-caption text-on-surface-variant hover:bg-surface-container transition-all"
      >
        VIEW ALL ACTIVITIES
      </button>
    </div>
  );
};

export default RecentActivities;
