import React, { useState } from 'react';

const GeneralSettings = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">General Settings</h3>
      
      <div className="space-y-lg max-w-[672px]">
        <div className="space-y-xs">
          <label className="block font-nav-item text-nav-item text-on-surface">Organization Name</label>
          <input 
            type="text" 
            defaultValue="Enterprise HR"
            className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-body-md"
          />
        </div>
        
        <div className="space-y-xs">
          <label className="block font-nav-item text-nav-item text-on-surface">Support Email</label>
          <input 
            type="email" 
            defaultValue="support@enterprise.hr"
            className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-body-md"
          />
        </div>
        
        <div className="space-y-xs">
          <label className="block font-nav-item text-nav-item text-on-surface">Timezone</label>
          <select className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none text-body-md">
            <option value="IST">Asia/Kolkata (IST)</option>
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time (US & Canada)</option>
          </select>
        </div>
        
        <div className="flex items-center gap-3 pt-md border-t border-outline-variant">
          <input type="checkbox" id="maintenance" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
          <div>
            <label htmlFor="maintenance" className="font-nav-item text-nav-item text-on-surface cursor-pointer">Maintenance Mode</label>
            <p className="font-caption text-caption text-on-surface-variant">Temporarily disable access for non-admin users.</p>
          </div>
        </div>
        
        <div className="pt-lg flex justify-end">
          <button type="button" onClick={handleSave} className="bg-primary-container text-white px-6 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center">
          <span className="material-symbols-outlined mr-2 text-green-400">check_circle</span>
          General settings saved successfully!
        </div>
      )}
    </>
  );
};

export default GeneralSettings;
