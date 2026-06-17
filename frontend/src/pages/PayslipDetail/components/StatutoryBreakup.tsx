const StatutoryBreakup = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface text-base mb-md pb-xs border-b border-outline-variant">Statutory Breakup</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-md gap-x-lg font-body-md text-body-md">
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">PF Employee</span>
          <span className="text-on-surface font-medium">₹ 7,200</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">PF Employer</span>
          <span className="text-on-surface font-medium">₹ 7,200</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">ESI Employee</span>
          <span className="text-on-surface font-medium">₹ 0</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">ESI Employer</span>
          <span className="text-on-surface font-medium">₹ 0</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">Professional Tax</span>
          <span className="text-on-surface font-medium">₹ 200</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">TDS (Monthly)</span>
          <span className="text-on-surface font-medium">₹ 7,600</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label-group text-label-group text-outline uppercase">LWF</span>
          <span className="text-on-surface font-medium">₹ 20</span>
        </div>
      </div>
    </div>
  );
};

export default StatutoryBreakup;
