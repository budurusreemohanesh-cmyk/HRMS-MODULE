import React from 'react';

const TaxExemptions = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-lg">
        <h1 className="text-[20px] font-semibold text-on-background">Tax Exemptions & Declarations</h1>
        <p className="text-caption text-on-surface-variant mt-xs">Configure sections and maximum limits for IT declarations (Old Regime)</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
        <div className="overflow-x-auto p-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant h-12">
                <th className="px-lg font-label-group text-label-group text-on-surface-variant">SECTION</th>
                <th className="px-md font-label-group text-label-group text-on-surface-variant">DESCRIPTION</th>
                <th className="px-md font-label-group text-label-group text-on-surface-variant">MAX LIMIT (₹)</th>
                <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              <tr className="h-12 border-b border-outline-variant">
                <td className="px-lg font-medium text-on-background">80C</td>
                <td className="px-md text-on-surface-variant">PPF, LIC, ELSS, EPF, etc.</td>
                <td className="px-md font-medium">1,50,000</td>
                <td className="px-lg text-right">
                  <span className="inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase bg-green-100 text-green-700">Active</span>
                </td>
              </tr>
              <tr className="h-12 border-b border-outline-variant bg-surface">
                <td className="px-lg font-medium text-on-background">80D</td>
                <td className="px-md text-on-surface-variant">Medical Insurance Premium</td>
                <td className="px-md font-medium">25,000</td>
                <td className="px-lg text-right">
                  <span className="inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase bg-green-100 text-green-700">Active</span>
                </td>
              </tr>
              <tr className="h-12 border-b border-outline-variant">
                <td className="px-lg font-medium text-on-background">80D (Senior Citizen)</td>
                <td className="px-md text-on-surface-variant">Medical Insurance for Parents</td>
                <td className="px-md font-medium">50,000</td>
                <td className="px-lg text-right">
                  <span className="inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase bg-green-100 text-green-700">Active</span>
                </td>
              </tr>
              <tr className="h-12 border-b border-outline-variant bg-surface">
                <td className="px-lg font-medium text-on-background">24(b)</td>
                <td className="px-md text-on-surface-variant">Interest on Home Loan</td>
                <td className="px-md font-medium">2,00,000</td>
                <td className="px-lg text-right">
                  <span className="inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase bg-green-100 text-green-700">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-caption text-on-surface-variant mt-md flex items-center gap-xs">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Employees can declare investments under these sections if they opt for the Old Tax Regime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxExemptions;
