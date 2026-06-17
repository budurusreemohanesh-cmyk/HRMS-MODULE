import { useState } from 'react';
import SalaryStructureTable from './components/SalaryStructureTable';
import AddSalaryStructureDrawer from './components/AddSalaryStructureDrawer';

const SalaryStructures = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Salary Structures</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Define compensation packages using salary components</p>
        </div>
        <button 
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
          onClick={() => toggleDrawer(true)}
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Create Structure
        </button>
      </div>

      <SalaryStructureTable />

      <AddSalaryStructureDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default SalaryStructures;
