const esiRulesData = [
  {
    id: 'ESI-2024-001',
    company: 'Pulse Tech Solutions',
    eeCont: '0.75',
    erCont: '3.25',
    wageCeiling: '₹ 21,000',
    effectiveFrom: '01-Apr-2024',
    effectiveTo: '-',
    status: 'Active',
    statusClass: 'bg-surface-tint/10 text-surface-tint',
    isSuperseded: false,
  },
  {
    id: 'ESI-2023-015',
    company: 'Pulse Tech Solutions',
    eeCont: '0.75',
    erCont: '3.25',
    wageCeiling: '₹ 21,000',
    effectiveFrom: '01-Oct-2023',
    effectiveTo: '31-Mar-2024',
    status: 'Superseded',
    statusClass: 'bg-surface-variant text-on-surface-variant',
    isSuperseded: true,
  }
];

const ESIRulesTable = () => {
  return (
    <div className="bg-surface-container-lowest rounded border border-outline-variant overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface border-b border-outline-variant font-label-group text-label-group text-on-surface-variant uppercase tracking-wider">
              <th className="py-md px-md whitespace-nowrap">ESI Rule ID</th>
              <th className="py-md px-md whitespace-nowrap">Company</th>
              <th className="py-md px-md text-right whitespace-nowrap">EE Cont. %</th>
              <th className="py-md px-md text-right whitespace-nowrap">ER Cont. %</th>
              <th className="py-md px-md text-right whitespace-nowrap">Wage Ceiling ₹</th>
              <th className="py-md px-md whitespace-nowrap">Effective From</th>
              <th className="py-md px-md whitespace-nowrap">Effective To</th>
              <th className="py-md px-md whitespace-nowrap">Status</th>
              <th className="py-md px-md text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface">
            {esiRulesData.map((rule) => (
              <tr key={rule.id} className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                <td className={`py-[12px] px-md font-medium ${rule.isSuperseded ? 'text-on-surface-variant' : ''}`}>{rule.id}</td>
                <td className={`py-[12px] px-md ${rule.isSuperseded ? 'text-on-surface-variant' : ''}`}>{rule.company}</td>
                <td className={`py-[12px] px-md text-right ${rule.isSuperseded ? 'text-on-surface-variant' : ''}`}>{rule.eeCont}</td>
                <td className={`py-[12px] px-md text-right ${rule.isSuperseded ? 'text-on-surface-variant' : ''}`}>{rule.erCont}</td>
                <td className={`py-[12px] px-md text-right ${rule.isSuperseded ? 'text-on-surface-variant' : ''}`}>{rule.wageCeiling}</td>
                <td className={`py-[12px] px-md ${rule.isSuperseded ? 'text-on-surface-variant' : ''}`}>{rule.effectiveFrom}</td>
                <td className={`py-[12px] px-md ${rule.isSuperseded || rule.effectiveTo === '-' ? 'text-on-surface-variant' : ''}`}>{rule.effectiveTo}</td>
                <td className="py-[12px] px-md">
                  <span className={`inline-flex items-center px-[8px] py-[2px] rounded-sm font-medium text-[11px] uppercase tracking-wider ${rule.statusClass}`}>
                    {rule.status}
                  </span>
                </td>
                <td className="py-[12px] px-md text-center">
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-[4px] rounded hover:bg-surface-variant">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ESIRulesTable;
