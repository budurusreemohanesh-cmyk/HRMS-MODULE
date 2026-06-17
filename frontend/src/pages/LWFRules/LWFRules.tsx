const LWFRules = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Labour Welfare Fund (LWF) Rules</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Configure state-wise LWF contribution rates and schedules.</p>
        </div>
        <button className="bg-primary-container text-white px-4 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm flex items-center gap-xs">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add State LWF Rule
        </button>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col">
        <div className="p-md border-b border-outline-variant bg-surface-container-lowest flex items-center justify-between">
          <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
            <input 
              type="text" 
              placeholder="Search states..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-body-md outline-none"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low/50 text-on-surface-variant font-nav-item text-nav-item uppercase tracking-wider">
                <th className="p-md font-medium">State</th>
                <th className="p-md font-medium">Employee Cont.</th>
                <th className="p-md font-medium">Employer Cont.</th>
                <th className="p-md font-medium">Deduction Cycle</th>
                <th className="p-md font-medium">Status</th>
                <th className="p-md font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-body-md">
              <tr className="border-b border-outline-variant/50 hover:bg-surface-container-lowest transition-colors">
                <td className="p-md font-medium text-on-surface">Maharashtra</td>
                <td className="p-md text-on-surface">₹ 12.00</td>
                <td className="p-md text-on-surface">₹ 36.00</td>
                <td className="p-md text-on-surface">Half-Yearly (Jun, Dec)</td>
                <td className="p-md">
                  <span className="bg-[#E6F4EA] text-[#137333] px-2 py-1 rounded text-[12px] font-medium border border-[#CEEAD6]">Active</span>
                </td>
                <td className="p-md text-right">
                  <button className="text-primary hover:bg-surface-container px-3 py-1.5 rounded transition-colors font-medium">Edit</button>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/50 hover:bg-surface-container-lowest transition-colors">
                <td className="p-md font-medium text-on-surface">Karnataka</td>
                <td className="p-md text-on-surface">₹ 20.00</td>
                <td className="p-md text-on-surface">₹ 40.00</td>
                <td className="p-md text-on-surface">Yearly (Dec)</td>
                <td className="p-md">
                  <span className="bg-[#E6F4EA] text-[#137333] px-2 py-1 rounded text-[12px] font-medium border border-[#CEEAD6]">Active</span>
                </td>
                <td className="p-md text-right">
                  <button className="text-primary hover:bg-surface-container px-3 py-1.5 rounded transition-colors font-medium">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LWFRules;
