import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-container">
      <Sparkles size={18} style={{ color: 'var(--accent-red)' }} />
      <span>{toastMessage}</span>
    </div>
  );
};
