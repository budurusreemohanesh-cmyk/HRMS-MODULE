interface PayrollPeriod {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  processingDate: string;
  status: 'Open' | 'Processing' | 'Closed';
}

const periodData: PayrollPeriod[] = [
  { id: '1', name: 'April 2027', startDate: '01 Apr 2027', endDate: '30 Apr 2027', processingDate: '01 May 2027', status: 'Open' },
  { id: '2', name: 'March 2027', startDate: '01 Mar 2027', endDate: '31 Mar 2027', processingDate: '01 Apr 2027', status: 'Closed' },
  { id: '3', name: 'February 2027', startDate: '01 Feb 2027', endDate: '28 Feb 2027', processingDate: '01 Mar 2027', status: 'Closed' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Open': return 'bg-green-100 text-green-700';
    case 'Processing': return 'bg-orange-100 text-orange-700';
    case 'Closed': return 'bg-surface-variant text-on-surface-variant';
    default: return 'bg-surface-variant text-on-surface-variant';
  }
};

const PayrollPeriodTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">PERIOD NAME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">START DATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">END DATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">PROCESSING DATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {periodData.map((period, index) => (
              <tr key={period.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{period.name}</td>
                <td className="px-md text-on-surface-variant">{period.startDate}</td>
                <td className="px-md text-on-surface-variant">{period.endDate}</td>
                <td className="px-md text-on-surface-variant">{period.processingDate}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${getStatusColor(period.status)}`}>
                    {period.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    {period.status === 'Open' ? (
                      <>
                        <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                        <button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">lock</span></button>
                      </>
                    ) : (
                      <button className="hover:text-primary transition-colors" title="View"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-lg py-md bg-surface-container-low border-t border-outline-variant">
        <span className="text-caption text-on-surface-variant">Showing 1 to {periodData.length} of {periodData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default PayrollPeriodTable;
