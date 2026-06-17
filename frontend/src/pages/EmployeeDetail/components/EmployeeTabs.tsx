import { useState, useRef } from 'react';

type Tab = 'overview' | 'statutory' | 'bank' | 'documents' | 'history' | 'leave';

const initialDocuments = [
  { name: 'Offer Letter', date: '10 May 2019', status: 'VERIFIED' },
  { name: 'Aadhaar Card', date: '12 May 2019', status: 'VERIFIED' },
  { name: 'PAN Card', date: '12 May 2019', status: 'VERIFIED' },
];

export const EmployeeTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [documents, setDocuments] = useState(initialDocuments);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const newDoc = {
        name: file.name,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'PENDING'
      };
      setDocuments([newDoc, ...documents]);
      setToastMessage(`"${file.name}" uploaded successfully!`);
      setTimeout(() => setToastMessage(null), 3000);
      
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="col-span-12 lg:col-span-9 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col min-h-[600px]">
      {/* Tab Headers */}
      <div className="flex border-b border-outline-variant overflow-x-auto custom-scrollbar no-scrollbar">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'statutory', label: 'Statutory IDs' },
          { id: 'bank', label: 'Bank Details' },
          { id: 'documents', label: 'Documents' },
          { id: 'history', label: 'History' },
          { id: 'leave', label: 'Leave Balance' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-lg py-lg text-nav-item font-nav-item whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'text-primary border-b-2 border-primary font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
            onClick={() => setActiveTab(tab.id as Tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="p-xl flex-1">
        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div className="space-y-lg">
              <div>
                <label className="text-on-surface-variant font-medium text-[13px]">Branch</label>
                <p className="text-body-lg font-medium mt-xs">Bangalore</p>
              </div>
              <div>
                <label className="text-on-surface-variant font-medium text-[13px]">Reporting Manager</label>
                <div className="flex items-center gap-md mt-xs">
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[11px] font-bold">SS</div>
                  <p className="text-body-lg font-medium">Siddharth Sharma</p>
                </div>
              </div>
              <div>
                <label className="text-on-surface-variant font-medium text-[13px]">Employment Type</label>
                <p className="text-body-lg font-medium mt-xs">Full-time</p>
              </div>
            </div>
            <div className="space-y-lg">
              <div>
                <label className="text-on-surface-variant font-medium text-[13px]">Joined Date</label>
                <p className="text-body-lg font-medium mt-xs">12 May 2019</p>
              </div>
              <div>
                <label className="text-on-surface-variant font-medium text-[13px]">Confirmation Date</label>
                <p className="text-body-lg font-medium mt-xs">12 Nov 2019</p>
              </div>
              <div>
                <label className="text-on-surface-variant font-medium text-[13px]">Notice Period</label>
                <p className="text-body-lg font-medium mt-xs">90 days</p>
              </div>
            </div>
          </div>
        )}

        {/* Statutory IDs */}
        {activeTab === 'statutory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div className="bg-surface p-lg rounded-lg border border-outline-variant">
              <label className="text-on-surface-variant text-caption uppercase tracking-wider font-bold">PAN Number</label>
              <p className="text-headline-md font-mono mt-sm">ABCDE1234F</p>
            </div>
            <div className="bg-surface p-lg rounded-lg border border-outline-variant">
              <label className="text-on-surface-variant text-caption uppercase tracking-wider font-bold">UAN</label>
              <p className="text-headline-md font-mono mt-sm">100123456789</p>
            </div>
            <div className="bg-surface p-lg rounded-lg border border-outline-variant">
              <label className="text-on-surface-variant text-caption uppercase tracking-wider font-bold">Provident Fund Account</label>
              <p className="text-headline-md font-mono mt-sm">BG/BNG/12345/678</p>
            </div>
            <div className="bg-surface p-lg rounded-lg border border-outline-variant">
              <label className="text-on-surface-variant text-caption uppercase tracking-wider font-bold">Aadhaar Number</label>
              <p className="text-headline-md font-mono mt-sm">XXXX XXXX 5678</p>
            </div>
          </div>
        )}

        {/* Bank Details */}
        {activeTab === 'bank' && (
          <div className="max-w-[576px] space-y-lg">
            <div className="flex items-center justify-between py-md border-b border-outline-variant">
              <span className="text-on-surface-variant">Bank Name</span>
              <span className="text-body-lg font-bold">HDFC Bank</span>
            </div>
            <div className="flex items-center justify-between py-md border-b border-outline-variant">
              <span className="text-on-surface-variant">Account Number</span>
              <span className="text-body-lg font-mono">XXXXXXX1234</span>
            </div>
            <div className="flex items-center justify-between py-md border-b border-outline-variant">
              <span className="text-on-surface-variant">IFSC Code</span>
              <span className="text-body-lg font-mono">HDFC0001234</span>
            </div>
            <div className="flex items-center justify-between py-md border-b border-outline-variant">
              <span className="text-on-surface-variant">MICR Code</span>
              <span className="text-body-lg font-mono">560240001</span>
            </div>
          </div>
        )}

        {/* Documents */}
        {activeTab === 'documents' && (
          <>
            <div className="flex justify-between items-center mb-lg">
              <h4 className="font-headline-md">Employee Documents</h4>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-xs px-md py-2 bg-primary text-on-primary rounded-lg font-medium text-body-md hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-[20px]">upload</span>
                Upload Document
              </button>
            </div>
            
            {toastMessage && (
              <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg flex items-center gap-2 animate-in fade-in">
                <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                <span className="text-body-sm font-medium">{toastMessage}</span>
              </div>
            )}

            <div className="overflow-hidden border border-outline-variant rounded-lg">
              <table className="w-full text-left">
                <thead className="bg-surface-container text-on-surface-variant font-label-group text-label-group uppercase">
                  <tr>
                    <th className="px-lg py-md">Document Type</th>
                    <th className="px-lg py-md">Upload Date</th>
                    <th className="px-lg py-md text-right">Status</th>
                    <th className="px-lg py-md text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {documents.map((doc, idx) => (
                    <tr key={idx} className="hover:bg-surface transition-colors">
                      <td className="px-lg py-lg font-medium">{doc.name}</td>
                      <td className="px-lg py-lg text-on-surface-variant">{doc.date}</td>
                      <td className="px-lg py-lg text-right">
                        <span className={`px-md py-1 text-[11px] rounded font-bold ${doc.status === 'VERIFIED' ? 'bg-emerald-50 text-emerald-700' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-lg py-lg text-right">
                        <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">visibility</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* History */}
        {activeTab === 'history' && (
          <div className="relative pl-8 space-y-xl before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
            {/* Entry 1 */}
            <div className="relative">
              <div className="absolute -left-[28px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
              <div className="flex flex-col gap-sm">
                <h5 className="font-headline-md text-primary">Promotion: Lead -&gt; Senior Lead</h5>
                <p className="text-on-surface-variant text-caption">Effective from 01 Jan 2023</p>
                <div className="mt-md bg-surface p-md rounded border border-outline-variant">
                  <table className="w-full text-caption">
                    <thead className="text-on-surface-variant">
                      <tr>
                        <th className="text-left font-bold pb-2">Property Changed</th>
                        <th className="text-left font-bold pb-2">Old Value -&gt; New Value</th>
                        <th className="text-right font-bold pb-2">Changed By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Designation</td>
                        <td className="font-medium">Lead Engineering -&gt; Senior Lead</td>
                        <td className="text-right">HR Admin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Entry 2 */}
            <div className="relative">
              <div className="absolute -left-[28px] top-1.5 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-white"></div>
              <div className="flex flex-col gap-sm">
                <h5 className="font-headline-md text-on-surface">Transfer: Mumbai -&gt; Bangalore</h5>
                <p className="text-on-surface-variant text-caption">Effective from 15 Jun 2021</p>
                <div className="mt-md bg-surface p-md rounded border border-outline-variant">
                  <table className="w-full text-caption">
                    <thead className="text-on-surface-variant">
                      <tr>
                        <th className="text-left font-bold pb-2">Property Changed</th>
                        <th className="text-left font-bold pb-2">Old Value -&gt; New Value</th>
                        <th className="text-right font-bold pb-2">Changed By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Branch</td>
                        <td className="font-medium">Mumbai -&gt; Bangalore</td>
                        <td className="text-right">System Admin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leave Balance */}
        {activeTab === 'leave' && (
          <>
            <div className="overflow-hidden border border-outline-variant rounded-lg">
              <table className="w-full text-left">
                <thead className="bg-surface-container text-on-surface-variant font-label-group text-label-group uppercase">
                  <tr>
                    <th className="px-lg py-md">Leave Type</th>
                    <th className="px-lg py-md text-center">Allocated</th>
                    <th className="px-lg py-md text-center">Used</th>
                    <th className="px-lg py-md text-center">Pending</th>
                    <th className="px-lg py-md text-center">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-lg py-lg font-medium">Privilege Leave</td>
                    <td className="px-lg py-lg text-center">21.0</td>
                    <td className="px-lg py-lg text-center text-error">4.5</td>
                    <td className="px-lg py-lg text-center">1.0</td>
                    <td className="px-lg py-lg text-center font-bold text-primary">15.5</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-lg py-lg font-medium">Sick Leave</td>
                    <td className="px-lg py-lg text-center">12.0</td>
                    <td className="px-lg py-lg text-center text-error">2.0</td>
                    <td className="px-lg py-lg text-center">0.0</td>
                    <td className="px-lg py-lg text-center font-bold text-primary">10.0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-lg py-lg font-medium">Casual Leave</td>
                    <td className="px-lg py-lg text-center">7.0</td>
                    <td className="px-lg py-lg text-center text-error">1.5</td>
                    <td className="px-lg py-lg text-center">0.0</td>
                    <td className="px-lg py-lg text-center font-bold text-primary">5.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-lg text-caption text-on-surface-variant italic">Note: Accruals are calculated monthly on the 1st of every month.</p>
          </>
        )}
      </div>
    </div>
  );
};
