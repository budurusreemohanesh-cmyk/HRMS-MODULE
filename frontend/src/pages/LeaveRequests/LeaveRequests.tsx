const LeaveRequests = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Leave Requests</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage and approve employee leave applications.</p>
        </div>
        <div className="flex items-center gap-sm">
          <button className="bg-primary-container text-white px-4 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm flex items-center gap-xs">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Apply Leave
          </button>
        </div>
      </div>

      {/* Summary Tabs */}
      <div className="flex border-b border-outline-variant mb-lg">
        <button className="px-md py-sm font-nav-item text-nav-item text-primary border-b-2 border-primary">
          Pending (12)
        </button>
        <button className="px-md py-sm font-nav-item text-nav-item text-on-surface-variant hover:text-on-surface border-b-2 border-transparent">
          Approved
        </button>
        <button className="px-md py-sm font-nav-item text-nav-item text-on-surface-variant hover:text-on-surface border-b-2 border-transparent">
          Rejected
        </button>
        <button className="px-md py-sm font-nav-item text-nav-item text-on-surface-variant hover:text-on-surface border-b-2 border-transparent">
          All Requests
        </button>
      </div>

      {/* Requests List */}
      <div className="space-y-md flex-1">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-md">
            <div className="flex items-start gap-md">
              <img 
                src={`https://ui-avatars.com/api/?name=Employee+${item}&background=random`} 
                alt="Avatar" 
                className="w-12 h-12 rounded-full" 
              />
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface">Employee {item}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Sick Leave • 2 Days</p>
                <div className="flex items-center gap-xs mt-xs text-on-surface-variant font-caption text-caption">
                  <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                  <span>18 Oct 2023 - 19 Oct 2023</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-sm">
              <button className="px-4 py-1.5 border border-outline-variant rounded text-on-surface-variant font-nav-item text-nav-item hover:bg-surface-container transition-colors">
                View Details
              </button>
              <button className="px-4 py-1.5 bg-[#E6F4EA] text-[#137333] rounded font-nav-item text-nav-item hover:bg-[#CEEAD6] transition-colors border border-transparent">
                Approve
              </button>
              <button className="px-4 py-1.5 bg-[#FCE8E6] text-[#C5221F] rounded font-nav-item text-nav-item hover:bg-[#FAD2CF] transition-colors border border-transparent">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequests;
