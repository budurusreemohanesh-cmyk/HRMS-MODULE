
const EmployeeFilterBar = () => {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-end">
        <div className="md:col-span-5 space-y-1">
          <label className="text-label-group font-label-group text-on-surface-variant">SEARCH</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="Search by name or employee number" 
              type="text" 
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="text-label-group font-label-group text-on-surface-variant">STATUS</label>
          <select className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md bg-white focus:ring-2 focus:ring-primary outline-none appearance-none">
            <option>All</option>
            <option>active</option>
            <option>inactive</option>
            <option>suspended</option>
            <option>left</option>
          </select>
        </div>
        <div className="md:col-span-3 space-y-1">
          <label className="text-label-group font-label-group text-on-surface-variant">DEPARTMENT</label>
          <select className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md bg-white focus:ring-2 focus:ring-primary outline-none appearance-none">
            <option value="">Select Department</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Product Management</option>
            <option>Marketing</option>
            <option>Operations</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <button className="w-full bg-secondary-container text-on-secondary-container font-medium py-2 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant/30 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Apply Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeFilterBar;
