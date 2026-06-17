import { useState } from 'react';

export const EmployeeProfileCard = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditModalOpen(false);
    setToastMessage("Employee details updated successfully!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="col-span-12 lg:col-span-3 space-y-lg sticky top-24">
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-surface border-l-4 border-primary shadow-lg p-sm rounded z-[100] text-on-surface font-body-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
          {toastMessage}
        </div>
      )}

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-display text-display mb-md">
          AS
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Arjun Singh</h2>
        <p className="font-mono text-primary text-body-md tracking-wider mb-sm">EMP-0842</p>
        <span className="inline-flex items-center px-lg py-xs rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-bold border border-emerald-100 mb-lg">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span>
          Active Status
        </span>
        <div className="w-full space-y-md border-t border-outline-variant pt-lg text-left">
          <div className="flex justify-between">
            <span className="text-on-surface-variant text-caption">Department</span>
            <span className="text-on-surface font-medium">Engineering</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant text-caption">Designation</span>
            <span className="text-on-surface font-medium">Senior Lead</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant text-caption">Grade</span>
            <span className="text-on-surface font-medium">G7</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant text-caption">Joined Date</span>
            <span className="text-on-surface font-medium">12 May 2019</span>
          </div>
        </div>
        <button 
          onClick={() => setIsEditModalOpen(true)}
          className="w-full mt-xl px-lg py-2.5 border border-primary text-primary font-medium rounded-lg hover:bg-primary-container hover:text-on-primary transition-all active:opacity-90"
        >
          Edit Employee
        </button>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
        <h3 className="font-label-group text-label-group text-on-surface-variant mb-md uppercase">Contact Quick View</h3>
        <div className="space-y-md">
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-outline">mail</span>
            <span className="text-body-md">arjun.s@enterprise.com</span>
          </div>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-outline">call</span>
            <span className="text-body-md">+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Edit Employee Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="font-headline-md text-on-surface font-bold">Edit Employee Details</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-lg overflow-y-auto flex-1">
              <form id="edit-employee-form" onSubmit={handleSave} className="space-y-md">
                <div>
                  <label className="block text-caption font-bold text-on-surface-variant mb-1">Full Name</label>
                  <input type="text" defaultValue="Arjun Singh" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-caption font-bold text-on-surface-variant mb-1">Department</label>
                  <select defaultValue="Engineering" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-on-surface focus:outline-none focus:border-primary">
                    <option value="Engineering">Engineering</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-caption font-bold text-on-surface-variant mb-1">Designation</label>
                  <input type="text" defaultValue="Senior Lead" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-caption font-bold text-on-surface-variant mb-1">Email</label>
                  <input type="email" defaultValue="arjun.s@enterprise.com" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-caption font-bold text-on-surface-variant mb-1">Phone</label>
                  <input type="text" defaultValue="+91 98765 43210" className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 text-on-surface focus:outline-none focus:border-primary" />
                </div>
              </form>
            </div>
            <div className="p-lg border-t border-outline-variant flex justify-end gap-md bg-surface-container-lowest">
              <button onClick={() => setIsEditModalOpen(false)} className="px-lg py-2 rounded-lg font-bold text-on-surface-variant hover:bg-surface-container">Cancel</button>
              <button form="edit-employee-form" type="submit" className="px-lg py-2 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
