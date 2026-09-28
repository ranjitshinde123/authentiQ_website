import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../../data/products';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: number) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmedQuery = query.toLowerCase().trim();
  const matchedProducts = trimmedQuery
    ? products.filter(
        p =>
          p.name.toLowerCase().includes(trimmedQuery) ||
          p.type.toLowerCase().includes(trimmedQuery) ||
          p.shortDesc.toLowerCase().includes(trimmedQuery) ||
          p.keyIngredients.some(k => k.toLowerCase().includes(trimmedQuery))
      )
    : [];

  const handleSelect = (id: number) => {
    onClose();
    onSelectProduct(id);
  };

  return (
    <div className={`search-overlay ${isOpen ? 'active' : ''}`}>
      <button className="search-close" onClick={onClose} aria-label="Close search">
        <X size={28} />
      </button>

      <div className="search-container">
        <div className="search-box">
          <Search className="search-icon" size={24} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search formulations (e.g. Creatine, Whey, Sleep...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-results">
          {trimmedQuery && matchedProducts.length === 0 && (
            <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
              No formulations found matching "{query}"
            </div>
          )}

          {matchedProducts.map(p => (
            <button
              key={p.id}
              className="search-result-item"
              onClick={() => handleSelect(p.id)}
            >
              <img
                className="search-result-img"
                src={p.image}
                alt={p.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/mass_gainer.png';
                }}
              />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>{p.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-red)' }}>{p.type}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
