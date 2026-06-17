const AttendanceSummary = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
      <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant">
        <h3 className="font-headline-md text-headline-md text-on-surface text-base flex items-center gap-sm">
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          Attendance Summary
        </h3>
      </div>
      <div className="p-md flex flex-col gap-sm font-body-md text-body-md">
        <div className="flex justify-between items-center py-xs border-b border-outline-variant/50">
          <span className="text-on-surface-variant">Working Days</span>
          <span className="text-on-surface font-medium">31</span>
        </div>
        <div className="flex justify-between items-center py-xs border-b border-outline-variant/50">
          <span className="text-on-surface-variant">Days Present</span>
          <span className="text-on-surface font-medium">28</span>
        </div>
        <div className="flex justify-between items-center py-xs border-b border-outline-variant/50">
          <span className="text-on-surface-variant">Days Absent</span>
          <span className="text-error font-medium">1</span>
        </div>
        <div className="flex justify-between items-center py-xs border-b border-outline-variant/50">
          <span className="text-on-surface-variant">LWP</span>
          <span className="text-error font-medium">2</span>
        </div>
        <div className="flex justify-between items-center py-xs pt-sm mt-xs">
          <span className="text-on-surface font-semibold">Payment Days</span>
          <span className="text-primary text-body-lg font-bold">29</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
