import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface LogoProps {
  className?: string;
  size?: number;
  height?: number;
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 54,
  height,
}) => {
  const { theme } = useTheme();
  
  // If white/light theme, increase logo size to fit the page and navbar properly
  const baseHeight = height || size;
  const actualHeight = theme === 'light' ? Math.round(baseHeight * 1.35) : baseHeight;

  const logoSrc = theme === 'light' 
    ? '/images/authentiq_logo_light.jpg' 
    : '/images/authentiq_logo_dark.jpg';

  return (
    <div
      className={`brand-logo-wrap ${theme === 'light' ? 'logo-white-theme' : 'logo-dark-theme'} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      <img
        src={logoSrc}
        alt="authentiQ Logo"
        className="brand-logo-img"
        style={{
          height: `${actualHeight}px`,
          width: 'auto',
          maxHeight: theme === 'light' ? '82px' : `${Math.max(baseHeight, 60)}px`,
          objectFit: 'contain',
          display: 'block',
          borderRadius: '4px',
          transition: 'transform 0.25s ease, opacity 0.25s ease'
        }}
      />
    </div>
  );
};
