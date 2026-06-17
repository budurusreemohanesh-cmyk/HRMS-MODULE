const WageRuleChecker = () => {
  return (
    <div className="space-y-md sticky top-24">
      {/* 50% Wage Rule Checker Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
        <div className="flex items-center justify-between mb-md">
          <h3 className="font-headline-md text-headline-md text-on-surface">50% Wage Rule Check</h3>
          {/* PASS Badge */}
          <div className="flex items-center gap-xs bg-surface-container-high text-primary px-sm py-1 rounded">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span className="font-label-group text-label-group uppercase">PASS</span>
          </div>
        </div>
        
        <div className="space-y-sm mb-lg">
          <div className="flex justify-between items-center py-xs border-b border-outline-variant/50">
            <span className="font-caption text-caption text-on-surface-variant">Basic + DA + Retaining</span>
            <span className="font-nav-item text-nav-item text-on-surface font-semibold">₹ 6,20,000</span>
          </div>
          <div className="flex justify-between items-center py-xs">
            <span className="font-caption text-caption text-on-surface-variant">50% of CTC</span>
            <span className="font-nav-item text-nav-item text-on-surface font-semibold">₹ 6,00,000</span>
          </div>
        </div>
        
        <div className="bg-surface-container rounded-lg p-sm flex items-start gap-sm">
          <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">info</span>
          <p className="font-caption text-caption text-on-surface">
            Wage Rule Version Applied: <br/>
            <span className="font-mono text-primary font-semibold">WAGE-RULE-2025-V1</span>
          </p>
        </div>
      </div>
      
      {/* Action Button */}
      <button className="w-full bg-primary-container hover:bg-primary-fixed-dim text-white font-nav-item text-nav-item py-md px-lg rounded-lg transition-colors flex justify-center items-center gap-sm shadow-sm active:translate-y-px">
        <span className="material-symbols-outlined text-[18px]">save</span>
        Save Assignment
      </button>
    </div>
  );
};

export default WageRuleChecker;
