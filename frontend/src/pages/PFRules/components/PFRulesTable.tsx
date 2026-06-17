const pfRulesData = [
  {
    id: 'PF-2024-001',
    company: 'Pulse Tech Solutions',
    eeCont: '12.00',
    erCont: '12.00',
    wageCeiling: '₹ 15,000',
    effectiveFrom: '01-Apr-2024',
    effectiveTo: '--',
    status: 'Active',
    statusClass: 'bg-[#DCFCE7] text-[#166534]',
    isSuperseded: false,
  },
  {
    id: 'PF-2023-042',
    company: 'Pulse Tech Solutions',
    eeCont: '12.00',
    erCont: '12.00',
    wageCeiling: '₹ 15,000',
    effectiveFrom: '01-Apr-2023',
    effectiveTo: '31-Mar-2024',
    status: 'Superseded',
    statusClass: 'bg-[#F1F5F9] text-[#475569]',
    isSuperseded: true,
  }
];

const PFRulesTable = () => {
  return (
    <div className="bg-white rounded border border-[#E2E8F0] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] font-label-group text-label-group text-secondary uppercase tracking-wider">
              <th className="py-3 px-4 font-semibold whitespace-nowrap">PF Rule ID</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Company</th>
              <th className="py-3 px-4 font-semibold text-right whitespace-nowrap">Emp. Contrib %</th>
              <th className="py-3 px-4 font-semibold text-right whitespace-nowrap">Empr. Contrib %</th>
              <th className="py-3 px-4 font-semibold text-right whitespace-nowrap">Wage Ceiling (₹)</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Effective From</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Effective To</th>
              <th className="py-3 px-4 font-semibold whitespace-nowrap">Status</th>
              <th className="py-3 px-4 font-semibold text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface divide-y divide-[#E2E8F0]">
            {pfRulesData.map((rule) => (
              <tr key={rule.id} className="hover:bg-[#F1F5F9] transition-colors h-12">
                <td className={`py-2 px-4 font-medium ${rule.isSuperseded ? 'text-outline' : ''}`}>{rule.id}</td>
                <td className={`py-2 px-4 ${rule.isSuperseded ? 'text-outline' : ''}`}>{rule.company}</td>
                <td className={`py-2 px-4 text-right ${rule.isSuperseded ? 'text-outline' : ''}`}>{rule.eeCont}</td>
                <td className={`py-2 px-4 text-right ${rule.isSuperseded ? 'text-outline' : ''}`}>{rule.erCont}</td>
                <td className={`py-2 px-4 text-right ${rule.isSuperseded ? 'text-outline' : ''}`}>{rule.wageCeiling}</td>
                <td className={`py-2 px-4 ${rule.isSuperseded ? 'text-outline' : ''}`}>{rule.effectiveFrom}</td>
                <td className={`py-2 px-4 ${rule.isSuperseded || rule.effectiveTo === '--' ? 'text-outline' : ''}`}>{rule.effectiveTo}</td>
                <td className="py-2 px-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${rule.statusClass}`}>
                    {rule.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="text-outline hover:text-primary transition-colors">
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

export default PFRulesTable;
