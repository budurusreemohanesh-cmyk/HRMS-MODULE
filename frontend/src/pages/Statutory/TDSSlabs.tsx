import React from 'react';

const TDSSlabs = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg flex justify-between items-center">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">TDS Slabs (Income Tax)</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Configure tax slabs for New and Old tax regimes</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">Financial Year</label>
            <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
              <option value="2027-2028">2027 - 2028</option>
              <option value="2026-2027">2026 - 2027</option>
            </select>
          </div>

          <div className="border border-outline-variant rounded-lg overflow-hidden">
            <div className="bg-surface-container-low px-md py-sm font-semibold text-on-surface border-b border-outline-variant flex justify-between items-center">
              <span>New Tax Regime Slabs (Default)</span>
            </div>
            <div className="p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface border-b border-outline-variant">
                    <th className="p-sm text-caption font-medium">Income Range (₹)</th>
                    <th className="p-sm text-caption font-medium">Tax Rate (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">Up to 3,00,000</td>
                    <td className="p-sm text-body-md">Nil</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">3,00,001 - 6,00,000</td>
                    <td className="p-sm text-body-md">5%</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">6,00,001 - 9,00,000</td>
                    <td className="p-sm text-body-md">10%</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">9,00,001 - 12,00,000</td>
                    <td className="p-sm text-body-md">15%</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">12,00,001 - 15,00,000</td>
                    <td className="p-sm text-body-md">20%</td>
                  </tr>
                  <tr>
                    <td className="p-sm text-body-md">Above 15,00,000</td>
                    <td className="p-sm text-body-md">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-sm border p-md rounded border-outline-variant bg-surface-container-low">
            <h4 className="font-semibold text-on-background text-body-md">Rebate Under Section 87A</h4>
            <div className="grid grid-cols-2 gap-xl mt-sm">
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Max Income Eligible (₹)</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="700000" type="number" />
              </div>
              <div className="space-y-xs">
                <label className="block text-nav-item font-medium text-on-surface">Max Rebate Amount (₹)</label>
                <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="25000" type="number" />
              </div>
            </div>
          </div>

        </div>
        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default TDSSlabs;
