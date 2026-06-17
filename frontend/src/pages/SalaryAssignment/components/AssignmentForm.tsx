const AssignmentForm = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Assignment Details</h3>
      <form className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {/* Employee Search */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Employee</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                className="w-full pl-10 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all placeholder:text-outline-variant outline-none" 
                placeholder="Search employee name or ID..." 
                type="text"
              />
            </div>
          </div>
          
          {/* Salary Structure Dropdown */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Salary Structure</label>
            <select className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all appearance-none cursor-pointer outline-none">
              <option disabled selected value="">Select structure</option>
              <option value="standard">Standard IT Tier 1</option>
              <option value="executive">Executive Management</option>
              <option value="contract">Contractor Base</option>
            </select>
          </div>
          
          {/* Effective From */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Effective From</label>
            <div className="relative">
              <input 
                className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all cursor-pointer outline-none" 
                type="date"
              />
            </div>
          </div>
        </div>

        <hr className="border-outline-variant my-lg"/>
        
        <h4 className="font-nav-item text-nav-item text-on-surface mb-md">Component Allocation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {/* CTC */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">CTC Annual (₹)</label>
            <input 
              className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none" 
              step="1000" 
              type="number" 
              defaultValue="1200000"
            />
          </div>
          
          {/* Basic */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Basic (₹)</label>
            <input 
              className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none" 
              step="1000" 
              type="number" 
              defaultValue="500000"
            />
          </div>
          
          {/* DA */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Dearness Allowance (DA) (₹)</label>
            <input 
              className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none" 
              step="1000" 
              type="number" 
              defaultValue="120000"
            />
          </div>
          
          {/* Retaining Allowance */}
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Retaining Allowance (₹)</label>
            <input 
              className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none" 
              step="1000" 
              type="number" 
              defaultValue="0"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AssignmentForm;
