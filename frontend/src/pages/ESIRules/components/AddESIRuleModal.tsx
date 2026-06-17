interface AddESIRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddESIRuleModal = ({ isOpen, onClose }: AddESIRuleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-[600px] bg-surface-container-lowest rounded-lg border border-outline-variant shadow-[0px_4px_12px_rgba(15,23,42,0.08)] flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-xl py-md border-b border-outline-variant flex justify-between items-center bg-surface rounded-t-lg">
          <h3 className="font-headline-md text-headline-md text-on-surface">Add ESI Rule Version</h3>
          <button 
            className="text-on-surface-variant hover:text-on-surface p-sm rounded hover:bg-surface-variant transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-xl overflow-y-auto flex-1 font-body-md text-body-md">
          {/* Mock Overlap Validation Banner */}
          <div className="bg-error-container text-on-error-container p-md rounded border border-error/20 flex items-start gap-md mb-xl">
            <span className="material-symbols-outlined text-error shrink-0">warning</span>
            <p className="font-body-md text-body-md">Overlap detected with Rule ID ESI-2023-015 (Effective From 01-Oct-2023 to 31-Mar-2024). Please resolve before saving.</p>
          </div>

          <form className="space-y-md">
            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="block font-medium text-on-surface">Company</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded p-[8px] focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none">
                  <option>Pulse Tech Solutions</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label className="block font-medium text-on-surface">Wage Ceiling ₹</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">₹</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded py-[8px] pl-[28px] pr-[8px] focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none" type="text" defaultValue="21,000"/>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="block font-medium text-on-surface">Employee Contribution %</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded p-[8px] focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none" type="text" defaultValue="0.75"/>
              </div>
              <div className="space-y-xs">
                <label className="block font-medium text-on-surface">Employer Contribution %</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded p-[8px] focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none" type="text" defaultValue="3.25"/>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="block font-medium text-on-surface text-error">Effective From *</label>
                <input className="w-full bg-surface-container-lowest border border-error rounded p-[8px] focus:ring-2 focus:ring-error focus:border-error outline-none" type="date" defaultValue="2023-12-01"/>
              </div>
              <div className="space-y-xs">
                <label className="block font-medium text-on-surface">Effective To</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded p-[8px] focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-outline-variant" type="date"/>
              </div>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-xl py-md border-t border-outline-variant bg-surface flex justify-end gap-md rounded-b-lg">
          <button 
            className="bg-surface-container-lowest text-on-surface border border-outline-variant py-[8px] px-lg rounded font-medium hover:bg-surface-container-low transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-primary-container text-on-primary py-[8px] px-lg rounded font-medium hover:opacity-90 transition-opacity opacity-50 cursor-not-allowed">
            Save Rule
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddESIRuleModal;
