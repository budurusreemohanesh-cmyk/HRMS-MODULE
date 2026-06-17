import { useState } from 'react';
import PayrollSummaryCards from './components/PayrollSummaryCards';
import PayrollTable from './components/PayrollTable';
import NewPayrollModal from './components/NewPayrollModal';
import ConfirmPayrollModal from './components/ConfirmPayrollModal';

const PayrollRuns = () => {
  const [isNewPayrollOpen, setIsNewPayrollOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleOpenNewPayroll = () => {
    setIsNewPayrollOpen(true);
  };

  const handleCloseNewPayroll = () => {
    setIsNewPayrollOpen(false);
  };

  const handleConfirmNewPayroll = () => {
    // Show confirm dialog, close new payroll form
    setIsNewPayrollOpen(false);
    setIsConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
  };

  const handleExecuteRun = () => {
    alert('Payroll run initiated successfully. Redirecting to tracker...');
    setIsConfirmOpen(false);
  };

  return (
    <>
      {/* Breadcrumbs & Header */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-caption mb-1">
            <span>Payroll</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-medium">Payroll Runs</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Payroll Runs</h2>
        </div>
        <button 
          className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-primary transition-all shadow-sm"
          onClick={handleOpenNewPayroll}
        >
          <span className="material-symbols-outlined">add</span>
          New Payroll Run
        </button>
      </div>

      <PayrollSummaryCards />
      <PayrollTable />

      <NewPayrollModal 
        isOpen={isNewPayrollOpen} 
        onClose={handleCloseNewPayroll} 
        onConfirm={handleConfirmNewPayroll} 
      />
      
      <ConfirmPayrollModal 
        isOpen={isConfirmOpen} 
        onClose={handleCloseConfirm} 
        onConfirm={handleExecuteRun} 
      />
    </>
  );
};

export default PayrollRuns;
