import { useState } from 'react';
import DepartmentTable from './components/DepartmentTable';
import AddDepartmentDrawer from './components/AddDepartmentDrawer';

const Departments = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Departments</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Manage functional areas within the organization</p>
        </div>
        <button 
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
          onClick={() => toggleDrawer(true)}
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Add Department
        </button>
      </div>

      <DepartmentTable />

      <AddDepartmentDrawer isOpen={isDrawerOpen} onClose={() => toggleDrawer(false)} />
    </>
  );
};

export default Departments;
