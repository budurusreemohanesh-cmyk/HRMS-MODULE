interface Holiday {
  id: string;
  name: string;
  date: string;
  type: 'Mandatory' | 'Optional';
  region: string;
  status: 'Active' | 'Inactive';
}

const holidaysData: Holiday[] = [
  { id: '1', name: 'New Year Day', date: '01 Jan 2027', type: 'Mandatory', region: 'All India', status: 'Active' },
  { id: '2', name: 'Republic Day', date: '26 Jan 2027', type: 'Mandatory', region: 'All India', status: 'Active' },
  { id: '3', name: 'Holi', date: '25 Mar 2027', type: 'Optional', region: 'North India', status: 'Active' },
  { id: '4', name: 'Maharashtra Day', date: '01 May 2027', type: 'Mandatory', region: 'Maharashtra', status: 'Active' },
];

const HolidayListTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">HOLIDAY NAME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">DATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">TYPE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">REGION / BRANCH</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {holidaysData.map((holiday, index) => (
              <tr key={holiday.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{holiday.name}</td>
                <td className="px-md text-on-surface-variant">{holiday.date}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${holiday.type === 'Mandatory' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}>
                    {holiday.type}
                  </span>
                </td>
                <td className="px-md text-on-surface-variant">{holiday.region}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${holiday.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {holiday.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    {holiday.status === 'Active' ? (
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
        <span className="text-caption text-on-surface-variant">Showing 1 to {holidaysData.length} of {holidaysData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default HolidayListTable;
