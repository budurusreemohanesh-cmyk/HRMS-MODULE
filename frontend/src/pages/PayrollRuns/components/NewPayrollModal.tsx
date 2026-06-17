interface NewPayrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NewPayrollModal = ({ isOpen, onClose, onConfirm }: NewPayrollModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-[560px] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-lg py-xl border-b border-outline-variant flex items-center justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface">Initiate New Payroll Run</h3>
            <p className="text-on-surface-variant text-body-md mt-1">Configure parameters for the next payment cycle.</p>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <form 
          className="p-lg space-y-xl" 
          onSubmit={(e) => {
            e.preventDefault();
            onConfirm();
          }}
        >
          <div className="space-y-lg">
            <div className="space-y-2">
              <label className="text-nav-item font-medium text-on-surface">Company</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md outline-none">
                <option value="">Select Company</option>
                <option value="pulse_tech" selected>Pulse Tech Solutions</option>
                <option value="pulse_logistics">Pulse Logistics Ltd</option>
                <option value="pulse_media">Pulse Media Group</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-nav-item font-medium text-on-surface">Payroll Period</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md outline-none">
                <option value="">Select Month & Year</option>
                <option value="11_2023" selected>November 2023</option>
                <option value="12_2023">December 2023</option>
                <option value="01_2024">January 2024</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-nav-item font-medium text-on-surface">Department</label>
              <div className="relative">
                <div className="w-full border border-outline-variant rounded-lg p-2 flex flex-wrap gap-2 bg-surface-container-lowest min-h-[44px]">
                  <span className="bg-primary/10 text-primary text-caption px-2 py-1 rounded flex items-center gap-1 font-medium">
                    Engineering <button type="button" className="material-symbols-outlined text-[14px]">close</button>
                  </span>
                  <span className="bg-primary/10 text-primary text-caption px-2 py-1 rounded flex items-center gap-1 font-medium">
                    Product Management <button type="button" className="material-symbols-outlined text-[14px]">close</button>
                  </span>
                  <button className="text-on-surface-variant text-caption py-1 px-2 hover:bg-surface-container-low rounded transition-colors" type="button">+ Add Department</button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-nav-item font-medium text-on-surface">Salary Structure</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-body-md outline-none">
                <option>Standard Enterprise (PF + ESI + LWF)</option>
                <option>Contractual Fix-Pay</option>
                <option>Leadership/Executive Plan</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline-variant">
            <button 
              className="px-6 py-2.5 rounded-lg font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors" 
              onClick={onClose} 
              type="button"
            >
              Cancel
            </button>
            <button 
              className="bg-primary-container text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-primary transition-all shadow-md" 
              type="submit"
            >
              Run Payroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPayrollModal;
