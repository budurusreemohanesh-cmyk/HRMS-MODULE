const AttendanceLogs = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Attendance Logs</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">View daily attendance punch records and anomalies.</p>
        </div>
        <div className="flex items-center gap-sm">
          <div className="bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant flex items-center text-on-surface">
            <span className="material-symbols-outlined text-[18px] mr-2">calendar_month</span>
            <span className="font-body-md text-body-md">Oct 2023</span>
            <span className="material-symbols-outlined text-[18px] ml-2 cursor-pointer">arrow_drop_down</span>
          </div>
          <button className="bg-surface-container text-on-surface px-4 py-2 rounded text-nav-item font-nav-item hover:bg-surface-container-high transition-colors shadow-sm border border-outline-variant flex items-center gap-xs">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Total Employees</p>
          <p className="font-display text-[28px] font-bold text-on-surface">142</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Present Today</p>
          <p className="font-display text-[28px] font-bold text-primary">130</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">On Leave</p>
          <p className="font-display text-[28px] font-bold text-error">8</p>
        </div>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-1">Late In / Half Day</p>
          <p className="font-display text-[28px] font-bold text-on-surface-variant">4</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-md mb-lg">
        <div className="relative flex-1 max-w-[384px]">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search employee..." 
            className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-body-md"
          />
        </div>
        <select className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary">
          <option>All Departments</option>
          <option>Engineering</option>
          <option>Sales</option>
          <option>HR</option>
        </select>
        <select className="px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-primary focus:border-primary">
          <option>All Statuses</option>
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
          <option>Half Day</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl flex-1 overflow-hidden flex flex-col shadow-sm">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-lowest text-on-surface-variant font-nav-item text-nav-item uppercase tracking-wider">
                <th className="p-md font-medium">Employee</th>
                <th className="p-md font-medium">Date</th>
                <th className="p-md font-medium">First In</th>
                <th className="p-md font-medium">Last Out</th>
                <th className="p-md font-medium">Total Hours</th>
                <th className="p-md font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-body-md">
              <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">AS</div>
                    <div>
                      <p className="font-nav-item text-nav-item text-on-surface">Arjun Singh</p>
                      <p className="text-[12px] text-on-surface-variant">EMP-0842</p>
                    </div>
                  </div>
                </td>
                <td className="p-md text-on-surface">15 Oct 2023</td>
                <td className="p-md text-on-surface">09:14 AM</td>
                <td className="p-md text-on-surface">06:45 PM</td>
                <td className="p-md text-on-surface">9h 31m</td>
                <td className="p-md">
                  <span className="bg-[#E6F4EA] text-[#137333] px-2 py-1 rounded text-[12px] font-medium border border-[#CEEAD6]">Present</span>
                </td>
              </tr>
              <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">NK</div>
                    <div>
                      <p className="font-nav-item text-nav-item text-on-surface">Neha Kapoor</p>
                      <p className="text-[12px] text-on-surface-variant">EMP-0921</p>
                    </div>
                  </div>
                </td>
                <td className="p-md text-on-surface">15 Oct 2023</td>
                <td className="p-md text-on-surface">10:45 AM</td>
                <td className="p-md text-on-surface">07:30 PM</td>
                <td className="p-md text-on-surface">8h 45m</td>
                <td className="p-md">
                  <span className="bg-[#FFF3E0] text-[#E65100] px-2 py-1 rounded text-[12px] font-medium border border-[#FFE0B2]">Late In</span>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="p-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">RJ</div>
                    <div>
                      <p className="font-nav-item text-nav-item text-on-surface">Rohan Joshi</p>
                      <p className="text-[12px] text-on-surface-variant">EMP-1004</p>
                    </div>
                  </div>
                </td>
                <td className="p-md text-on-surface">15 Oct 2023</td>
                <td className="p-md text-on-surface">--</td>
                <td className="p-md text-on-surface">--</td>
                <td className="p-md text-on-surface">--</td>
                <td className="p-md">
                  <span className="bg-[#FCE8E6] text-[#C5221F] px-2 py-1 rounded text-[12px] font-medium border border-[#FAD2CF]">Absent</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceLogs;
