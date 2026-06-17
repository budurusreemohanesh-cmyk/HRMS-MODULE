interface LeaveType {
  id: string;
  name: string;
  code: string;
  isPaid: boolean;
  carryForward: boolean;
  encashable: boolean;
  maxDays: number;
  status: 'Active' | 'Inactive';
}

const leaveTypesData: LeaveType[] = [
  { id: '1', name: 'Casual Leave', code: 'CL', isPaid: true, carryForward: false, encashable: false, maxDays: 12, status: 'Active' },
  { id: '2', name: 'Sick Leave', code: 'SL', isPaid: true, carryForward: true, encashable: false, maxDays: 12, status: 'Active' },
  { id: '3', name: 'Earned Leave', code: 'EL', isPaid: true, carryForward: true, encashable: true, maxDays: 18, status: 'Active' },
  { id: '4', name: 'Maternity Leave', code: 'ML', isPaid: true, carryForward: false, encashable: false, maxDays: 180, status: 'Active' },
  { id: '5', name: 'Loss of Pay', code: 'LOP', isPaid: false, carryForward: false, encashable: false, maxDays: 365, status: 'Active' },
];

const LeaveConfigTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">LEAVE TYPE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">CODE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">PAID/UNPAID</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">CARRY FORWARD</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">MAX DAYS</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {leaveTypesData.map((leave, index) => (
              <tr key={leave.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{leave.name}</td>
                <td className="px-md text-on-surface-variant">{leave.code}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${leave.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {leave.isPaid ? 'Paid' : 'Unpaid'}
                  </span>
                </td>
                <td className="px-md text-on-surface-variant">{leave.carryForward ? 'Yes' : 'No'}</td>
                <td className="px-md text-on-surface-variant">{leave.maxDays}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${leave.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {leave.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    {leave.status === 'Active' ? (
                      <button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">block</span></button>
                    ) : (
                      <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">check_circle</span></button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-lg py-md bg-surface-container-low border-t border-outline-variant">
        <span className="text-caption text-on-surface-variant">Showing 1 to {leaveTypesData.length} of {leaveTypesData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default LeaveConfigTable;
