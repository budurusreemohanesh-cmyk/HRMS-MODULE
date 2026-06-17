import React from 'react';

const GratuityRules = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Gratuity Rules</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure Payment of Gratuity Act settings</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Eligibility Criteria</h4>
            
            <div className="space-y-xs mt-sm">
              <label className="block text-nav-item font-medium text-on-surface">Minimum continuous service required (Years)</label>
              <input className="w-full max-w-[200px] h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="5" type="number" />
            </div>
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant">
            <h4 className="font-semibold text-on-background text-body-md">Calculation Parameters</h4>
            
            <div className="grid grid-cols-2 gap-xl mt-sm">
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Days per year for calculation</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="15" type="number" />
              </div>
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Total working days in a month</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="26" type="number" />
              </div>
            </div>

            <div className="space-y-xs mt-md">
              <label className="block text-nav-item font-medium text-on-surface">Maximum Gratuity Limit (Tax Exempt) (₹)</label>
              <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="2000000" type="number" />
            </div>
          </div>

          <div className="space-y-sm">
            <h4 className="font-semibold text-on-background text-body-md">Base Salary Components</h4>
            <p className="text-caption text-on-surface-variant">Select the components that make up the wage for gratuity calculation (usually Basic + DA)</p>
            <div className="flex gap-md mt-sm">
              <label className="flex items-center space-x-md cursor-pointer bg-surface-container px-md py-sm rounded border border-outline-variant">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
                <span className="text-body-md">Basic Salary</span>
              </label>
              <label className="flex items-center space-x-md cursor-pointer bg-surface-container px-md py-sm rounded border border-outline-variant">
                <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
                <span className="text-body-md">Dearness Allowance (DA)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Rules</button>
        </div>
      </div>
    </div>
  );
};

export default GratuityRules;
