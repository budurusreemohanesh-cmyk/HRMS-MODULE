import React, { useState } from 'react';
import GeneralSettings from './components/GeneralSettings';
import RolesSettings from './components/RolesSettings';
import SecuritySettings from './components/SecuritySettings';
import IntegrationsSettings from './components/IntegrationsSettings';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'roles' | 'security' | 'integrations'>('general');

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'roles', label: 'Roles & Permissions' },
    { id: 'security', label: 'Security' },
    { id: 'integrations', label: 'Integrations' },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'roles':
        return <RolesSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'integrations':
        return <IntegrationsSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">System Settings</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Configure organization-wide defaults, roles, and integrations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-lg flex-1">
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 space-y-xs shrink-0">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-2 font-nav-item text-nav-item rounded-lg border-l-4 transition-colors ${
                activeTab === tab.id 
                  ? 'bg-surface-container-high text-primary border-primary' 
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg md:p-xl shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
