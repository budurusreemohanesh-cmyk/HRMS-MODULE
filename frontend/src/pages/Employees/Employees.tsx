import { Link } from 'react-router-dom';
import EmployeeFilterBar from './components/EmployeeFilterBar';
import EmployeeTable from './components/EmployeeTable';
import EmployeeSummaryWidgets from './components/EmployeeSummaryWidgets';

const Employees = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h1 className="text-[20px] font-semibold text-on-background">Employees</h1>
          <p className="text-caption text-on-surface-variant mt-xs">Manage employee records, roles, and status</p>
        </div>
        <Link to="/employees/new" className="inline-flex items-center px-lg py-sm bg-primary text-white font-medium rounded hover:bg-on-primary-fixed-variant transition-colors cursor-pointer">
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Add Employee
        </Link>
      </div>

      <div className="space-y-lg">
        {/* Filter Bar */}
        <EmployeeFilterBar />

        {/* Data Table Section */}
        <EmployeeTable />

        {/* Bento Widgets Summary */}
        <EmployeeSummaryWidgets />
      </div>
    </>
  );
};

export default Employees;
