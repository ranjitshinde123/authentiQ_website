import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  User,
  UserCheck,
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Flame,
  Phone,
  Mail
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { Logo } from '../UI/Logo';

interface NavbarProps {
  onOpenSearch: () => void;
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, currentPage = 'home', onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const { userAccount, openLoginModal } = useAuth();
  const { totalItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === 'about') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        window.location.hash = '#about-page';
      }
      return;
    }

    if (currentPage === 'about') {
      if (onNavigate) {
        onNavigate('home', targetId);
      } else {
        window.location.hash = `#${targetId}`;
      }
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 75;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          {/* Mobile Menu Toggle Hamburger */}
          <button
            className="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
            <Logo size={58} height={58} />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>SHOP</a></li>
            <li><a href="#goals" onClick={(e) => handleNavClick(e, 'goals')}>WHY AUTHENTIQ</a></li>
            <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>PRODUCTS</a></li>
            <li><a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')}>FOUNDERS</a></li>
            <li>
              <a
                href="#about-page"
                className={currentPage === 'about' ? 'active-about' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                ABOUT
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            className="nav-icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            id="themeToggleBtn"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Search Button */}
          <button
            className="nav-icon-btn"
            onClick={onOpenSearch}
            aria-label="Search Formulations"
            title="Search products"
          >
            <Search size={19} />
          </button>

          {/* Account Button */}
          <button
            className="nav-icon-btn"
            onClick={openLoginModal}
            aria-label="Account"
            title={userAccount?.address?.name ? `Logged in as ${userAccount.address.name}` : 'Account Login'}
          >
            {userAccount?.address?.name ? (
              <UserCheck size={19} style={{ color: 'var(--accent-red)' }} />
            ) : (
              <User size={19} />
            )}
          </button>

          {/* Shopping Cart Button */}
          <button
            className="nav-icon-btn cart-nav-btn"
            onClick={toggleCart}
            aria-label="View Cart"
            title="Shopping Cart"
          >
            <ShoppingBag size={19} />
            <span className="cart-badge" id="cartBadge">
              {totalItems}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer / Overlay */}
      <div
        className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-logo">
            <Logo size={46} height={46} />
          </div>
          <button
            className="mobile-drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          {/* Quick Announcement Banner inside Mobile Menu */}
          <div className="mobile-drawer-promo">
            <Flame size={15} color="var(--accent-red)" />
            <span>Pharma-Grade Performance Nutrition</span>
          </div>

          <ul className="mobile-nav-list">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                <span>Shop All</span>
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')}>
                <span>Shop by Benefit</span>
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#goals" onClick={(e) => handleNavClick(e, 'goals')}>
                <span>Why authentiQ</span>
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>
                <span>Product Formulations</span>
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>
                <span>Athlete Reviews</span>
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')}>
                <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>Founders & Leadership</span>
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a
                href="#about-page"
                className={currentPage === 'about' ? 'mobile-active-about' : ''}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                <span style={{ fontWeight: currentPage === 'about' ? 700 : 500 }}>About Us & Story</span>
                <ChevronRight size={16} />
              </a>
            </li>
          </ul>

          {/* Quick Actions in Mobile Menu */}
          <div className="mobile-drawer-actions">
            <button
              className="mobile-action-pill"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
            >
              <Search size={16} /> Search Formulations
            </button>
            <button
              className="mobile-action-pill"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openLoginModal();
              }}
            >
              <User size={16} /> {userAccount?.address?.name ? userAccount.address.name : 'Account Login'}
            </button>
            <button
              className="mobile-action-pill"
              onClick={() => {
                setIsMobileMenuOpen(false);
                toggleCart();
              }}
            >
              <ShoppingBag size={16} /> View Cart ({totalItems})
            </button>
          </div>

          {/* Direct Contact info in mobile drawer */}
          <div className="mobile-drawer-footer">
            <p className="mobile-support-title">VMS Multiventures Healthcare</p>
            <a href="tel:+917709337938" className="mobile-footer-link">
              <Phone size={13} /> +91 7709337938
            </a>
            <a href="mailto:info@authentiqnutrition.com" className="mobile-footer-link">
              <Mail size={13} /> info@authentiqnutrition.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
