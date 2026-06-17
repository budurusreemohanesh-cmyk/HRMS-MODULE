import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <span className="material-symbols-outlined text-[64px] text-primary-container mb-4">
        error_outline
      </span>
      <h1 className="font-display text-display font-bold text-on-surface mb-2">404</h1>
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Page Not Found</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-[448px]">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/dashboard" 
        className="bg-primary-container text-white px-6 py-3 rounded-lg font-nav-item text-nav-item hover:bg-surface-tint transition-colors shadow-sm"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
