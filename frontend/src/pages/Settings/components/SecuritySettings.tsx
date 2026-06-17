import React, { useState } from 'react';

const SecuritySettings = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <div className="mb-lg">
        <h3 className="font-headline-md text-headline-md text-on-surface">Security Settings</h3>
        <p className="text-caption text-on-surface-variant mt-xs">Configure authentication and security policies.</p>
      </div>
      
      <div className="space-y-xl max-w-[672px]">
        
        {/* Password Policy */}
        <div className="space-y-md">
          <h4 className="font-semibold text-body-lg text-on-surface border-b border-outline-variant pb-xs">Password Policy</h4>
          
          <div className="grid grid-cols-2 gap-lg">
            <div className="space-y-xs">
              <label className="block font-nav-item text-nav-item text-on-surface">Minimum Password Length</label>
              <input 
                type="number" 
                defaultValue="8"
                className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-body-md"
              />
            </div>
            <div className="space-y-xs">
              <label className="block font-nav-item text-nav-item text-on-surface">Password Expiry (Days)</label>
              <input 
                type="number" 
                defaultValue="90"
                className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-body-md"
              />
            </div>
          </div>
          
          <div className="space-y-sm pt-sm">
            <label className="flex items-center space-x-md cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Require at least one uppercase letter</span>
            </label>
            <label className="flex items-center space-x-md cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Require at least one number</span>
            </label>
            <label className="flex items-center space-x-md cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-outline-variant rounded" />
              <span className="text-body-md">Require at least one special character</span>
            </label>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="space-y-md">
          <h4 className="font-semibold text-body-lg text-on-surface border-b border-outline-variant pb-xs">Two-Factor Authentication (2FA)</h4>
          
          <div className="bg-surface-container p-md rounded border border-outline-variant">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-on-surface">Enforce 2FA for all users</p>
                <p className="text-caption text-on-surface-variant mt-1">Require users to set up an authenticator app upon next login.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Session Management */}
        <div className="space-y-md">
          <h4 className="font-semibold text-body-lg text-on-surface border-b border-outline-variant pb-xs">Session Management</h4>
          
          <div className="space-y-xs">
            <label className="block font-nav-item text-nav-item text-on-surface">Idle Session Timeout (Minutes)</label>
            <select className="w-full max-w-[300px] px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-body-md">
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="60">1 Hour</option>
              <option value="240">4 Hours</option>
              <option value="never">Never Timeout</option>
            </select>
          </div>
        </div>
        
        <div className="pt-md flex justify-end">
          <button onClick={handleSave} className="bg-primary-container text-white px-6 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm">
            Save Security Settings
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center">
          <span className="material-symbols-outlined mr-2 text-green-400">check_circle</span>
          Security settings saved successfully!
        </div>
      )}
    </>
  );
};

export default SecuritySettings;
