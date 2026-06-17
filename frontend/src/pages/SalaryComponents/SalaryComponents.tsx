import { useState } from 'react';
import SalaryComponentTable from './components/SalaryComponentTable';
import AddSalaryComponentDrawer from './components/AddSalaryComponentDrawer';

const SalaryComponents = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Salary Components</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Manage earnings, deductions, and reimbursements</p>
        </div>
        <button 
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
          onClick={() => toggleDrawer(true)}
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Add Component
        </button>
      </div>

      <SalaryComponentTable />

      <AddSalaryComponentDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default SalaryComponents;
