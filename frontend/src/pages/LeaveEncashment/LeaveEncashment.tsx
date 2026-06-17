import { useState } from 'react';
import LeaveEncashmentTable from './components/LeaveEncashmentTable';
import ProcessEncashmentDrawer from './components/ProcessEncashmentDrawer';

const LeaveEncashment = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Leave Encashment</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Process and manage employee leave encashments</p>
        </div>
        <button 
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
          onClick={() => toggleDrawer(true)}
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Process Encashment
        </button>
      </div>

      <LeaveEncashmentTable />

      <ProcessEncashmentDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default LeaveEncashment;
