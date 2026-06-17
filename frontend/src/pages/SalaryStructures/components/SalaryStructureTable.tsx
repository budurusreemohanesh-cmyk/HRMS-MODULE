interface SalaryStructure {
  id: string;
  name: string;
  description: string;
  componentCount: number;
  gradeRef: string;
  status: 'Active' | 'Inactive';
}

const structureData: SalaryStructure[] = [
  { id: '1', name: 'Executive Structure Level 1', description: 'Standard structure for entry-level executives', componentCount: 5, gradeRef: 'Executive (E1)', status: 'Active' },
  { id: '2', name: 'Management Structure Tier 1', description: 'Compensation for mid-level managers', componentCount: 7, gradeRef: 'Manager (M1)', status: 'Active' },
  { id: '3', name: 'Senior Executive Structure', description: 'Standard structure for senior executives', componentCount: 6, gradeRef: 'Senior Executive (E2)', status: 'Inactive' },
];

const SalaryStructureTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant h-12">
              <th className="px-lg font-label-group text-label-group text-on-surface-variant">STRUCTURE NAME</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">ASSOCIATED GRADE</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">COMPONENTS</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">DESCRIPTION</th>
              <th className="px-md font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {structureData.map((structure, index) => (
              <tr key={structure.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                <td className="px-lg font-medium text-on-background">{structure.name}</td>
                <td className="px-md text-on-surface-variant">{structure.gradeRef}</td>
                <td className="px-md text-on-surface-variant">{structure.componentCount} active</td>
                <td className="px-md text-on-surface-variant truncate max-w-[200px]" title={structure.description}>{structure.description}</td>
                <td className="px-md">
                  <span className={`inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase ${structure.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-outline-variant/30 text-on-surface-variant'}`}>
                    {structure.status}
                  </span>
                </td>
                <td className="px-lg text-right text-on-surface-variant">
                  <div className="flex justify-end space-x-md">
                    <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                    {structure.status === 'Active' ? (
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
        <span className="text-caption text-on-surface-variant">Showing 1 to {structureData.length} of {structureData.length} entries</span>
        <div className="flex items-center space-x-xs">
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-on-primary text-[13px] font-bold">1</button>
          <button className="p-xs rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default SalaryStructureTable;
