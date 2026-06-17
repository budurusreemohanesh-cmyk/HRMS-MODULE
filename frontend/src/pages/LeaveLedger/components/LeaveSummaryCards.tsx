
const LeaveSummaryCards = () => {
  return (
    <div className="mb-lg">
      <div className="flex items-center gap-sm mb-md">
        <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
        </div>
        <div>
          <h4 className="font-headline-md text-headline-md">Arjun Singh <span className="text-body-md font-normal text-on-surface-variant ml-xs">(EMP-1024)</span></h4>
        </div>
      </div>
      <div className="flex flex-wrap gap-md">
        {/* Privilege Leave Card */}
        <div className="flex-1 min-w-[280px] bg-white border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="font-label-group text-label-group text-primary uppercase">Privilege Leave</span>
            <span className="material-symbols-outlined text-outline text-[20px]">info</span>
          </div>
          <div className="flex justify-between items-end">
            <div className="space-y-xs">
              <div className="flex gap-sm">
                <div className="text-caption font-caption text-on-surface-variant">Allocated: <span className="font-bold text-on-surface">30</span></div>
                <div className="text-caption font-caption text-on-surface-variant">Used: <span className="font-bold text-error">5</span></div>
              </div>
              <div className="text-display font-display text-primary leading-none">25</div>
              <div className="text-caption font-caption font-medium text-on-surface-variant">Remaining Balance</div>
            </div>
            <div className="h-16 w-16 opacity-10">
              <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
            </div>
          </div>
        </div>
        {/* Sick Leave Card */}
        <div className="flex-1 min-w-[280px] bg-white border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="font-label-group text-label-group text-tertiary uppercase">Sick Leave</span>
            <span className="material-symbols-outlined text-outline text-[20px]">info</span>
          </div>
          <div className="flex justify-between items-end">
            <div className="space-y-xs">
              <div className="flex gap-sm">
                <div className="text-caption font-caption text-on-surface-variant">Allocated: <span className="font-bold text-on-surface">12</span></div>
                <div className="text-caption font-caption text-on-surface-variant">Used: <span className="font-bold text-error">2</span></div>
              </div>
              <div className="text-display font-display text-on-surface-variant leading-none">10</div>
              <div className="text-caption font-caption font-medium text-on-surface-variant">Remaining Balance</div>
            </div>
            <div className="h-16 w-16 opacity-10">
              <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            </div>
          </div>
        </div>
        {/* Casual Leave Card */}
        <div className="flex-1 min-w-[280px] bg-white border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-sm">
          <div className="flex justify-between items-start mb-sm">
            <span className="font-label-group text-label-group text-secondary uppercase">Casual Leave</span>
            <span className="material-symbols-outlined text-outline text-[20px]">info</span>
          </div>
          <div className="flex justify-between items-end">
            <div className="space-y-xs">
              <div className="flex gap-sm">
                <div className="text-caption font-caption text-on-surface-variant">Allocated: <span className="font-bold text-on-surface">12</span></div>
                <div className="text-caption font-caption text-on-surface-variant">Used: <span className="font-bold text-error">4</span></div>
              </div>
              <div className="text-display font-display text-on-surface-variant leading-none">08</div>
              <div className="text-caption font-caption font-medium text-on-surface-variant">Remaining Balance</div>
            </div>
            <div className="h-16 w-16 opacity-10">
              <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>beach_access</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-sm text-caption font-caption text-on-surface-variant flex items-center gap-xs">
        <span className="material-symbols-outlined text-[14px]">calculate</span>
        Balance = Σ all ledger entries (Calculated in real-time)
      </p>
    </div>
  );
};

export default LeaveSummaryCards;
