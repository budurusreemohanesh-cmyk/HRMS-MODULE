
const EmployeeSummaryWidgets = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-lg">
      <div className="bg-white border border-outline-variant p-md rounded-xl shadow-sm flex items-center justify-between">
        <div>
          <p className="text-label-group text-on-surface-variant uppercase">TOTAL EMPLOYEES</p>
          <h4 className="text-headline-md font-bold text-primary">250</h4>
        </div>
        <div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">group</span>
        </div>
      </div>
      
      <div className="bg-white border border-outline-variant p-md rounded-xl shadow-sm flex items-center justify-between">
        <div>
          <p className="text-label-group text-on-surface-variant uppercase">NEW HIRES (MTD)</p>
          <h4 className="text-headline-md font-bold text-green-600">12</h4>
        </div>
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-green-600">person_add</span>
        </div>
      </div>

      <div className="bg-white border border-outline-variant p-md rounded-xl shadow-sm flex items-center justify-between">
        <div>
          <p className="text-label-group text-on-surface-variant uppercase">DEPARTMENTS</p>
          <h4 className="text-headline-md font-bold text-secondary">08</h4>
        </div>
        <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary">hub</span>
        </div>
      </div>

      <div className="bg-white border border-outline-variant p-md rounded-xl shadow-sm flex items-center justify-between">
        <div>
          <p className="text-label-group text-on-surface-variant uppercase">GENDER DIVERSITY</p>
          <h4 className="text-headline-md font-bold text-on-surface">52% <span className="text-caption font-normal text-outline">F</span></h4>
        </div>
        <div className="w-10 h-10 bg-tertiary-fixed rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-on-tertiary-fixed">pie_chart</span>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSummaryWidgets;
