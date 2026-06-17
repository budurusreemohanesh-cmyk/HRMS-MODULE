interface ShiftType {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  workingHours: number;
  status: 'Active' | 'Inactive';
}

const shiftTypesData: ShiftType[] = [
  { id: '1', name: 'General Shift', startTime: '09:00', endTime: '18:00', workingHours: 9, status: 'Active' },
  { id: '2', name: 'Morning Shift', startTime: '06:00', endTime: '14:00', workingHours: 8, status: 'Active' },
  { id: '3', name: 'Evening Shift', startTime: '14:00', endTime: '22:00', workingHours: 8, status: 'Active' },
  { id: '4', name: 'Night Shift', startTime: '22:00', endTime: '06:00', workingHours: 8, status: 'Inactive' },
];

const ShiftTypeTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">SHIFT NAME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">START TIME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">END TIME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">WORKING HOURS</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {shiftTypesData.map((shift, index) => (
              <tr key={shift.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{shift.name}</td>
                <td className="px-md text-on-surface-variant">{shift.startTime}</td>
                <td className="px-md text-on-surface-variant">{shift.endTime}</td>
                <td className="px-md text-on-surface-variant">{shift.workingHours} hrs</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${shift.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {shift.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    {shift.status === 'Active' ? (
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
        <span className="text-caption text-on-surface-variant">Showing 1 to {shiftTypesData.length} of {shiftTypesData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default ShiftTypeTable;
