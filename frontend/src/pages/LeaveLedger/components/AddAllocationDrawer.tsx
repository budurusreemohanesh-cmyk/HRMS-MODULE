import { useState } from 'react';
import { createPortal } from 'react-dom';

interface AddAllocationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAllocationDrawer = ({ isOpen, onClose }: AddAllocationDrawerProps) => {
  if (!isOpen) return null;

  const drawerContent = (
    <div className="fixed inset-0 z-[9999] flex justify-end" style={{ pointerEvents: 'auto' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-[400px] h-full bg-[#f8f9ff] flex flex-col shadow-2xl border-l border-[#c7c4d8]">
        {/* Header */}
        <div className="p-6 border-b border-[#c7c4d8] bg-[#ffffff] flex justify-between items-center shrink-0">
          <h2 className="text-[20px] font-bold text-[#0d1c2d]">New Leave Allocation</h2>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full text-[#464555]">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#ffffff]">
          <div className="space-y-6">
            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#0d1c2d]">Employee *</label>
              <input type="text" placeholder="Search Employee..." className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px]" />
            </div>

            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#0d1c2d]">Leave Type *</label>
              <select className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px]">
                <option value="">Select leave type...</option>
                <option value="pl">Privilege Leave</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[13px] font-medium text-[#0d1c2d]">Valid From *</label>
                <input type="date" className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px]" />
              </div>
              <div className="space-y-1">
                <label className="block text-[13px] font-medium text-[#0d1c2d]">Valid To *</label>
                <input type="date" className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px]" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#0d1c2d]">Number of Leaves *</label>
              <input type="number" placeholder="e.g. 10.0" className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px]" />
            </div>
            
            <div className="space-y-1">
              <label className="block text-[13px] font-medium text-[#0d1c2d]">Description</label>
              <textarea rows={3} className="w-full px-4 py-2 border border-[#c7c4d8] rounded bg-[#ffffff] text-[14px]"></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#c7c4d8] bg-[#ffffff] flex justify-end gap-4 shrink-0">
          <button onClick={onClose} className="px-6 py-2 border border-[#c7c4d8] rounded font-medium text-[#0d1c2d]">Cancel</button>
          <button onClick={onClose} className="px-6 py-2 bg-[#3525cd] text-white rounded font-medium">Allocate Leaves</button>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
};

export default AddAllocationDrawer;
