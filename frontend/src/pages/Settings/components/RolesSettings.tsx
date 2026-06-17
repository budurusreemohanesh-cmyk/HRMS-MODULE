import React, { useState } from 'react';
import RoleDrawer from './RoleDrawer';

const initialRoles = [
  { id: 1, name: 'Super Admin', description: 'Full access to all modules and system settings.', users: 3, isSystem: true },
  { id: 2, name: 'HR Manager', description: 'Access to employee management, payroll runs, and reports.', users: 5, isSystem: true },
  { id: 3, name: 'Finance Admin', description: 'Access to payroll, statutory rules, and financial reports.', users: 2, isSystem: true },
  { id: 4, name: 'Employee', description: 'Default role. Access to own profile, payslips, and leave requests.', users: 154, isSystem: true },
  { id: 5, name: 'Team Lead', description: 'Access to team attendance, leave approvals, and appraisals.', users: 18, isSystem: false },
];

const RolesSettings = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<any>(null);

  const handleCreate = () => {
    setEditingRole(null);
    setIsDrawerOpen(true);
  };

  const handleEdit = (role: any) => {
    setEditingRole(role);
    setIsDrawerOpen(true);
  };

  const handleDelete = (roleId: number) => {
    if (confirm('Are you sure you want to delete this role? This cannot be undone.')) {
      setRoles(prev => prev.filter(r => r.id !== roleId));
    }
  };

  const handleSaveRole = (savedRole: any) => {
    setRoles(prev => {
      const exists = prev.find(r => r.id === savedRole.id);
      if (exists) {
        return prev.map(r => r.id === savedRole.id ? savedRole : r);
      }
      return [...prev, savedRole];
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-lg">
        <div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Roles & Permissions</h3>
          <p className="text-caption text-on-surface-variant mt-xs">Manage access control and define custom roles.</p>
        </div>
        <button 
          onClick={handleCreate}
          className="inline-flex items-center px-lg py-sm bg-primary-container text-on-primary font-body-md rounded hover:bg-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined mr-sm text-[20px]">add</span>
          Create Role
        </button>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant h-12">
                <th className="px-lg font-label-group text-label-group text-on-surface-variant">ROLE NAME</th>
                <th className="px-md font-label-group text-label-group text-on-surface-variant">DESCRIPTION</th>
                <th className="px-md font-label-group text-label-group text-on-surface-variant">USERS</th>
                <th className="px-lg font-label-group text-label-group text-on-surface-variant text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {roles.map((role, index) => (
                <tr key={role.id} className={`h-12 border-b border-outline-variant hover:bg-surface-container transition-colors ${index % 2 === 1 ? 'bg-surface' : ''}`}>
                  <td className="px-lg">
                    <div className="flex items-center gap-xs">
                      <span className="font-medium text-on-background">{role.name}</span>
                      {role.isSystem && (
                        <span className="inline-flex items-center px-xs py-[2px] font-semibold text-[10px] rounded uppercase bg-primary-container/20 text-primary">System</span>
                      )}
                    </div>
                  </td>
                  <td className="px-md text-on-surface-variant max-w-[300px] truncate">{role.description}</td>
                  <td className="px-md font-medium text-on-surface">{role.users}</td>
                  <td className="px-lg text-right text-on-surface-variant">
                    <div className="flex justify-end space-x-md">
                      <button 
                        onClick={() => handleEdit(role)}
                        className="hover:text-primary transition-colors flex items-center cursor-pointer" 
                        title="Edit Permissions"
                      >
                        <span className="material-symbols-outlined text-[18px]">settings</span>
                      </button>
                      {!role.isSystem && (
                        <button 
                          onClick={() => handleDelete(role.id)}
                          className="hover:text-error transition-colors flex items-center cursor-pointer" 
                          title="Delete Role"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <RoleDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        roleToEdit={editingRole}
        onSave={handleSaveRole}
      />
    </>
  );
};

export default RolesSettings;
