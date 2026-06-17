interface Encashment {
  id: string;
  employeeName: string;
  employeeId: string;
  leaveType: string;
  encashDays: number;
  amount: number;
  status: 'Pending' | 'Approved' | 'Rejected' | 'Processed';
  date: string;
}

const encashmentData: Encashment[] = [
  { id: '1', employeeName: 'Mohanesh Budurusree', employeeId: 'EMP001', leaveType: 'Earned Leave', encashDays: 5, amount: 15000, status: 'Processed', date: '01 Jan 2027' },
  { id: '2', employeeName: 'John Doe', employeeId: 'EMP002', leaveType: 'Earned Leave', encashDays: 10, amount: 25000, status: 'Pending', date: '15 Mar 2027' },
  { id: '3', employeeName: 'Jane Smith', employeeId: 'EMP003', leaveType: 'Earned Leave', encashDays: 3, amount: 9000, status: 'Approved', date: '10 Apr 2027' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Processed': return 'bg-green-100 text-green-700';
    case 'Approved': return 'bg-blue-100 text-blue-700';
    case 'Pending': return 'bg-orange-100 text-orange-700';
    case 'Rejected': return 'bg-red-100 text-red-700';
    default: return 'bg-surface-variant text-on-surface-variant';
  }
};

const LeaveEncashmentTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">EMPLOYEE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">LEAVE TYPE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">DAYS</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">AMOUNT (₹)</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">DATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {encashmentData.map((record, index) => (
              <tr key={record.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg">
                  <div className="font-medium text-on-background">{record.employeeName}</div>
                  <div className="text-caption text-on-surface-variant">{record.employeeId}</div>
                </td>
                <td className="px-md text-on-surface-variant">{record.leaveType}</td>
                <td className="px-md text-on-surface-variant">{record.encashDays}</td>
                <td className="px-md font-medium text-on-surface">₹{record.amount.toLocaleString()}</td>
                <td className="px-md text-on-surface-variant">{record.date}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${getStatusColor(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors" title="View Details"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                    {record.status === 'Pending' && (
                      <>
                        <button className="hover:text-green-600 transition-colors" title="Approve"><span className="material-symbols-outlined text-[18px]">check</span></button>
                        <button className="hover:text-error transition-colors" title="Reject"><span className="material-symbols-outlined text-[18px]">close</span></button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-lg py-md bg-surface-container-low border-t border-outline-variant">
        <span className="text-caption text-on-surface-variant">Showing 1 to {encashmentData.length} of {encashmentData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default LeaveEncashmentTable;
