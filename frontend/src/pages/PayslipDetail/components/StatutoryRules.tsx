import { useState } from 'react';

const StatutoryRules = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl mt-md shadow-sm overflow-hidden">
      <button 
        className="w-full px-md py-sm flex justify-between items-center hover:bg-surface-container-low transition-colors text-left outline-none" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-body-md text-body-md font-medium text-on-surface">Statutory Rules Applied</span>
        <span className="material-symbols-outlined text-outline">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      
      {isExpanded && (
        <div className="border-t border-outline-variant p-md bg-surface">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">PF Rule ID</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">PF-2023-V2</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">ESI Rule ID</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">ESI-STD-01</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">PT Slab ID</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">PT-KA-200</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">TDS Slab ID</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">TDS-NEW-REG-24</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">Gratuity Rule ID</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">GRT-4.81</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">Wage Rule Version ID</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">WR-2023-10-A</span>
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label-group text-label-group text-outline uppercase">Computed At</span>
              <span className="font-caption text-caption text-on-surface-variant bg-surface-container-low px-xs py-[2px] rounded border border-outline-variant inline-block w-max font-mono">2023-10-25T14:32:01Z</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatutoryRules;
