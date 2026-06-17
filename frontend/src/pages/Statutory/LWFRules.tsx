import React from 'react';

const LWFRules = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Labour Welfare Fund (LWF) Rules</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure LWF deductions for state specific branches</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">State</label>
            <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-xl">
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Employee Contribution (₹)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="12" type="number" />
            </div>
            <div className="space-y-xs">
              <label className="block text-nav-item font-medium text-on-surface">Employer Contribution (₹)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="36" type="number" />
            </div>
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Deduction Cycle</label>
            <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
              <option value="Half Yearly (Jun/Dec)">Half Yearly (Jun/Dec)</option>
              <option value="Yearly (Dec)">Yearly (Dec)</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Advanced Rules</h4>
            
            <label className="flex items-center space-x-md cursor-pointer mt-sm">
              <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Exclude employees with gross salary above ₹15,000</span>
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

export default LWFRules;
