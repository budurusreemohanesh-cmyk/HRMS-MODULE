import React, { useState } from 'react';

const Profile = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col h-full max-w-[896px] mx-auto w-full relative">
      <div className="mb-xl">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">My Profile</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Manage your personal information and preferences.</p>
      </div>

      {/* Profile Header Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-xl shadow-sm mb-lg flex flex-col md:flex-row items-center md:items-start gap-lg">
        <div className="relative">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8xC6jVNjMm5LRRjvl2wjtvbG9dFjKAwSO5YOCn6EX3SNXYWHOpv_rF9a5IctMbVWR2v3IReb9-i07LmQZi7S_Z2cTSLiDGAuGuwn_OcRi0nTdJZvCVdYsFuUxlDg_DVCrD0faH9GgLr4I6PvxlqbzjvPGSNGCLYEdIS_28xKtfGo5uZocPo6utlm6PcUcO5t_sTMcuLr8a3i3X1Bax1tFFsonolPxUWAajuzxowV2cAZ_5vof64m6vpYsatzapfuycqQE3-Al654" 
            alt="Siddharth Sharma" 
            className="w-32 h-32 rounded-full object-cover border-4 border-surface" 
          />
          <button className="absolute bottom-0 right-0 bg-primary-container text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-surface-tint transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[16px]">edit</span>
          </button>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h3 className="font-display text-[28px] font-bold text-on-surface mb-1">Siddharth Sharma</h3>
          <p className="font-body-lg text-body-lg text-primary mb-md">HR Director</p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-md">
            <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-md">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span className="font-caption text-caption">siddharth@enterprise.hr</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-md">
              <span className="material-symbols-outlined text-[18px]">phone</span>
              <span className="font-caption text-caption">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-md">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              <span className="font-caption text-caption">Mumbai, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details Form */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg md:p-xl shadow-sm">
        <h4 className="font-headline-md text-headline-md text-on-surface mb-lg">Personal Information</h4>
        
        <div className="space-y-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-xs">
              <label className="block font-nav-item text-nav-item text-on-surface">First Name</label>
              <input type="text" defaultValue="Siddharth" className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-body-md" />
            </div>
            <div className="space-y-xs">
              <label className="block font-nav-item text-nav-item text-on-surface">Last Name</label>
              <input type="text" defaultValue="Sharma" className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-body-md" />
            </div>
            <div className="space-y-xs md:col-span-2">
              <label className="block font-nav-item text-nav-item text-on-surface">Bio</label>
              <textarea rows={4} defaultValue="HR Director with over 15 years of experience in modern enterprise workforce management." className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-body-md resize-none"></textarea>
            </div>
          </div>
          
          <div className="pt-md flex justify-end">
            <button type="button" onClick={handleSave} className="bg-primary-container text-white px-6 py-2 rounded text-nav-item font-nav-item hover:bg-surface-tint transition-colors shadow-sm cursor-pointer">
              Save Details
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center">
          <span className="material-symbols-outlined mr-2 text-green-400">check_circle</span>
          Profile updated successfully!
        </div>
      )}
    </div>
  );
};

export default Profile;
