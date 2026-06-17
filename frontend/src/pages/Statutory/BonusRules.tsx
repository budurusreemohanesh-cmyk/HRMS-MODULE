import React from 'react';

const BonusRules = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Payment of Bonus Rules</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure settings as per Payment of Bonus Act, 1965</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Eligibility</h4>
            
            <div className="grid grid-cols-2 gap-xl mt-sm">
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Minimum working days in accounting year</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="30" type="number" />
              </div>
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Maximum salary limit for eligibility (₹/month)</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="21000" type="number" />
              </div>
            </div>
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Bonus Calculation Percentage</h4>
            
            <div className="grid grid-cols-2 gap-xl mt-sm">
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Minimum Bonus (%)</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="8.33" type="number" step="0.01" />
              </div>
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Maximum Bonus (%)</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="20" type="number" />
              </div>
            </div>
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Calculation Ceiling (₹/month)</label>
            <p className="text-caption text-on-surface-variant mb-xs">Bonus is calculated on actual salary or calculation ceiling, whichever is lower.</p>
            <input className="w-full max-w-[200px] h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="7000" type="number" />
          </div>

        </div>
        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Rules</button>
        </div>
      </div>
    </div>
  );
};

export default BonusRules;
