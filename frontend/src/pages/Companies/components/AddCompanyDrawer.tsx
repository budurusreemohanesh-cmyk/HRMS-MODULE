interface AddCompanyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCompanyDrawer = ({ isOpen, onClose }: AddCompanyDrawerProps) => {
  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'invisible pointer-events-none'} overflow-hidden`} id="sideDrawer">
      {/* Overlay */}
      <div 
        className={`drawer-overlay absolute inset-0 bg-on-background/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 cursor-pointer' : 'opacity-0'}`} 
        onClick={onClose}
      ></div>

      {/* Drawer Panel */}
      <div 
        className={`drawer-content absolute top-0 right-0 h-full w-full max-w-[480px] bg-surface-container-lowest shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-background">Add Company</h3>
            <p className="text-caption text-on-surface-variant">Setup new legal entity profile</p>
          </div>
          <button 
            className="p-sm hover:bg-surface-container rounded-full transition-colors" 
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Drawer Body (Scrollable Form) */}
        <div className="flex-1 overflow-y-auto p-xl space-y-lg custom-scrollbar">
          {/* Company Name Field with Validation Error */}
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Company Name <span className="text-error">*</span></label>
            <input 
              className="w-full h-10 px-md border-error text-body-md rounded focus:ring-1 focus:ring-error focus:border-error transition-all outline-none" 
              placeholder="Enter full legal name" 
              type="text" 
              defaultValue="Tata"
            />
            <p className="text-caption text-error flex items-center mt-xs">
              <span className="material-symbols-outlined text-[14px] mr-xs">error</span>
              Company name must be at least 5 characters long.
            </p>
          </div>

          {/* Toggles Grid */}
          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-sm">
              <label className="block text-nav-item font-medium text-on-surface">PF Applicable</label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                <span className="ml-md text-body-md">Yes</span>
              </div>
            </div>
            <div className="space-y-sm">
              <label className="block text-nav-item font-medium text-on-surface">ESI Applicable</label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                <span className="ml-md text-body-md">No</span>
              </div>
            </div>
          </div>

          {/* State Dropdowns */}
          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">LWF State</label>
              <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                <option>Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">PT State</label>
              <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                <option>Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>
          </div>

          {/* Status Radio Group */}
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

          {/* Informational Alert */}
          <div className="p-md bg-surface-container-high rounded-lg border border-primary/10 flex items-start space-x-md mt-xl">
            <span className="material-symbols-outlined text-primary text-[20px]">info</span>
            <p className="text-caption text-on-surface-variant">Ensure the company legal name matches exactly as per the PAN and GST registration to avoid statutory filing issues.</p>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button 
            className="px-xl py-sm text-on-surface-variant font-medium hover:bg-surface-container transition-colors rounded" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">
            Save Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCompanyDrawer;
