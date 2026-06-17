const Reports = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Reports & Analytics</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Generate, view, and schedule HR and payroll reports.</p>
        </div>
        <button className="bg-primary-container text-white px-4 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm flex items-center gap-xs">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Custom Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-xl">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm hover:border-primary-container transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-md group-hover:bg-primary-container/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Payroll Summary</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Monthly aggregated payroll reports with tax breakdowns.</p>
        </div>
        
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm hover:border-primary-container transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-md group-hover:bg-primary-container/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-[24px]">groups</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Headcount</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Department-wise employee count and attrition trends.</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm hover:border-primary-container transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-md group-hover:bg-primary-container/10 transition-colors">
            <span className="material-symbols-outlined text-primary text-[24px]">calendar_today</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Attendance & Leaves</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">Leave utilization and daily attendance anomalies.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col items-center justify-center p-xl flex-1 min-h-[300px]">
        <span className="material-symbols-outlined text-[48px] text-outline-variant mb-md">analytics</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Select a report to view details</h3>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[384px] text-center">
          Click on one of the report categories above to generate data visualizations and export options.
        </p>
      </div>
    </div>
  );
};

export default Reports;
