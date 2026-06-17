import React from 'react';

const PTRules = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Professional Tax (PT) Rules</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure PT slabs based on state regulations</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
        <div className="p-xl space-y-xl">
          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">State</label>
            <select className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary outline-none">
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
            </select>
          </div>

          <div className="space-y-xs">
            <label className="block text-nav-item font-medium text-on-surface">PT Registration Certificate (PTRC) Number</label>
            <input className="w-full h-10 px-md border border-outline-variant text-body-md rounded focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" defaultValue="9999999999P" type="text" />
          </div>

          <div className="border border-outline-variant rounded-lg overflow-hidden">
            <div className="bg-surface-container-low px-md py-sm font-semibold text-on-surface border-b border-outline-variant flex justify-between items-center">
              <span>Tax Slabs (Maharashtra)</span>
              <span className="text-caption text-on-surface-variant">Male/Female</span>
            </div>
            <div className="p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface border-b border-outline-variant">
                    <th className="p-sm text-caption font-medium">Gross Salary Range (₹)</th>
                    <th className="p-sm text-caption font-medium">Tax Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">0 - 7,500</td>
                    <td className="p-sm text-body-md">Nil</td>
                  </tr>
                  <tr className="border-b border-outline-variant">
                    <td className="p-sm text-body-md">7,501 - 10,000</td>
                    <td className="p-sm text-body-md">175 / month</td>
                  </tr>
                  <tr>
                    <td className="p-sm text-body-md">10,001 and above</td>
                    <td className="p-sm text-body-md">200 / month (300 in Feb)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-caption text-on-surface-variant flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Slabs are pre-configured based on state laws. Modifying these is generally not required unless tax laws change.
          </p>
        </div>
        <div className="p-xl border-t border-outline-variant bg-surface-container-low flex justify-end space-x-md">
          <button className="px-xl py-sm bg-primary-container text-on-primary font-bold hover:bg-primary transition-all rounded shadow-sm">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default PTRules;
