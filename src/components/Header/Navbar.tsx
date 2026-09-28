import React from 'react';
import { ShieldCheck, Sun, Moon, User, UserCheck, Search, ShoppingBag } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const { userAccount, openLoginModal } = useAuth();
  const { totalItems, toggleCart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" className="logo">
          <ShieldCheck color="#001a9c" size={28} /> authenti<span>Q</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home">SHOP</a></li>
          <li><a href="#goals">WHY AUTHENTIQ</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#leadership">FOUNDERS</a></li>
          <li><a href="#about">ABOUT</a></li>
        </ul>
      </div>

      <div className="nav-actions">
        <button
          className="nav-icon-btn"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          id="themeToggleBtn"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="nav-icon-btn"
          onClick={openLoginModal}
          aria-label="Account"
          title={userAccount?.address?.name ? `Logged in as ${userAccount.address.name}` : 'Account Login'}
        >
          {userAccount?.address?.name ? (
            <UserCheck size={20} style={{ color: 'var(--accent-red)' }} />
          ) : (
            <User size={20} />
          )}
        </button>

        <button
          className="nav-icon-btn"
          onClick={onOpenSearch}
          aria-label="Search Formulations"
        >
          <Search size={20} />
        </button>

        <button
          className="nav-icon-btn"
          onClick={toggleCart}
          aria-label="View Cart"
        >
          <ShoppingBag size={20} />
          <span className="cart-badge" id="cartBadge">
            {totalItems}
          </span>
        </button>
      </div>
    </nav>
  );
};
