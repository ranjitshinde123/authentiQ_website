import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { Navbar } from './Navbar';

interface HeaderProps {
  onOpenSearch: () => void;
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about', sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <AnnouncementBar />
      <Navbar
        onOpenSearch={onOpenSearch}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </header>
  );
};

