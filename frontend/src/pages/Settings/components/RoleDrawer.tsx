import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface RoleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  roleToEdit?: any;
  onSave: (role: any) => void;
}

const MODULES = [
  { id: 'employees', name: 'Employees Master' },
  { id: 'attendance', name: 'Attendance & Leave' },
  { id: 'payroll', name: 'Payroll Processing' },
  { id: 'statutory', name: 'Statutory & Tax' },
  { id: 'settings', name: 'System Settings' },
];

const PERMISSIONS = [
  { id: 'read', label: 'Read' },
  { id: 'write', label: 'Write' },
  { id: 'create', label: 'Create' },
  { id: 'delete', label: 'Delete' },
];

const RoleDrawer = ({ isOpen, onClose, roleToEdit, onSave }: RoleDrawerProps) => {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');
  const [permissions, setPermissions] = useState<Record<string, Record<string, boolean>>>({});

  useEffect(() => {
    if (isOpen) {
      if (roleToEdit) {
        setRoleName(roleToEdit.name);
        setDescription(roleToEdit.description || '');
        // Mock loading existing permissions
        setPermissions({}); 
      } else {
        setRoleName('');
        setDescription('');
        setPermissions({});
      }
    }
  }, [isOpen, roleToEdit]);

  if (!isOpen) return null;

  const handlePermissionChange = (moduleId: string, permId: string, checked: boolean) => {
    setPermissions(prev => ({
      ...prev,
      [moduleId]: {
        ...(prev[moduleId] || {}),
        [permId]: checked
      }
    }));
  };

  const handleSave = () => {
    if (!roleName.trim()) return;
    onSave({
      id: roleToEdit ? roleToEdit.id : Date.now(),
      name: roleName,
      description,
      users: roleToEdit ? roleToEdit.users : 0,
      isSystem: roleToEdit ? roleToEdit.isSystem : false,
      permissions
    });
    onClose();
  };

  const drawerContent = (
    <div className="fixed inset-0 z-[9999] flex justify-end" style={{ pointerEvents: 'auto' }}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative w-[600px] h-full bg-[#f8f9ff] flex flex-col shadow-2xl border-l border-[#c7c4d8]">
        <div className="p-6 border-b border-[#c7c4d8] bg-[#ffffff] flex justify-between items-center shrink-0">
          <h2 className="text-[20px] font-bold text-[#0d1c2d]">
            {roleToEdit ? 'Edit Role Permissions' : 'Create New Role'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full text-[#464555]">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-[#ffffff]">
          <div className="space-y-6">
            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#0d1c2d]">Role Name *</label>
              <input 
                type="text" 
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                disabled={roleToEdit?.isSystem}
                placeholder="e.g. Compliance Officer" 
                className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px] disabled:opacity-50" 
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#0d1c2d]">Description</label>
              <textarea 
                rows={2} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={roleToEdit?.isSystem}
                placeholder="Describe what users with this role can do..."
                className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px] disabled:opacity-50"
              ></textarea>
            </div>

            <div className="pt-4">
              <h3 className="text-[15px] font-semibold text-[#0d1c2d] mb-4">Permission Matrix</h3>
              <div className="border border-[#c7c4d8] rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#f8f9ff] border-b border-[#c7c4d8]">
                    <tr>
                      <th className="px-4 py-3 text-[12px] font-semibold text-[#464555] uppercase">Module</th>
                      {PERMISSIONS.map(p => (
                        <th key={p.id} className="px-4 py-3 text-[12px] font-semibold text-[#464555] uppercase text-center">{p.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MODULES.map((module, idx) => (
                      <tr key={module.id} className={idx !== MODULES.length - 1 ? 'border-b border-[#e0e3e5]' : ''}>
                        <td className="px-4 py-3 text-[14px] font-medium text-[#0d1c2d]">{module.name}</td>
                        {PERMISSIONS.map(p => (
                          <td key={p.id} className="px-4 py-3 text-center">
                            <input 
                              type="checkbox" 
                              checked={!!permissions[module.id]?.[p.id]}
                              onChange={(e) => handlePermissionChange(module.id, p.id, e.target.checked)}
                              className="w-4 h-4 rounded border-[#c7c4d8] text-[#3525cd] focus:ring-[#3525cd] cursor-pointer"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[#c7c4d8] bg-[#ffffff] flex justify-end gap-4 shrink-0">
          <button onClick={onClose} className="px-6 py-2 border border-[#c7c4d8] rounded font-medium text-[#0d1c2d]">Cancel</button>
          <button 
            onClick={handleSave} 
            disabled={!roleName.trim()}
            className="px-6 py-2 bg-[#3525cd] text-white rounded font-medium disabled:opacity-50"
          >
            {roleToEdit ? 'Save Changes' : 'Create Role'}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
};

export default RoleDrawer;
