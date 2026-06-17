import React from 'react';

const PFRules = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Provident Fund (PF) Rules</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure EPF deduction rules and employer contribution</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">EPF Number</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="MH/BAN/1234567/000" type="text" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Deduction Cycle</label>
              <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Employee Contribution (%)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="12" type="number" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Employer Contribution (%)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="12" type="number" />
            </div>
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Advanced Rules</h4>
            
            <label className="flex items-center space-x-md cursor-pointer mt-sm">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Restrict employer contribution to wage ceiling (₹15,000)</span>
            </label>
            
            <label className="flex items-center space-x-md cursor-pointer mt-sm">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Include Admin Charges (0.5%) in Employer Cost</span>
            </label>
            
            <label className="flex items-center space-x-md cursor-pointer mt-sm">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Include EDLI Charges (0.5%) in Employer Cost</span>
            </label>
          </div>
        </div>
        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default PFRules;
