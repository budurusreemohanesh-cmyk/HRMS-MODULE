const previousAssignmentsData = [
  {
    id: 1,
    structure: 'Standard IT Tier 1',
    effectiveFrom: '01 Apr 2024',
    ctc: '12,00,000',
    status: 'ACTIVE',
    statusClass: 'bg-surface-container-high text-primary',
    wageRule: 'WAGE-RULE-2025-V1'
  },
  {
    id: 2,
    structure: 'Standard IT Entry',
    effectiveFrom: '01 Apr 2023',
    ctc: '8,50,000',
    status: 'SUPERSEDED',
    statusClass: 'bg-surface-variant text-on-surface-variant',
    wageRule: 'WAGE-RULE-2022-V3'
  }
];

const PreviousAssignments = () => {
  return (
    <div className="mt-xl bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden">
      <div className="p-lg border-b border-outline-variant bg-surface-bright flex justify-between items-center">
        <h3 className="font-headline-md text-headline-md text-on-surface">Previous Assignments</h3>
        <button className="flex items-center gap-xs text-primary hover:bg-surface-container px-sm py-1 rounded transition-colors">
          <span className="material-symbols-outlined text-[18px]">filter_list</span>
          <span className="font-nav-item text-nav-item">Filter</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-lowest border-b border-outline-variant">
              <th className="py-md px-lg font-label-group text-label-group text-on-surface-variant uppercase tracking-wider">Salary Structure</th>
              <th className="py-md px-lg font-label-group text-label-group text-on-surface-variant uppercase tracking-wider">Effective From</th>
              <th className="py-md px-lg font-label-group text-label-group text-on-surface-variant uppercase tracking-wider text-right">CTC (₹)</th>
              <th className="py-md px-lg font-label-group text-label-group text-on-surface-variant uppercase tracking-wider text-center">Status</th>
              <th className="py-md px-lg font-label-group text-label-group text-on-surface-variant uppercase tracking-wider flex items-center gap-xs group relative cursor-help">
                Wage Rule Version
                <span className="material-symbols-outlined text-[14px] text-outline">help</span>
                {/* Tooltip */}
                <div className="tooltip-text invisible opacity-0 bg-inverse-surface text-inverse-on-surface font-caption text-caption p-sm rounded absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-center transition-all duration-200 z-10 shadow-lg group-hover:visible group-hover:opacity-100">
                  The wage rule version ID is recorded on every payslip for audit compliance.
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-inverse-surface"></div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
            {previousAssignmentsData.map((row) => (
              <tr key={row.id} className="hover:bg-surface-container-lowest transition-colors group">
                <td className="py-sm px-lg font-body-md text-on-surface font-medium">{row.structure}</td>
                <td className="py-sm px-lg font-body-md text-on-surface-variant">{row.effectiveFrom}</td>
                <td className="py-sm px-lg font-body-md text-on-surface text-right">{row.ctc}</td>
                <td className="py-sm px-lg text-center">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide ${row.statusClass}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-sm px-lg font-mono text-[12px] text-outline-variant">{row.wageRule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviousAssignments;
