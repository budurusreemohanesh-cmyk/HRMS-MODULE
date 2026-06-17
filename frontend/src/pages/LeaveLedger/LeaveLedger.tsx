import { useState } from 'react';
import LeaveFilterBar from './components/LeaveFilterBar';
import LeaveSummaryCards from './components/LeaveSummaryCards';
import LeaveLedgerTable from './components/LeaveLedgerTable';
import AddAllocationDrawer from './components/AddAllocationDrawer';

const LeaveLedger = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Header Action Row */}
      <div className="flex justify-between items-end mb-lg">
        <div>
          <h3 className="font-headline-lg text-headline-lg font-semibold text-on-surface">Leave Balance Ledger</h3>
          <p className="font-body-md text-on-surface-variant mt-1">View and manage history of all leave allocations and adjustments.</p>
        </div>
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="bg-primary text-white px-lg py-sm rounded-lg font-nav-item text-nav-item flex items-center gap-xs hover:bg-opacity-90 active:scale-95 transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">add</span> New Allocation
        </button>
      </div>

      <LeaveFilterBar />
      <LeaveSummaryCards />
      <LeaveLedgerTable />

      <AddAllocationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
};

export default LeaveLedger;
