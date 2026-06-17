import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background font-body-md text-on-surface flex h-screen overflow-hidden">
      {/* Sidebar Overlay (Mobile) */}
      <div className="fixed inset-0 z-40 hidden md:hidden sidebar-mask transition-opacity duration-300" id="sidebar-overlay"></div>

      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden ml-0 md:ml-sidebar-width relative">
        <Header />
        
        {/* Main Content Canvas */}
        <div className="flex-1 p-gutter overflow-y-auto bg-background custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
