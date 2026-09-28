import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  height?: number;
  showText?: boolean;
  textColor?: string;
  useImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 32,
  height,
  showText = true,
  useImage = false
}) => {
  const iconSize = size;
  const actualHeight = height || (showText ? Math.max(size, 36) : size);

  if (useImage) {
    return (
      <div className={`brand-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <img
          src="/images/authentiq_logo.jpg"
          alt="authentiQ Logo"
          style={{
            height: `${actualHeight}px`,
            width: 'auto',
            borderRadius: '6px',
            objectFit: 'contain'
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`brand-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      {/* Official authentiQ Metallic Stylized Q Emblem */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="authentiq-symbol-svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Brushed Metal Linear Gradient */}
          <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* Accent Red Glow / Highlight */}
          <linearGradient id="metalStrokeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Circular C-Ring Segment */}
        <path
          d="M 64 20 C 39.7 20 20 39.7 20 64 C 20 88.3 39.7 108 64 108 C 74.5 108 84.1 104.3 91.6 98.2 L 78.4 85 C 74.3 88.1 69.3 90 64 90 C 49.6 90 38 78.4 38 64 C 38 49.6 49.6 38 64 38 C 77.2 38 88.1 47.9 89.7 60.8 L 107.8 60.8 C 106.1 37.8 87.1 20 64 20 Z"
          fill="url(#metallicGrad)"
          stroke="url(#metalStrokeGrad)"
          strokeWidth="0.8"
          filter="url(#logoShadow)"
        />

        {/* Diagonal Checkmark / Q-Tail Element */}
        <path
          d="M 54 62 L 69 77 L 102 38 L 114 49 L 70 102 L 42 74 Z"
          fill="url(#metallicGrad)"
          stroke="url(#metalStrokeGrad)"
          strokeWidth="0.8"
          filter="url(#logoShadow)"
        />
      </svg>

      {/* authentiQ Wordmark */}
      {showText && (
        <span className="authentiq-wordmark">
          authenti<span className="brand-q-accent">Q</span>
        </span>
      )}
    </div>
  );
};
