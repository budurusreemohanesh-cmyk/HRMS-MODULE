interface AddSalaryComponentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSalaryComponentDrawer = ({ isOpen, onClose }: AddSalaryComponentDrawerProps) => {
  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'invisible pointer-events-none'} overflow-hidden`} id="sideDrawer">
      <div 
        className={`drawer-overlay absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 cursor-pointer' : 'opacity-0'}`} 
        onClick={onClose}
      ></div>

      <div 
        className={`drawer-content absolute top-0 right-0 h-full w-full max-w-[480px] bg-surface-container-lowest shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-background">Add Salary Component</h3>
            <p className="text-caption text-on-surface-variant">Setup new earning, deduction, or reimbursement</p>
          </div>
          <button className="p-sm hover:bg-surface-container rounded-full transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-xl space-y-lg custom-scrollbar">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Component Name <span className="text-error">*</span></label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Basic Salary" type="text" />
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Component Code <span className="text-error">*</span></label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. BASIC" type="text" />
          </div>

          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Type <span className="text-error">*</span></label>
              <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                <option value="Earning">Earning</option>
                <option value="Deduction">Deduction</option>
                <option value="Reimbursement">Reimbursement</option>
              </select>
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Calculation Type <span className="text-error">*</span></label>
              <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                <option value="Flat">Flat Amount</option>
                <option value="Percentage">Percentage (%)</option>
              </select>
            </div>
          </div>

          <div className="space-y-md border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Rules</h4>
            
            <label className="flex items-center space-x-md cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Taxable Component</span>
            </label>
            
            <label className="flex items-center space-x-md cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Include in CTC</span>
            </label>

            <label className="flex items-center space-x-md cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Prorate based on attendance</span>
            </label>
          </div>

          <div className="space-y-sm">
            <label className="block text-nav-item font-medium text-on-surface">Status</label>
            <div className="flex space-x-xl">
              <label className="flex items-center space-x-md cursor-pointer">
                <input defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="status" type="radio" value="Active" />
                <span className="text-body-md">Active</span>
              </label>
              <label className="flex items-center space-x-md cursor-pointer">
                <input className="w-4 h-4 text-primary focus:ring-primary border-outline-variant" name="status" type="radio" value="Inactive" />
                <span className="text-body-md">Inactive</span>
              </label>
            </div>
          </div>
        </div>

        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm text-on-surface-variant font-medium hover:bg-surface-container transition-colors rounded" onClick={onClose}>Cancel</button>
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Component</button>
        </div>
      </div>
    </div>
  );
};

export default AddSalaryComponentDrawer;
