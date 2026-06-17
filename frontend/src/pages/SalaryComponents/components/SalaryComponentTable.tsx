interface SalaryComponent {
  id: string;
  name: string;
  code: string;
  type: 'Earning' | 'Deduction' | 'Reimbursement';
  calculationType: 'Flat' | 'Percentage';
  taxable: boolean;
  status: 'Active' | 'Inactive';
}

const componentData: SalaryComponent[] = [
  { id: '1', name: 'Basic Salary', code: 'BASIC', type: 'Earning', calculationType: 'Percentage', taxable: true, status: 'Active' },
  { id: '2', name: 'House Rent Allowance', code: 'HRA', type: 'Earning', calculationType: 'Percentage', taxable: true, status: 'Active' },
  { id: '3', name: 'Provident Fund', code: 'PF', type: 'Deduction', calculationType: 'Percentage', taxable: false, status: 'Active' },
  { id: '4', name: 'Special Allowance', code: 'SA', type: 'Earning', calculationType: 'Flat', taxable: true, status: 'Active' },
  { id: '5', name: 'Internet Allowance', code: 'INT_REIMB', type: 'Reimbursement', calculationType: 'Flat', taxable: false, status: 'Active' },
];

const SalaryComponentTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">COMPONENT NAME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">CODE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">TYPE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">CALCULATION</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">TAXABLE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {componentData.map((component, index) => (
              <tr key={component.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{component.name}</td>
                <td className="px-md text-on-surface-variant">{component.code}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${
                    component.type === 'Earning' ? 'bg-green-100 text-green-700' : 
                    component.type === 'Deduction' ? 'bg-red-100 text-red-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {component.type}
                  </span>
                </td>
                <td className="px-md text-on-surface-variant">{component.calculationType}</td>
                <td className="px-md text-on-surface-variant">{component.taxable ? 'Yes' : 'No'}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${component.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {component.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    {component.status === 'Active' ? (
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

      <div className="flex items-center justify-between px-lg py-md bg-surface-container-low border-t border-outline-variant">
        <span className="text-caption text-on-surface-variant">Showing 1 to {componentData.length} of {componentData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default SalaryComponentTable;
