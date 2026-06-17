import React from 'react';

interface StatCardProps {
  icon: string;
  iconBgClass: string;
  iconTextClass: string;
  trendText?: string;
  trendIcon?: string;
  trendClass?: string;
  title: string;
  value: string | number;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  iconBgClass,
  iconTextClass,
  trendText,
  trendIcon,
  trendClass,
  title,
  value,
  subtitle,
}) => {
  return (
    <div className="md:col-span-3 bg-surface border border-outline-variant p-md rounded-xl flex flex-col justify-between">
      <div className="flex justify-between items-start mb-md">
        <div className={`p-xs rounded ${iconBgClass} ${iconTextClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {trendText && (
          <span className={`font-bold text-caption flex items-center gap-xs ${trendClass}`}>
            {trendText} {trendIcon && <span className="material-symbols-outlined text-[14px]">{trendIcon}</span>}
          </span>
        )}
      </div>
      <div>
        <p className="text-on-surface-variant text-nav-item font-nav-item">{title}</p>
        <h4 className="text-display font-display text-on-surface">{value}</h4>
        <p className="text-caption text-on-surface-variant mt-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
