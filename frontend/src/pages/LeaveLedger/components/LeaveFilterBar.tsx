
const LeaveFilterBar = () => {
  return (
    <div className="bg-white p-lg rounded-xl border border-outline-variant shadow-sm mb-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-md items-end">
        <div className="space-y-xs">
          <label className="font-label-group text-label-group text-on-surface-variant uppercase">Employee Search</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]">person</span>
            <input className="w-full pl-xl pr-sm py-sm rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary-container text-body-md outline-none transition-all" placeholder="Arjun Singh..." type="text" />
          </div>
        </div>
        <div className="space-y-xs">
          <label className="font-label-group text-label-group text-on-surface-variant uppercase">Leave Type</label>
          <select className="w-full px-sm py-sm rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary-container text-body-md outline-none transition-all">
            <option>All Types</option>
            <option>Privilege Leave</option>
            <option>Sick Leave</option>
            <option>Casual Leave</option>
          </select>
        </div>
        <div className="space-y-xs">
          <label className="font-label-group text-label-group text-on-surface-variant uppercase">From Date</label>
          <input className="w-full px-sm py-sm rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary-container text-body-md outline-none transition-all" type="date" />
        </div>
        <div className="space-y-xs">
          <label className="font-label-group text-label-group text-on-surface-variant uppercase">To Date</label>
          <input className="w-full px-sm py-sm rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary-container text-body-md outline-none transition-all" type="date" />
        </div>
        <div className="flex gap-sm">
          <div className="flex-1 space-y-xs">
            <label className="font-label-group text-label-group text-on-surface-variant uppercase">Transaction Type</label>
            <select className="w-full px-sm py-sm rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary-container text-body-md outline-none transition-all">
              <option>Multi-select...</option>
              <option>Allocation</option>
              <option>Application</option>
              <option>Encashment</option>
            </select>
          </div>
          <button className="bg-primary-container text-white p-sm rounded-lg hover:bg-opacity-90 transition-all h-[38px] w-[42px] mt-auto flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveFilterBar;
