import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-[384px] mx-auto">
      {/* Mobile Branding (only shows on small screens) */}
      <div className="lg:hidden flex items-center justify-center gap-sm mb-xl">
        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white text-[24px]">domain</span>
        </div>
        <span className="font-headline-md text-headline-md font-bold text-on-surface">Enterprise HR</span>
      </div>

      <div className="mb-xl text-center lg:text-left">
        <h2 className="font-display text-[32px] leading-[40px] font-bold text-on-surface mb-xs">Welcome back</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Please enter your details to sign in.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-lg">
        <div className="space-y-xs">
          <label className="block font-nav-item text-nav-item text-on-surface">Email address</label>
          <input 
            type="email" 
            required
            placeholder="admin@company.in"
            className="w-full px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none"
          />
        </div>

        <div className="space-y-xs">
          <div className="flex justify-between items-center">
            <label className="block font-nav-item text-nav-item text-on-surface">Password</label>
            <Link to="/forgot-password" className="font-nav-item text-[13px] text-primary hover:text-surface-tint transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full pl-3 pr-10 py-2 bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface transition-all outline-none"
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">visibility_off</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" />
          <label htmlFor="remember" className="font-body-md text-body-md text-on-surface-variant cursor-pointer">Remember me for 30 days</label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-primary-container text-white py-2.5 rounded-lg font-nav-item text-nav-item hover:bg-surface-tint transition-colors shadow-sm active:translate-y-px mt-sm"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
