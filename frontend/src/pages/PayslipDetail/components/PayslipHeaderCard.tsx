const PayslipHeaderCard = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-md shadow-sm">
      <div className="flex flex-col gap-xs">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Arjun Singh</h2>
        <div className="flex items-center gap-sm font-body-md text-body-md text-on-surface-variant flex-wrap">
          <span className="font-medium">EMP-0842</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
          <span>Engineering</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
          <span>Senior Lead</span>
        </div>
      </div>
      <div className="flex items-center gap-lg">
        <div className="flex flex-col items-end gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">Payroll Period</span>
          <span className="font-body-lg text-body-lg font-medium text-on-surface">October 2023</span>
        </div>
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded font-label-group text-label-group uppercase border border-green-200">
          Completed
        </div>
        <button className="bg-surface-container-lowest border border-outline-variant text-on-surface px-md py-[8px] rounded-lg font-body-md text-body-md font-medium hover:bg-surface-container-low transition-colors flex items-center gap-sm shadow-sm">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PayslipHeaderCard;
