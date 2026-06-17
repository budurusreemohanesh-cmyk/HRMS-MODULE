import type { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-surface-bright flex items-center justify-center p-md sm:p-xl">
      <div className="w-full max-w-[1000px] bg-white rounded-2xl shadow-xl flex overflow-hidden min-h-[600px] border border-outline-variant/30">
        
        {/* Left Side: Branding / Marketing */}
        <div className="hidden lg:flex w-1/2 bg-primary-container p-xl flex-col relative overflow-hidden text-white">
          <div className="relative z-10">
            <div className="flex items-center gap-sm mb-xl">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[20px]">domain</span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-white tracking-tight">Enterprise HR</span>
            </div>
            
            <h1 className="font-display text-[40px] leading-[48px] font-bold text-white mb-md">
              The modern way to manage your workforce.
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim opacity-90 max-w-[384px]">
              Streamline payroll, statutory compliance, and leave management in one unified platform.
            </p>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute top-[10%] -left-[20%] w-[300px] h-[300px] rounded-full bg-surface-tint/20 blur-3xl"></div>
          
          <div className="mt-auto relative z-10 text-primary-fixed-dim font-caption text-caption">
            © 2026 Enterprise HR Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side: Auth Content */}
        <div className="w-full lg:w-1/2 p-xl sm:p-[60px] flex flex-col justify-center bg-white relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
