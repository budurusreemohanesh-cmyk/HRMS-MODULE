import React, { useState } from 'react';

const initialIntegrations = [
  {
    id: 'google',
    name: 'Google Workspace',
    description: 'Sync employee directories and enable Google Single Sign-On (SSO).',
    icon: 'mail',
    status: 'Connected',
    color: 'text-blue-500'
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Send notifications for leave approvals and announcements.',
    icon: 'tag',
    status: 'Not Connected',
    color: 'text-purple-500'
  },
  {
    id: 'azure',
    name: 'Microsoft Azure AD',
    description: 'Enterprise SSO and user provisioning via SCIM.',
    icon: 'window',
    status: 'Not Connected',
    color: 'text-blue-600'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'Automatically generate meeting links for interviews.',
    icon: 'videocam',
    status: 'Connected',
    color: 'text-blue-400'
  }
];

const IntegrationsSettings = () => {
  const [integrations, setIntegrations] = useState(initialIntegrations);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleToggle = (id: string, currentStatus: string, name: string) => {
    const isConnecting = currentStatus === 'Not Connected';
    setIntegrations(prev => prev.map(int => 
      int.id === id 
        ? { ...int, status: isConnecting ? 'Connected' : 'Not Connected' }
        : int
    ));
    
    setToastMessage(isConnecting ? `Successfully connected to ${name}!` : `Disconnected from ${name}.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <>
      <div className="mb-lg">
        <h3 className="font-headline-md text-headline-md text-on-surface">Integrations</h3>
        <p className="text-caption text-on-surface-variant mt-xs">Connect your HRMS with third-party tools and services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-md">
        {integrations.map((integration) => (
          <div key={integration.id} className="border border-outline-variant rounded-lg p-lg bg-surface-container-lowest flex flex-col h-full hover:border-primary/50 transition-colors">
            <div className="flex items-start gap-md mb-md">
              <div className={`w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 ${integration.color}`}>
                <span className="material-symbols-outlined text-[28px]">{integration.icon}</span>
              </div>
              <div>
                <h4 className="font-semibold text-body-lg text-on-background flex items-center gap-sm">
                  {integration.name}
                  {integration.status === 'Connected' && (
                    <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>
                  )}
                </h4>
                <p className="text-caption text-on-surface-variant mt-xs leading-relaxed">{integration.description}</p>
              </div>
            </div>
            
            <div className="mt-auto pt-md border-t border-outline-variant flex justify-between items-center">
              <span className={`text-label-group font-semibold uppercase ${integration.status === 'Connected' ? 'text-green-600' : 'text-on-surface-variant'}`}>
                {integration.status}
              </span>
              <button 
                onClick={() => handleToggle(integration.id, integration.status, integration.name)}
                className={`px-md py-sm rounded font-medium text-body-sm transition-colors cursor-pointer ${
                  integration.status === 'Connected' 
                    ? 'border border-outline text-error hover:bg-error/10' 
                    : 'bg-primary-container text-on-primary hover:bg-primary'
                }`}
              >
                {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center">
          <span className="material-symbols-outlined mr-2 text-green-400">info</span>
          {toastMessage}
        </div>
      )}
    </>
  );
};

export default IntegrationsSettings;
