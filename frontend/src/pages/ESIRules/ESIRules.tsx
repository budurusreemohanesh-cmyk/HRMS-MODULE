import { useState } from 'react';
import ESIRulesTable from './components/ESIRulesTable';
import AddESIRuleModal from './components/AddESIRuleModal';

const ESIRules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Top Info Banner */}
      <div className="bg-surface-variant text-on-surface-variant p-md rounded border border-outline-variant flex items-start gap-md mb-xl">
        <span className="material-symbols-outlined text-secondary shrink-0">info</span>
        <p className="font-body-md text-body-md">Statutory rule numbers are never hardcoded. Each payslip stores the rule version that was applied at the time of payroll processing.</p>
      </div>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">ESI Rules</h2>
        <button 
          className="bg-primary-container text-on-primary py-[8px] px-md rounded flex items-center gap-sm hover:opacity-90 transition-opacity font-body-md text-body-md font-medium"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add ESI Rule Version
        </button>
      </div>

      {/* Data Table Card */}
      <ESIRulesTable />

      {/* Modal */}
      <AddESIRuleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ESIRules;
