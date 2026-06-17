interface Company {
  id: string;
  name: string;
  pfApplicable: boolean;
  esiApplicable: boolean;
  lwfState: string;
  ptState: string;
  status: 'Active' | 'Inactive';
}

const companiesData: Company[] = [
  { id: '1', name: 'Tata Consultancy Services Ltd', pfApplicable: true, esiApplicable: true, lwfState: 'Maharashtra', ptState: 'Maharashtra', status: 'Active' },
  { id: '2', name: 'Acme India Corp Pvt Ltd', pfApplicable: true, esiApplicable: false, lwfState: 'Karnataka', ptState: 'Karnataka', status: 'Active' },
  { id: '3', name: 'Reliance Industries Ltd', pfApplicable: true, esiApplicable: true, lwfState: 'Gujarat', ptState: 'Gujarat', status: 'Active' },
  { id: '4', name: 'HDFC Bank Services', pfApplicable: true, esiApplicable: true, lwfState: 'Delhi', ptState: 'Delhi', status: 'Inactive' },
  { id: '5', name: 'Wipro Enterprises', pfApplicable: true, esiApplicable: false, lwfState: 'Tamil Nadu', ptState: 'Tamil Nadu', status: 'Active' },
  { id: '6', name: 'Infosys BPM India', pfApplicable: true, esiApplicable: true, lwfState: 'Haryana', ptState: 'Haryana', status: 'Active' },
];

const CompanyTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">COMPANY NAME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">PF APPLICABLE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">ESI APPLICABLE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">LWF STATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">PT STATE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {companiesData.map((company, index) => (
              <tr key={company.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{company.name}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${company.pfApplicable ? 'bg-secondary-container text-primary' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {company.pfApplicable ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${company.esiApplicable ? 'bg-secondary-container text-primary' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {company.esiApplicable ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-md text-on-surface-variant">{company.lwfState}</td>
                <td className="px-md text-on-surface-variant">{company.ptState}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${company.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {company.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    {company.status === 'Active' ? (
                      <button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[18px]">block</span></button>
                    ) : (
                      <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">check_circle</span></button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-lg py-md bg-surface-container-low border-t border-outline-variant">
        <span className="text-caption text-on-surface-variant">Showing 1 to 6 of 42 entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-variant text-[13px]">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-variant text-[13px]">3</button>
          <span className="px-xs">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-variant text-[13px]">7</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
