
const AttendanceTrends = () => {
  return (
    <div className="md:col-span-8 bg-surface border border-outline-variant p-lg rounded-xl min-h-[400px]">
      <div className="flex justify-between items-center mb-xl">
        <div>
          <h5 className="text-headline-md font-headline-md text-on-surface">Attendance Trends</h5>
          <p className="text-caption text-on-surface-variant">Monthly breakdown across departments</p>
        </div>
        <div className="flex gap-xs">
          <button className="px-sm py-xs text-caption bg-surface-container-highest rounded font-bold">7 Days</button>
          <button className="px-sm py-xs text-caption bg-transparent hover:bg-surface-container rounded font-bold">30 Days</button>
        </div>
      </div>
      {/* Placeholder for Chart */}
      <div className="w-full h-64 flex items-end gap-md pb-md">
        <div className="flex-1 bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t-lg h-[60%]"></div>
        <div className="flex-1 bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t-lg h-[80%]"></div>
        <div className="flex-1 bg-primary-container/40 hover:bg-primary-container/60 transition-colors rounded-t-lg h-[95%]"></div>
        <div className="flex-1 bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t-lg h-[70%]"></div>
        <div className="flex-1 bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t-lg h-[85%]"></div>
        <div className="flex-1 bg-primary-container/30 hover:bg-primary-container/50 transition-colors rounded-t-lg h-[65%]"></div>
        <div className="flex-1 bg-primary-container/20 hover:bg-primary-container/40 transition-colors rounded-t-lg h-[75%]"></div>
      </div>
      <div className="flex justify-between pt-sm border-t border-outline-variant/30">
        <span className="text-caption text-on-surface-variant">Mon</span>
        <span className="text-caption text-on-surface-variant">Tue</span>
        <span className="text-caption text-on-surface-variant">Wed</span>
        <span className="text-caption text-on-surface-variant">Thu</span>
        <span className="text-caption text-on-surface-variant">Fri</span>
        <span className="text-caption text-on-surface-variant">Sat</span>
        <span className="text-caption text-on-surface-variant">Sun</span>
      </div>
    </div>
  );
};

export default AttendanceTrends;
