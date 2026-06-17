import React from 'react';

const ESIRules = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Employee State Insurance (ESI) Rules</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure ESI deduction rules and employer contribution</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">ESI Number</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="31000123450001001" type="text" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Wage Ceiling (₹)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none" defaultValue="21000" type="number" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Employee Contribution (%)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="0.75" type="number" step="0.01" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Employer Contribution (%)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="3.25" type="number" step="0.01" />
            </div>
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Advanced Rules</h4>
            
            <label className="flex items-center space-x-md cursor-pointer mt-sm">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Exclude overtime allowance from ESI calculation</span>
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

export default ESIRules;
