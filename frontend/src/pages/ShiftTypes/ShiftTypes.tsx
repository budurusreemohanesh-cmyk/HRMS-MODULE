import { useState } from 'react';
import ShiftTypeTable from './components/ShiftTypeTable';
import AddShiftTypeDrawer from './components/AddShiftTypeDrawer';

const ShiftTypes = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Shift Types</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Manage working hours and shift timings</p>
        </div>
        <button 
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
          onClick={() => toggleDrawer(true)}
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Add Shift Type
        </button>
      </div>

      <ShiftTypeTable />

      <AddShiftTypeDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default ShiftTypes;
