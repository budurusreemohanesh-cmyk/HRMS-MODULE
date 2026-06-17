
const ledgerData = [
  {
    id: 1,
    employee: 'Arjun Singh',
    leaveType: 'Privilege Leave',
    transactionType: 'Allocation',
    transactionLabelClass: 'bg-green-100 text-green-800 border-green-200',
    leaves: '+30.0',
    leavesClass: 'text-green-700',
    fromDate: '01-Jan-2023',
    toDate: '31-Dec-2023',
    reference: 'SYS-ALC-2023',
    referenceLink: true,
    createdAt: '01-Jan, 09:00 AM'
  },
  {
    id: 2,
    employee: 'Arjun Singh',
    leaveType: 'Privilege Leave',
    transactionType: 'Application',
    transactionLabelClass: 'bg-red-100 text-red-800 border-red-200',
    leaves: '-5.0',
    leavesClass: 'text-error',
    fromDate: '12-Mar-2023',
    toDate: '16-Mar-2023',
    reference: 'LEV-2023-001',
    referenceLink: true,
    createdAt: '05-Mar, 14:30 PM'
  },
  {
    id: 3,
    employee: 'Arjun Singh',
    leaveType: 'Sick Leave',
    transactionType: 'Adjustment',
    transactionLabelClass: 'bg-blue-100 text-blue-800 border-blue-200',
    leaves: '+2.0',
    leavesClass: 'text-blue-700',
    fromDate: '--',
    toDate: '--',
    reference: 'ADJ-1024-XP',
    referenceLink: true,
    createdAt: '15-Apr, 11:20 AM'
  },
  {
    id: 4,
    employee: 'Arjun Singh',
    leaveType: 'Casual Leave',
    transactionType: 'Encashment',
    transactionLabelClass: 'bg-amber-100 text-amber-800 border-amber-200',
    leaves: '-2.0',
    leavesClass: 'text-amber-700',
    fromDate: '--',
    toDate: '--',
    reference: 'ENC-2023-99',
    referenceLink: true,
    createdAt: '20-May, 10:00 AM'
  },
  {
    id: 5,
    employee: 'Arjun Singh',
    leaveType: 'Sick Leave',
    transactionType: 'Expiry',
    transactionLabelClass: 'bg-slate-100 text-slate-800 border-slate-200',
    leaves: '-1.0',
    leavesClass: 'text-slate-600',
    fromDate: '--',
    toDate: '--',
    reference: 'AUTO-EXP-24',
    referenceLink: false,
    createdAt: '31-Dec, 23:59 PM'
  }
];

const LeaveLedgerTable = () => {
  return (
    <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low border-b border-outline-variant">
            <tr>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">Employee</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">Leave Type</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">Transaction Type</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase text-right">Leaves</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">From Date</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">To Date</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">Reference</th>
              <th className="px-md py-sm font-label-group text-label-group text-on-surface-variant uppercase">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {ledgerData.map((row, idx) => (
              <tr key={row.id} className={`hover:bg-surface-container-low/50 hover:translate-x-1 transition-all h-[44px] ${idx % 2 !== 0 ? 'bg-slate-50/30' : ''}`}>
                <td className="px-md py-xs font-body-md">{row.employee}</td>
                <td className="px-md py-xs font-body-md">{row.employee ? row.leaveType : ''}</td>
                <td className="px-md py-xs">
                  <span className={`px-sm py-0.5 rounded text-[11px] font-bold uppercase border ${row.transactionLabelClass}`}>
                    {row.transactionType}
                  </span>
                </td>
                <td className={`px-md py-xs font-bold text-right ${row.leavesClass}`}>{row.leaves}</td>
                <td className="px-md py-xs font-body-md text-on-surface-variant">{row.fromDate}</td>
                <td className="px-md py-xs font-body-md text-on-surface-variant">{row.toDate}</td>
                <td className="px-md py-xs font-body-md">
                  {row.referenceLink ? (
                    <a className="text-primary-container hover:underline font-medium cursor-pointer">{row.reference}</a>
                  ) : (
                    <span className="text-on-surface-variant">{row.reference}</span>
                  )}
                </td>
                <td className="px-md py-xs font-body-md text-on-surface-variant">{row.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination / Footer info */}
      <div className="px-md py-sm bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
        <span className="text-caption font-caption text-on-surface-variant">Showing 1-5 of 154 entries</span>
        <div className="flex gap-xs">
          <button className="p-1 rounded hover:bg-surface-dim transition-colors disabled:opacity-30" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="px-sm py-1 bg-primary-container text-white text-caption font-bold rounded">1</button>
          <button className="px-sm py-1 hover:bg-surface-dim text-caption rounded transition-colors">2</button>
          <button className="px-sm py-1 hover:bg-surface-dim text-caption rounded transition-colors">3</button>
          <button className="p-1 rounded hover:bg-surface-dim transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveLedgerTable;
