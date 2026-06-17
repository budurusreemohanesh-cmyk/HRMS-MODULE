import { Link } from 'react-router-dom';

const payrollData = [
  {
    id: 'PR-2023-10-01',
    period: 'October 2023',
    company: 'Pulse Tech Solutions',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700',
    employees: 450,
    grossPay: '₹ 1,25,00,000',
    netPay: '₹ 98,45,000',
    createdAt: 'Oct 28, 2023 10:15 AM'
  },
  {
    id: 'PR-2023-10-02',
    period: 'October 2023',
    company: 'Pulse Logistics Ltd',
    status: 'Processing',
    statusClass: 'bg-amber-100 text-amber-700',
    employees: 798,
    grossPay: '₹ 2,14,30,000',
    netPay: '₹ 1,65,12,000',
    createdAt: 'Oct 29, 2023 02:30 PM'
  },
  {
    id: 'PR-2023-11-01',
    period: 'November 2023',
    company: 'Pulse Tech Solutions',
    status: 'Draft',
    statusClass: 'bg-slate-100 text-slate-700',
    employees: 0,
    grossPay: '₹ 0',
    netPay: '₹ 0',
    createdAt: 'Nov 01, 2023 09:00 AM'
  },
  {
    id: 'PR-2023-09-04',
    period: 'September 2023',
    company: 'Pulse Logistics Ltd',
    status: 'Cancelled',
    statusClass: 'bg-red-100 text-red-700',
    employees: 798,
    grossPay: '₹ 2,10,00,000',
    netPay: '₹ 1,60,00,000',
    createdAt: 'Sep 28, 2023 04:00 PM'
  }
];

const PayrollTable = () => {
  return (
    <div className="bg-white rounded-xl border border-outline-variant overflow-hidden shadow-sm">
      <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
        <h4 className="font-headline-md text-headline-md text-on-surface">Recent Activity</h4>
        <div className="flex items-center gap-2">
          <button className="text-on-surface-variant hover:text-primary p-1 transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary p-1 transition-colors">
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto scroll-hide">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Run ID</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Period</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Company</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider text-center">Employees</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Gross Pay</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Net Pay</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider">Created At</th>
              <th className="px-lg py-3 text-label-group text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {payrollData.map((run) => (
              <tr key={run.id} className="hover:bg-surface-container-lowest transition-colors group">
                <td className="px-lg py-4 font-medium text-primary">{run.id}</td>
                <td className="px-lg py-4 text-body-md text-on-surface">{run.period}</td>
                <td className="px-lg py-4 text-body-md text-on-surface">{run.company}</td>
                <td className="px-lg py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[12px] font-semibold ${run.statusClass}`}>
                    {run.status}
                  </span>
                </td>
                <td className="px-lg py-4 text-body-md text-on-surface text-center">{run.employees}</td>
                <td className="px-lg py-4 text-body-md font-medium text-on-surface">{run.grossPay}</td>
                <td className="px-lg py-4 text-body-md font-semibold text-on-surface">{run.netPay}</td>
                <td className="px-lg py-4 text-caption text-on-surface-variant">{run.createdAt}</td>
                <td className="px-lg py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {run.status === 'Completed' || run.status === 'Processing' ? (
                      <>
                        <Link to={`/payslips/${run.id.replace('PR-', 'PS-')}`} className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors flex items-center justify-center" title="View Payslips">
                          <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </Link>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors" title="Cancel Run">
                          <span className="material-symbols-outlined text-[20px]">cancel</span>
                        </button>
                      </>
                    ) : run.status === 'Draft' ? (
                      <>
                        <button className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-1.5 text-error hover:bg-error/10 rounded-lg transition-colors" title="Delete">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </>
                    ) : (
                      <button className="p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Info">
                        <span className="material-symbols-outlined text-[20px]">info</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-lg py-4 flex items-center justify-between border-t border-outline-variant bg-surface-container-lowest">
        <p className="text-caption text-on-surface-variant">Showing 1 to 4 of 48 payroll runs</p>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-surface-container-low rounded disabled:opacity-30" disabled>
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <span className="px-3 py-1 bg-primary text-white text-caption rounded font-medium">1</span>
          <button className="px-3 py-1 text-caption hover:bg-surface-container-low rounded font-medium">2</button>
          <button className="px-3 py-1 text-caption hover:bg-surface-container-low rounded font-medium">3</button>
          <button className="p-1 hover:bg-surface-container-low rounded">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayrollTable;
