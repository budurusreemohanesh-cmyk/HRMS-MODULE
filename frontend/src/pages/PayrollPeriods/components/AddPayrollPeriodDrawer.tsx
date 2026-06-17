interface AddPayrollPeriodDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPayrollPeriodDrawer = ({ isOpen, onClose }: AddPayrollPeriodDrawerProps) => {
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
            <h3 className="font-headline-md text-headline-md font-bold text-on-background">Create Payroll Period</h3>
            <p className="text-caption text-on-surface-variant">Setup a new monthly payroll cycle</p>
          </div>
          <button className="p-sm hover:bg-surface-container rounded-full transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-xl space-y-lg custom-scrollbar">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Period Name <span className="text-error">*</span></label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. May 2027" type="text" />
          </div>

          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Start Date <span className="text-error">*</span></label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" type="date" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">End Date <span className="text-error">*</span></label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" type="date" />
            </div>
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Processing Date (Expected) <span className="text-error">*</span></label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" type="date" />
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant bg-surface-container-low">
             <div className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-orange-600 text-[20px]">warning</span>
                <div>
                  <p className="text-body-md font-medium text-on-surface">Important Note</p>
                  <p className="text-caption text-on-surface-variant mt-[2px]">Creating a new period will lock attendance edits for previous closed periods. Ensure all data is correct before proceeding.</p>
                </div>
             </div>
          </div>
        </div>

        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm text-on-surface-variant font-medium hover:bg-surface-container transition-colors rounded" onClick={onClose}>Cancel</button>
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Create Period</button>
        </div>
      </div>
    </div>
  );
};

export default AddPayrollPeriodDrawer;
