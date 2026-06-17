import { Link } from 'react-router-dom';

const CompanyDetail = () => {
  return (
    <div className="flex flex-col h-full max-w-[1024px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-md mb-xl">
        <Link to="/companies" className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </Link>
        <div>
          <div className="flex items-center gap-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Pulse Tech Solutions</h2>
            <span className="bg-[#E6F4EA] text-[#137333] px-2 py-0.5 rounded text-[12px] font-medium border border-[#CEEAD6]">Active</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">CIN: U72900MH2020PTC345678</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg flex-1">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-lg">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Registration Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-md gap-x-lg">
              <div>
                <p className="font-caption text-caption text-on-surface-variant mb-1">Company Type</p>
                <p className="font-body-md text-body-md text-on-surface">Private Limited</p>
              </div>
              <div>
                <p className="font-caption text-caption text-on-surface-variant mb-1">Date of Incorporation</p>
                <p className="font-body-md text-body-md text-on-surface">15 May 2020</p>
              </div>
              <div>
                <p className="font-caption text-caption text-on-surface-variant mb-1">PAN</p>
                <p className="font-body-md text-body-md text-on-surface">ABCDE1234F</p>
              </div>
              <div>
                <p className="font-caption text-caption text-on-surface-variant mb-1">TAN</p>
                <p className="font-body-md text-body-md text-on-surface">MUMP12345E</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Statutory Registrations</h3>
            <div className="space-y-md">
              <div className="flex items-start justify-between pb-md border-b border-outline-variant/50">
                <div>
                  <p className="font-nav-item text-nav-item text-on-surface">EPF Registration</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">MH/BAN/1234567/000</p>
                </div>
                <button className="text-primary hover:bg-surface-container px-3 py-1.5 rounded transition-colors text-sm font-medium">Edit</button>
              </div>
              <div className="flex items-start justify-between pb-md border-b border-outline-variant/50">
                <div>
                  <p className="font-nav-item text-nav-item text-on-surface">ESI Registration</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">31000123450001001</p>
                </div>
                <button className="text-primary hover:bg-surface-container px-3 py-1.5 rounded transition-colors text-sm font-medium">Edit</button>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-nav-item text-nav-item text-on-surface">PT Registration</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">27123456789P</p>
                </div>
                <button className="text-primary hover:bg-surface-container px-3 py-1.5 rounded transition-colors text-sm font-medium">Edit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-lg">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Quick Stats</h3>
            <div className="bg-surface-container px-4 py-3 rounded-lg mb-xs flex justify-between items-center">
              <span className="font-body-md text-body-md text-on-surface-variant">Total Employees</span>
              <span className="font-headline-md text-headline-md text-on-surface">142</span>
            </div>
            <div className="bg-surface-container px-4 py-3 rounded-lg flex justify-between items-center">
              <span className="font-body-md text-body-md text-on-surface-variant">Active Locations</span>
              <span className="font-headline-md text-headline-md text-on-surface">3</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Registered Office</h3>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              101, Tech Park Avenue,<br/>
              Andheri East,<br/>
              Mumbai, Maharashtra - 400093<br/>
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
