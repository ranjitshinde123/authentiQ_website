import React from 'react';
import { Newsletter } from './Newsletter';
import { Logo } from '../UI/Logo';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onNavigate?: (page: 'home' | 'about', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      if (page === 'about') {
        window.location.hash = '#about-page';
      } else if (sectionId) {
        window.location.hash = `#${sectionId}`;
      }
    }
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <a
            href="#home"
            className="logo"
            style={{ marginBottom: '1rem', display: 'inline-block' }}
            onClick={(e) => handleLinkClick(e, 'home', 'home')}
          >
            <Logo size={70} height={70} />
          </a>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Premium nutrition engineered for athletes and active individuals. Pure ingredients, full transparency.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product Lines</h4>
          <ul className="footer-links">
            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home', 'products');
                  onSelectCategory('performance');
                }}
              >
                Performance Series
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home', 'products');
                  onSelectCategory('core');
                }}
              >
                Core Series
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home', 'products');
                  onSelectCategory('recovery');
                }}
              >
                Recovery Series
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home', 'products');
                  onSelectCategory('essential');
                }}
              >
                Essential Series
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home', 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#goals" onClick={(e) => handleLinkClick(e, 'home', 'goals')}>
                Shop by Goal
              </a>
            </li>
            <li>
              <a href="#leadership" onClick={(e) => handleLinkClick(e, 'home', 'leadership')}>
                Founders & Leadership
              </a>
            </li>
            <li>
              <a href="#about-page" onClick={(e) => handleLinkClick(e, 'about')}>
                About Us & Story
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'home', 'contact')}>
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <Newsletter />
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} AuthentIQ Nutraceuticals | VMS Multiventures Healthcare Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};
