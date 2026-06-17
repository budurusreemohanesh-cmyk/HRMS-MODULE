import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();
  const [panError, setPanError] = useState(false);

  const handlePanBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (val && !panRegex.test(val)) {
      setPanError(true);
    } else {
      setPanError(false);
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto space-y-6 pb-32 relative">
      <div className="flex items-center gap-4 mb-xl">
        <button 
          onClick={() => navigate('/employees')} 
          className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container p-1 rounded-full cursor-pointer transition-colors"
        >
          arrow_back
        </button>
        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Add Employee</h2>
      </div>

      {/* Section 1: Basic Information */}
      <section className="bg-white rounded-lg border border-outline-variant overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant bg-slate-50">
          <h3 className="font-headline-md text-[16px] text-on-surface font-bold">Basic Information</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Employee Number <span className="text-error">*</span></label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. EMP-1024" required type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Employee Name <span className="text-error">*</span></label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Legal Full Name" required type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Date of Joining <span className="text-error">*</span></label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required type="date" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Status</label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
              <option value="left">Left</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Employment Type</label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="intern">Intern</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Date of Confirmation</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" type="date" />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Notice Period in Days</label>
            <input className="w-full md:w-1/2 border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="90" type="number" />
            <p className="text-caption font-caption text-on-surface-variant mt-1">Default is 90 days as per company policy.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Organisation */}
      <section className="bg-white rounded-lg border border-outline-variant overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant bg-slate-50">
          <h3 className="font-headline-md text-[16px] text-on-surface font-bold">Organisation</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Company <span className="text-error">*</span></label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required defaultValue="">
              <option disabled value="">Select Company</option>
              <option value="pulse-india">Pulse HRMS India Pvt Ltd</option>
              <option value="pulse-global">Pulse Global Services</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Branch</label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" defaultValue="">
              <option disabled value="">Select Branch</option>
              <option value="bangalore">Bangalore (HSR)</option>
              <option value="mumbai">Mumbai (BKC)</option>
              <option value="delhi">Delhi (Gurgaon)</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Department</label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" defaultValue="">
              <option disabled value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="product">Product Management</option>
              <option value="hr">Human Resources</option>
              <option value="finance">Finance</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Designation</label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" defaultValue="">
              <option disabled value="">Select Designation</option>
              <option value="sse">Senior Software Engineer</option>
              <option value="pm">Product Manager</option>
              <option value="hba">HR Business Analyst</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Grade</label>
            <select className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" defaultValue="">
              <option disabled value="">Select Grade</option>
              <option value="g1">Grade 1 (Junior)</option>
              <option value="g2">Grade 2 (Mid)</option>
              <option value="g3">Grade 3 (Senior)</option>
              <option value="g4">Grade 4 (Exec)</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Reporting Manager</label>
            <div className="relative">
              <input className="w-full border border-outline-variant rounded py-2 pl-3 pr-10 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search by name or email" type="text" />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">person_search</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Statutory IDs */}
      <section className="bg-white rounded-lg border border-outline-variant overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant bg-slate-50">
          <h3 className="font-headline-md text-[16px] text-on-surface font-bold">Statutory IDs</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">PAN Number</label>
            <input 
              className={`w-full border ${panError ? 'border-error focus:border-error focus:ring-error' : 'border-outline-variant focus:border-primary focus:ring-primary'} rounded py-2 px-3 text-body-md font-body-md outline-none transition-all uppercase`} 
              maxLength={10} 
              placeholder="AAAAA0000A" 
              type="text"
              onBlur={handlePanBlur}
            />
            {panError && <p className="text-error text-caption font-caption mt-1">Invalid PAN format. Please check again.</p>}
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Provident Fund Account</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="PF Number" type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">UAN (Universal Account Number)</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" maxLength={12} placeholder="12 Digit UAN" type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Aadhaar Last 4 Digits</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" maxLength={4} placeholder="XXXX" type="text" />
          </div>
        </div>
      </section>

      {/* Section 4: Bank Details */}
      <section className="bg-white rounded-lg border border-outline-variant overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-outline-variant bg-slate-50">
          <h3 className="font-headline-md text-[16px] text-on-surface font-bold">Bank Details</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Bank Name</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="e.g. HDFC Bank" type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">Account Number</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Bank Account Number" type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">IFSC Code</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all uppercase" maxLength={11} placeholder="HDFC0000XXX" type="text" />
          </div>
          <div className="space-y-1">
            <label className="block font-label-group text-label-group text-on-surface-variant uppercase">MICR Code</label>
            <input className="w-full border border-outline-variant rounded py-2 px-3 text-body-md font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" maxLength={9} placeholder="9 Digit MICR" type="text" />
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 right-0 left-0 md:left-sidebar-width h-20 bg-white border-t border-outline-variant flex items-center justify-between px-xl z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button onClick={() => navigate('/employees')} className="px-6 py-2 border border-outline-variant text-on-surface font-nav-item text-nav-item rounded hover:bg-surface-container-low transition-colors">
          Cancel
        </button>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-primary text-white font-nav-item text-nav-item font-bold rounded shadow-sm hover:opacity-90 active:scale-95 transition-all">
            Save Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
