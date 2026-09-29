import React, { useEffect } from 'react';
import { X, Atom, CheckCircle2, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const getSeriesClass = (series: string) => {
    switch (series) {
      case 'core': return 'series-core';
      case 'performance': return 'series-perf';
      case 'recovery': return 'series-rec';
      case 'essential': return 'series-ess';
      default: return '';
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-img-wrap">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/mass_gainer.png';
            }}
          />
        </div>

        <span
          className={`card-tag ${getSeriesClass(product.series)}`}
          style={{ position: 'static', marginBottom: '1rem', display: 'inline-block' }}
        >
          {product.seriesName}
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.85rem',
            marginBottom: '0.3rem',
            color: 'var(--text-main)'
          }}
        >
          {product.name}
        </h2>

        <div
          className={`color-${product.series}`}
          style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {product.type}
        </div>

        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          {product.shortDesc}
        </p>

        <div className="specs-list" style={{ marginBottom: '1.5rem' }}>
          <div className="spec-item">
            <span>Quantity / Servings</span>
            <span>{product.servings}</span>
          </div>
          <div className="spec-item">
            <span>Net Weight</span>
            <span>{product.netWt}</span>
          </div>
          <div className="spec-item" style={{ gridColumn: 'span 2' }}>
            <span>Flavors Available</span>
            <span>{product.flavor}</span>
          </div>
        </div>

        <h4
          style={{
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.8rem',
            color: 'var(--text-main)'
          }}
        >
          Key Active Ingredients:
        </h4>
        <ul className="highlights" style={{ marginBottom: '1.5rem' }}>
          {product.keyIngredients.map((item, idx) => (
            <li key={idx}>
              <Atom className={`color-${product.series}`} size={16} />
              <span><strong>{item}</strong></span>
            </li>
          ))}
        </ul>

        <h4
          style={{
            fontFamily: 'var(--font-heading)',
            marginBottom: '0.8rem',
            color: 'var(--text-main)'
          }}
        >
          Clinical & Performance Benefits:
        </h4>
        <ul className="highlights" style={{ marginBottom: '1.5rem' }}>
          {product.benefits.map((benefit, idx) => (
            <li key={idx}>
              <CheckCircle2 className={`color-${product.series}`} size={16} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <button className="add-to-cart-btn-modal" onClick={handleAddToCart}>
          <ShoppingCart size={18} /> Add to Cart - ₹{product.price.toLocaleString('en-IN')}
        </button>
      </div>
    </div>
  );
};
