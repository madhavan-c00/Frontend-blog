import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  showText = true, 
  showTagline = false,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: {
      icon: 'w-8 h-8',
      text: 'text-xl',
      tagline: 'text-[8px]'
    },
    md: {
      icon: 'w-10 h-10',
      text: 'text-2xl',
      tagline: 'text-[10px]'
    },
    lg: {
      icon: 'w-14 h-14',
      text: 'text-4xl',
      tagline: 'text-xs'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`relative ${currentSize.icon} flex-shrink-0`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          
          {/* Hexagon/House Shape */}
          <path 
            d="M50 10 L85 30 V70 L50 90 L15 70 V30 L50 10Z" 
            stroke="url(#logo-gradient)" 
            strokeWidth="8" 
            strokeLinejoin="round"
            fill="white"
          />
          
          {/* Doorway */}
          <path 
            d="M40 45 V30 H60 V45" 
            fill="#0f172a" 
          />

          {/* Stairs/Path leading to doorway */}
          <path 
            d="M30 80 L40 45 H60 L70 80" 
            fill="url(#logo-gradient)"
          />

          {/* Steps */}
          <path d="M35 70 H65" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <path d="M38 60 H62" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <path d="M41 50 H59" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        </svg>
      </div>

      {/* Text Branding */}
      {showText && (
        <div className="flex flex-col">
          <div className={`${currentSize.text} font-bold tracking-tight font-display flex items-center`}>
            <span className="text-slate-900">Freshers</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Flow</span>
          </div>
          {showTagline && (
            <div className={`${currentSize.tagline} font-bold uppercase tracking-[0.2em] text-slate-500 mt-0.5 flex items-center gap-1.5`}>
              <span>Learn</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>Prepare</span>
              <span className="w-1 h-1 rounded-full bg-secondary" />
              <span>Get Hired</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
