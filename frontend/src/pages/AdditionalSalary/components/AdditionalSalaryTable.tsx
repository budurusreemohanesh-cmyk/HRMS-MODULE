interface AdditionalSalaryEntry {
  id: string;
  employeeName: string;
  employeeId: string;
  type: 'Incentive' | 'Bonus' | 'Penalty';
  amount: number;
  period: string;
  status: 'Pending' | 'Processed';
}

const additionalData: AdditionalSalaryEntry[] = [
  { id: '1', employeeName: 'Mohanesh Budurusree', employeeId: 'EMP001', type: 'Incentive', amount: 5000, period: 'April 2027', status: 'Pending' },
  { id: '2', employeeName: 'John Doe', employeeId: 'EMP002', type: 'Penalty', amount: 1000, period: 'April 2027', status: 'Pending' },
  { id: '3', employeeName: 'Jane Smith', employeeId: 'EMP003', type: 'Bonus', amount: 20000, period: 'March 2027', status: 'Processed' },
];

const AdditionalSalaryTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">EMPLOYEE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">PAYROLL PERIOD</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">TYPE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">AMOUNT (₹)</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {additionalData.map((entry, index) => (
              <tr key={entry.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg">
                  <div className="font-medium text-on-background">{entry.employeeName}</div>
                  <div className="text-caption text-on-surface-variant">{entry.employeeId}</div>
                </td>
                <td className="px-md text-on-surface-variant">{entry.period}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${
                    entry.type === 'Penalty' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {entry.type}
                  </span>
                </td>
                <td className="px-md font-medium text-on-surface">₹{entry.amount.toLocaleString()}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${entry.status === 'Processed' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                    {entry.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    {entry.status === 'Pending' ? (
                      <>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                        <button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                      </>
                    ) : (
                      <span className="text-caption text-on-surface-variant italic">Locked</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-lg py-md bg-surface-container-low border-t border-outline-variant">
        <span className="text-caption text-on-surface-variant">Showing 1 to {additionalData.length} of {additionalData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSalaryTable;
