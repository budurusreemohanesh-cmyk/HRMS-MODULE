import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="w-full max-w-[384px] mx-auto">
      {/* Mobile Branding */}
      <div className="lg:hidden flex items-center justify-center gap-sm mb-xl">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white text-[24px]">domain</span>
        </div>
        <span className="font-headline-md text-headline-md font-bold text-on-surface">Enterprise HR</span>
      </div>

      <div className="mb-xl text-center lg:text-left">
        <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center mb-md mx-auto lg:mx-0">
          <span className="material-symbols-outlined text-primary text-[24px]">key</span>
        </div>
        <h2 className="font-display text-[32px] leading-[40px] font-bold text-on-surface mb-xs">Forgot password</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">No worries, we'll send you reset instructions.</p>
      </div>

      <form className="space-y-lg">
        <div className="space-y-xs">
          <label className="block font-nav-item text-nav-item text-on-surface">Email address</label>
          <input 
            type="email" 
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-primary-container text-white py-2.5 rounded-lg font-nav-item text-nav-item hover:bg-surface-tint transition-colors shadow-sm active:translate-y-px"
        >
          Reset password
        </button>

        <div className="text-center mt-md">
          <Link to="/login" className="inline-flex items-center gap-xs font-nav-item text-nav-item text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
