import { useState } from 'react';
import AdditionalSalaryTable from './components/AdditionalSalaryTable';
import AddAdditionalSalaryDrawer from './components/AddAdditionalSalaryDrawer';

const AdditionalSalary = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Additional Salary</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Manage ad-hoc incentives, bonuses, or deductions</p>
        </div>
        <button 
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
          onClick={() => toggleDrawer(true)}
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Add Entry
        </button>
      </div>

      <AdditionalSalaryTable />

      <AddAdditionalSalaryDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default AdditionalSalary;
