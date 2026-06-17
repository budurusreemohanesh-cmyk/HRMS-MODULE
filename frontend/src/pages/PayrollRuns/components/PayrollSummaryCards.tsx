const PayrollSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
      <div className="bg-white p-lg rounded-xl border border-outline-variant flex items-center justify-between shadow-sm">
        <div>
          <p className="text-on-surface-variant text-label-group uppercase tracking-wider mb-2">Total Payroll Runs (FY 23-24)</p>
          <h3 className="text-display font-display text-on-surface">14</h3>
        </div>
        <div className="p-3 bg-primary/5 rounded-full">
          <span className="material-symbols-outlined text-primary text-[32px]">analytics</span>
        </div>
      </div>
      <div className="bg-white p-lg rounded-xl border border-outline-variant flex items-center justify-between shadow-sm">
        <div>
          <p className="text-on-surface-variant text-label-group uppercase tracking-wider mb-2">Payslips Generated (Oct)</p>
          <h3 className="text-display font-display text-on-surface">1,248</h3>
        </div>
        <div className="p-3 bg-secondary-container/30 rounded-full">
          <span className="material-symbols-outlined text-secondary text-[32px]">description</span>
        </div>
      </div>
      <div className="bg-white p-lg rounded-xl border border-outline-variant flex items-center justify-between shadow-sm">
        <div>
          <p className="text-on-surface-variant text-label-group uppercase tracking-wider mb-2">Pending Approvals</p>
          <h3 className="text-display font-display text-error">03</h3>
        </div>
        <div className="p-3 bg-error-container/30 rounded-full">
          <span className="material-symbols-outlined text-error text-[32px]">pending_actions</span>
        </div>
      </div>
    </div>
  );
};

export default PayrollSummaryCards;
