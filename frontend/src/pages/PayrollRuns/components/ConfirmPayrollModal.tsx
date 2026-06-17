interface ConfirmPayrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmPayrollModal = ({ isOpen, onClose, onConfirm }: ConfirmPayrollModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-[400px] rounded-xl shadow-2xl p-lg text-center animate-in fade-in zoom-in duration-200">
        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-md">
          <span className="material-symbols-outlined text-amber-600 text-[32px]">warning</span>
        </div>
        <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Confirm Payroll Execution</h4>
        <p className="text-on-surface-variant text-body-md mb-xl">
          This will generate payslips for <span className="font-bold text-on-surface">450</span> employees for the period of November 2023. Confirm?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button 
            className="px-4 py-2.5 rounded-lg border border-outline-variant text-on-surface-variant font-medium hover:bg-surface-container-low transition-colors" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-container transition-all shadow-md" 
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayrollModal;
