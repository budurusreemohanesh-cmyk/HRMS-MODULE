interface AddDesignationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddDesignationDrawer = ({ isOpen, onClose }: AddDesignationDrawerProps) => {
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
            <h3 className="font-headline-md text-headline-md font-bold text-on-background">Add Designation</h3>
            <p className="text-caption text-on-surface-variant">Setup a new job title or role</p>
          </div>
          <button className="p-sm hover:bg-surface-container rounded-full transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-xl space-y-lg custom-scrollbar">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Designation Name <span className="text-error">*</span></label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. Software Engineer" type="text" />
          </div>

          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Designation Code <span className="text-error">*</span></label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. SE1" type="text" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Department <span className="text-error">*</span></label>
              <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                <option>Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Description</label>
            <textarea className="w-full p-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none min-h-[80px]" placeholder="Brief role description..."></textarea>
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
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Designation</button>
        </div>
      </div>
    </div>
  );
};

export default AddDesignationDrawer;
