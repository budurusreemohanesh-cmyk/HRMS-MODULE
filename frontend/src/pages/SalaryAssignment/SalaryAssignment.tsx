import { Link } from 'react-router-dom';
import AssignmentForm from './components/AssignmentForm';
import WageRuleChecker from './components/WageRuleChecker';
import PreviousAssignments from './components/PreviousAssignments';

const SalaryAssignment = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Breadcrumbs - Specific to SalaryAssignment as per HTML */}
      <div className="flex justify-between items-end mb-xl">
        <div>
          <nav className="flex items-center gap-2 text-on-surface-variant text-caption mb-1">
            <Link to="/payroll" className="hover:text-primary transition-colors">Payroll</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface font-medium">Salary Structure Assignments</span>
          </nav>
        </div>
      </div>

      <div className="mb-xl mt-[-2rem]">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Salary Structure Assignment</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Assign and validate salary structures for employees ensuring compliance with current wage rules.</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left Column: Form Section */}
        <div className="lg:col-span-8">
          <AssignmentForm />
        </div>
        
        {/* Right Column: Validation & Action */}
        <div className="lg:col-span-4">
          <WageRuleChecker />
        </div>
      </div>

      {/* Historical Table Section */}
      <PreviousAssignments />
    </div>
  );
};

export default SalaryAssignment;
