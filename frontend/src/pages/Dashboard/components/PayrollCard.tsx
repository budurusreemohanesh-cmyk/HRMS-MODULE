import { useNavigate } from 'react-router-dom';

const PayrollCard = () => {
  const navigate = useNavigate();

  return (
    <div className="md:col-span-6 bg-surface border border-outline-variant p-md rounded-xl relative overflow-hidden group">
      <div className="absolute right-[-20px] top-[-20px] opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="material-symbols-outlined text-[120px]">payments</span>
      </div>
      <div className="flex flex-col h-full justify-between z-10 relative">
        <div className="flex justify-between">
          <div>
            <p className="text-on-surface-variant text-nav-item font-nav-item">Payroll Disbursement (Sep)</p>
            <h4 className="text-headline-lg font-headline-lg text-on-surface mt-xs">₹ 4.28 Cr</h4>
          </div>
          <div className="text-right">
            <span className="px-sm py-xs bg-surface-container-highest rounded text-caption font-bold text-on-surface-variant">NEXT RUN: OCT 01</span>
          </div>
        </div>
        <div className="mt-md">
          <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
            <div className="bg-primary-container h-full w-3/4"></div>
          </div>
          <div className="flex justify-between mt-sm">
            <p className="text-caption text-on-surface-variant">Processing: 75% complete</p>
            <button onClick={() => navigate('/payroll')} className="text-primary font-bold text-caption hover:underline">View Payroll Run</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollCard;
