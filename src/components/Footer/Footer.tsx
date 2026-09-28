import React from 'react';
import { Newsletter } from './Newsletter';

interface FooterProps {
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <a href="#home" className="logo" style={{ marginBottom: '1rem' }}>
            authenti<span>Q</span>
          </a>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Premium nutrition engineered for athletes and active individuals. Pure ingredients, full transparency.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product Lines</h4>
          <ul className="footer-links">
            <li>
              <a href="#products" onClick={() => onSelectCategory('performance')}>
                Performance Series
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => onSelectCategory('core')}>
                Core Series
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => onSelectCategory('recovery')}>
                Recovery Series
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => onSelectCategory('essential')}>
                Essential Series
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#goals">Shop by Goal</a></li>
            <li><a href="#leadership">Founders & Leadership</a></li>
            <li><a href="#about">About Company</a></li>
            <li><a href="#contact">Contact Support</a></li>
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
