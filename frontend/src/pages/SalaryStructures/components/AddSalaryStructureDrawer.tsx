interface AddSalaryStructureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSalaryStructureDrawer = ({ isOpen, onClose }: AddSalaryStructureDrawerProps) => {
  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'invisible pointer-events-none'} overflow-hidden`} id="sideDrawer">
      <div 
        className={`drawer-overlay absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 cursor-pointer' : 'opacity-0'}`} 
        onClick={onClose}
      ></div>

      <div 
        className={`drawer-content absolute top-0 right-0 h-full w-full max-w-[560px] bg-surface-container-lowest shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-background">Create Salary Structure</h3>
            <p className="text-caption text-on-surface-variant">Group salary components for an employee grade</p>
          </div>
          <button className="p-sm hover:bg-surface-container rounded-full transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-xl space-y-lg custom-scrollbar">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Structure Name <span className="text-error">*</span></label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Executive Structure Level 1" type="text" />
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Associate Grade <span className="text-error">*</span></label>
            <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
              <option>Select Grade</option>
              <option value="E1">Executive (E1)</option>
              <option value="M1">Manager (M1)</option>
            </select>
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Description</label>
            <textarea className="w-full p-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none min-h-[60px]" placeholder="Brief description..."></textarea>
          </div>

          <div className="border border-outline-variant rounded-lg overflow-hidden">
            <div className="bg-surface-container-low px-md py-sm font-semibold text-on-surface border-b border-outline-variant">
              Select Components
            </div>
            <div className="p-md space-y-sm max-h-[200px] overflow-y-auto custom-scrollbar">
              {['Basic Salary (Earnings)', 'HRA (Earnings)', 'Special Allowance (Earnings)', 'Provident Fund (Deductions)', 'Internet Allowance (Reimbursements)'].map((comp, idx) => (
                <label key={idx} className="flex items-center space-x-md cursor-pointer hover:bg-surface-container p-xs rounded">
                  <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
                  <span className="text-body-md">{comp}</span>
                </label>
              ))}
            </div>
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
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Structure</button>
        </div>
      </div>
    </div>
  );
};

export default AddSalaryStructureDrawer;
