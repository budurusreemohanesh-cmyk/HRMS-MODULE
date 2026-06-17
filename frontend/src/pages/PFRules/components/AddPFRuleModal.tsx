interface AddPFRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPFRuleModal = ({ isOpen, onClose }: AddPFRuleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0F172A]/40 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white rounded-lg shadow-[0px_4px_12px_rgba(15,23,42,0.08)] w-full max-w-[560px] flex flex-col border border-[#E2E8F0] max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-lg py-md border-b border-[#E2E8F0] flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-on-surface">Add PF Rule Version</h3>
          <button 
            className="text-outline hover:text-on-surface transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-lg flex-1 overflow-y-auto">
          {/* Warning Banner */}
          <div className="bg-[#FEFCE8] text-[#854D0E] p-sm rounded border border-[#FEF08A] mb-md flex items-start gap-2 text-sm">
            <span className="material-symbols-outlined text-[18px] mt-0.5">warning</span>
            <p>⚠ Overlap detected with Rule ID PF-2023-042 (Effective From 01-Apr-2023 to 31-Mar-2024). Please resolve before saving.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block font-medium text-[13px] text-on-surface mb-1">Company</label>
              <select className="w-full border border-[#E2E8F0] rounded p-2 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none bg-white">
                <option>Pulse Tech Solutions</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-[13px] text-on-surface mb-1">Employee Contribution %</label>
                <input 
                  className="w-full border border-[#E2E8F0] rounded p-2 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none" 
                  type="number" 
                  step="0.01" 
                  defaultValue="12.00"
                />
              </div>
              <div>
                <label className="block font-medium text-[13px] text-on-surface mb-1">Employer Contribution %</label>
                <input 
                  className="w-full border border-[#E2E8F0] rounded p-2 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none" 
                  type="number" 
                  step="0.01" 
                  defaultValue="12.00"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-[13px] text-on-surface mb-1">Wage Ceiling (₹)</label>
              <input 
                className="w-full border border-[#E2E8F0] rounded p-2 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none" 
                type="number" 
                defaultValue="15000"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-[13px] text-on-surface mb-1">Effective From</label>
                <input 
                  className="w-full border border-[#E2E8F0] rounded p-2 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none text-error" 
                  type="date" 
                  defaultValue="2024-04-01"
                />
              </div>
              <div>
                <label className="block font-medium text-[13px] text-on-surface mb-1">Effective To</label>
                <input 
                  className="w-full border border-[#E2E8F0] rounded p-2 text-body-md focus:ring-2 focus:ring-primary-container focus:border-primary-container focus:outline-none text-error" 
                  type="date"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Modal Footer */}
        <div className="px-lg py-md border-t border-[#E2E8F0] flex justify-end gap-3 bg-[#F8FAFC] rounded-b-lg">
          <button 
            className="px-4 py-2 border border-[#E2E8F0] bg-white text-[#0F172A] rounded font-nav-item text-nav-item hover:bg-[#F1F5F9] transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-primary-container text-white rounded font-nav-item text-nav-item hover:bg-surface-tint transition-colors opacity-80 cursor-not-allowed">
            Save Rule Version
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPFRuleModal;
