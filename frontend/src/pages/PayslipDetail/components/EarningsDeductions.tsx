const EarningsDeductions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Earnings Column */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col h-full shadow-sm">
        <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant">
          <h3 className="font-headline-md text-headline-md text-on-surface text-base">Earnings</h3>
        </div>
        <table className="w-full text-left border-collapse flex-1">
          <thead>
            <tr className="border-b border-outline-variant bg-surface">
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase font-semibold">Component Name</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase font-semibold text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface">
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">Basic Pay</td>
              <td className="px-md py-sm text-right">60,000</td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">HRA</td>
              <td className="px-md py-sm text-right">24,000</td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">Conveyance Allowance</td>
              <td className="px-md py-sm text-right">10,000</td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">Special Allowance</td>
              <td className="px-md py-sm text-right">26,000</td>
            </tr>
          </tbody>
        </table>
        <div className="bg-surface px-md py-sm border-t border-outline-variant flex justify-between items-center font-body-md text-body-md font-bold text-on-surface mt-auto">
          <span>Total Earnings</span>
          <span>₹ 1,20,000</span>
        </div>
      </div>

      {/* Deductions Column */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col h-full shadow-sm">
        <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant">
          <h3 className="font-headline-md text-headline-md text-on-surface text-base">Deductions</h3>
        </div>
        <table className="w-full text-left border-collapse flex-1">
          <thead>
            <tr className="border-b border-outline-variant bg-surface">
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase font-semibold">Component Name</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase font-semibold text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface">
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">EPF</td>
              <td className="px-md py-sm text-right">7,200</td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">ESI</td>
              <td className="px-md py-sm text-right">0</td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">Professional Tax</td>
              <td className="px-md py-sm text-right">200</td>
            </tr>
            <tr className="border-b border-outline-variant hover:bg-surface-container-low/50 transition-colors">
              <td className="px-md py-sm">TDS</td>
              <td className="px-md py-sm text-right">7,600</td>
            </tr>
          </tbody>
        </table>
        <div className="bg-surface px-md py-sm border-t border-outline-variant flex justify-between items-center font-body-md text-body-md font-bold text-on-surface mt-auto">
          <span>Total Deductions</span>
          <span>₹ 15,000</span>
        </div>
      </div>
    </div>
  );
};

export default EarningsDeductions;
