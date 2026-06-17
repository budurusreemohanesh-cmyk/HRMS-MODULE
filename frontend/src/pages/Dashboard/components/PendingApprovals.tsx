import { useState } from 'react';

const initialApprovals = [
  {
    id: 1,
    initials: 'AS',
    name: 'Arjun Singh',
    empId: 'EMP-9421',
    type: 'Privileged Leave',
    duration: 'Sep 24 - Sep 28 (5 Days)',
    status: 'Pending Review',
    color: 'primary',
  },
  {
    id: 2,
    initials: 'KD',
    name: 'Kavita Deshmukh',
    empId: 'EMP-8812',
    type: 'Sick Leave',
    duration: 'Sep 21 (1 Day)',
    status: 'Pending Review',
    color: 'secondary',
  }
];

const PendingApprovals = () => {
  const [approvals, setApprovals] = useState(initialApprovals);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAction = (id: number, action: 'approved' | 'rejected') => {
    setApprovals(approvals.filter(a => a.id !== id));
    setToastMessage(`Request ${action} successfully.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="md:col-span-12 bg-surface border border-outline-variant rounded-xl overflow-hidden relative">
      <div className="p-lg border-b border-outline-variant flex justify-between items-center">
        <div>
          <h5 className="text-headline-md font-headline-md text-on-surface">Pending Approvals</h5>
          <p className="text-caption text-on-surface-variant">Items requiring immediate HR attention</p>
        </div>
        <div className="flex gap-sm">
          <button className="px-md py-sm bg-surface border border-outline-variant text-on-surface font-nav-item text-nav-item rounded-lg hover:bg-surface-container transition-all">Export Report</button>
        </div>
      </div>

      {toastMessage && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-surface border-l-4 border-primary shadow-lg p-sm rounded z-10 text-on-surface font-body-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
          {toastMessage}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="p-md font-label-group text-label-group uppercase tracking-widest text-on-surface-variant">Employee</th>
              <th className="p-md font-label-group text-label-group uppercase tracking-widest text-on-surface-variant">Type</th>
              <th className="p-md font-label-group text-label-group uppercase tracking-widest text-on-surface-variant">Duration</th>
              <th className="p-md font-label-group text-label-group uppercase tracking-widest text-on-surface-variant">Status</th>
              <th className="p-md font-label-group text-label-group uppercase tracking-widest text-on-surface-variant">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {approvals.length > 0 ? approvals.map((approval) => (
              <tr key={approval.id} className="hover:bg-surface-container/20 transition-colors">
                <td className="p-md">
                  <div className="flex items-center gap-sm">
                    <div className={`w-8 h-8 rounded bg-${approval.color}-container/20 flex items-center justify-center text-${approval.color} font-bold text-xs`}>{approval.initials}</div>
                    <div>
                      <p className="font-bold text-body-md text-on-surface">{approval.name}</p>
                      <p className="text-caption text-on-surface-variant">ID: {approval.empId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-md text-body-md text-on-surface">{approval.type}</td>
                <td className="p-md text-body-md text-on-surface">{approval.duration}</td>
                <td className="p-md">
                  <span className="px-sm py-base bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">{approval.status}</span>
                </td>
                <td className="p-md">
                  <div className="flex gap-sm">
                    <button onClick={() => handleAction(approval.id, 'approved')} className="p-xs text-primary hover:bg-primary-container/10 rounded" title="Approve">
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                    </button>
                    <button onClick={() => handleAction(approval.id, 'rejected')} className="p-xs text-error hover:bg-error-container/20 rounded" title="Reject">
                      <span className="material-symbols-outlined text-lg">cancel</span>
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="p-xl text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-[48px] opacity-20 mb-sm">task_alt</span>
                  <p>All caught up! No pending approvals.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingApprovals;
