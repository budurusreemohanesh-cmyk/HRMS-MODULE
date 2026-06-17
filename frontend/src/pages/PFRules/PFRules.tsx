import { useState } from 'react';
import PFRulesTable from './components/PFRulesTable';
import AddPFRuleModal from './components/AddPFRuleModal';

const PFRules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Info Banner */}
      <div className="bg-[#F1F5F9] text-[#475569] p-md rounded-lg mb-lg border border-[#E2E8F0] flex items-start gap-3">
        <span className="material-symbols-outlined mt-0.5 text-[#64748B]">info</span>
        <p className="font-body-md text-body-md">Statutory rule numbers are never hardcoded. Each payslip stores the rule version that was applied at the time of payroll processing.</p>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-center mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">PF Rules</h2>
        <button 
          className="bg-primary-container text-white px-4 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm"
          onClick={() => setIsModalOpen(true)}
        >
          Add PF Rule Version
        </button>
      </div>

      {/* Data Table Card */}
      <PFRulesTable />

      {/* Modal */}
      <AddPFRuleModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default PFRules;
