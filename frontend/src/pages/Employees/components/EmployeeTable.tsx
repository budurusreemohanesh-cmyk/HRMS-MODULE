import { Link } from 'react-router-dom';

type EmployeeStatus = 'active' | 'inactive' | 'suspended' | 'left';

interface Employee {
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
  initialsBg?: string;
  initialsColor?: string;
  department: string;
  designation: string;
  grade: string;
  status: EmployeeStatus;
  dateOfJoining: string;
}

const employeesData: Employee[] = [
  {
    id: 'EMP-0842',
    name: 'Arjun Verma',
    initials: 'AV',
    initialsBg: 'bg-primary-fixed',
    initialsColor: 'text-primary',
    department: 'Engineering',
    designation: 'Senior Lead',
    grade: 'G7',
    status: 'active',
    dateOfJoining: '12 May 2019'
  },
  {
    id: 'EMP-1029',
    name: 'Priya Sharma',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEM643-w7_AOonNUYOG7v01tlklAT4JtHf-RgszmoPXAgeTztNZaqEoguYtVDeZVmrnyI3QoOWfggyEwz-bFaoGk_K0O53E5Ds8UQj6BKg6pbEfiuMovPeWWNBxeWmiS7AtoTlbj9yCxtkfYx4j4MLLeDd8vYsT5nQvlyPG2Tv4RYPOcbT6viigMXQvFjltglTClHc68eNItA8zUnFMTtT-E47g5lpBe40TRBhwKRJwkEIInXKuKFEJliYPKaSlyOUFWbrBvpmEmg',
    department: 'Human Resources',
    designation: 'HR Manager',
    grade: 'M2',
    status: 'active',
    dateOfJoining: '20 Jan 2021'
  },
  {
    id: 'EMP-1156',
    name: 'Rohan Kapoor',
    initials: 'RK',
    initialsBg: 'bg-secondary-fixed',
    initialsColor: 'text-secondary',
    department: 'Product Management',
    designation: 'Product Analyst',
    grade: 'G3',
    status: 'suspended',
    dateOfJoining: '05 Mar 2022'
  },
  {
    id: 'EMP-0921',
    name: 'Sonia Malhotra',
    initials: 'SM',
    initialsBg: 'bg-tertiary-fixed',
    initialsColor: 'text-tertiary',
    department: 'Operations',
    designation: 'Ops Lead',
    grade: 'G5',
    status: 'inactive',
    dateOfJoining: '15 Aug 2020'
  },
  {
    id: 'EMP-0765',
    name: 'Vikram Singh',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClZfMcECliQE9ShNM6aItu_M88JJPR2uZNrNqMQPQHcP41ScYRIqZlJakVVywg1JF9RNZ0XgUXqXpxPJTyttq81ZQi8_06yV7JU3DmNMGVCsg_PU1zDvwKeIpYol2KP8rtxaHvNuaSrjMKp99OFctXx4XnwGPkay9QMwx_EhQOb8vDwynRd9PUQfbfnAdL674ncgpKMm3fSzbe5EX3YA2cl3e8LFAVrw1vnWp6j-118cP6V1XEDiYGahTVHiMpsMbA2iX50SXbWu8',
    department: 'Marketing',
    designation: 'Social Media Mgr',
    grade: 'G4',
    status: 'left',
    dateOfJoining: '10 Nov 2018'
  }
];

const getStatusClasses = (status: EmployeeStatus) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'inactive':
      return 'bg-slate-100 text-slate-600';
    case 'suspended':
      return 'bg-amber-100 text-amber-800';
    case 'left':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-slate-100 text-slate-600';
  }
};

const EmployeeTable = () => {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm" id="results-container">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">EMPLOYEE NUMBER</th>
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">EMPLOYEE NAME</th>
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">DEPARTMENT</th>
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">DESIGNATION</th>
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">GRADE</th>
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">STATUS</th>
              <th className="px-md py-4 text-left font-label-group text-label-group text-on-surface-variant">DATE OF JOINING</th>
              <th className="px-md py-4 text-center font-label-group text-label-group text-on-surface-variant">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {employeesData.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50 transition-colors h-[52px]">
                <td className="px-md font-medium text-body-md">{emp.id}</td>
                <td className="px-md">
                  <div className="flex items-center gap-sm">
                    {emp.avatar ? (
                      <img className="w-7 h-7 rounded-full object-cover" src={emp.avatar} alt={emp.name} />
                    ) : (
                      <div className={`w-7 h-7 rounded-full ${emp.initialsBg} ${emp.initialsColor} flex items-center justify-center text-[10px] font-bold`}>
                        {emp.initials}
                      </div>
                    )}
                    <span className="text-body-md font-medium">{emp.name}</span>
                  </div>
                </td>
                <td className="px-md text-body-md text-on-surface-variant">{emp.department}</td>
                <td className="px-md text-body-md text-on-surface-variant">{emp.designation}</td>
                <td className="px-md text-body-md text-on-surface-variant">{emp.grade}</td>
                <td className="px-md">
                  <span className={`px-2 py-0.5 rounded-sm text-[11px] font-semibold uppercase tracking-wider inline-flex items-center ${getStatusClasses(emp.status)}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-md text-body-md text-on-surface-variant">{emp.dateOfJoining}</td>
                <td className="px-md text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Link to={`/employees/${emp.id}`} className="p-1 hover:bg-surface-container-high rounded text-primary transition-colors" title="View"><span className="material-symbols-outlined text-[20px]">visibility</span></Link>
                    <button className="p-1 hover:bg-surface-container-high rounded text-secondary transition-colors" title="Edit"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-lg py-4 border-t border-outline-variant flex items-center justify-between bg-surface-container-lowest">
        <span className="text-caption text-on-surface-variant">Showing <span className="font-bold">1-20</span> of <span className="font-bold">250</span> entries</span>
        <div className="flex items-center gap-xs">
          <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-caption font-bold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-low text-caption font-medium border border-outline-variant">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-low text-caption font-medium border border-outline-variant">3</button>
          <span className="px-1 text-on-surface-variant">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-low text-caption font-medium border border-outline-variant">13</button>
          <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
