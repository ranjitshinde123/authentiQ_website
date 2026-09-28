import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenModal: (productId: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onOpenModal
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.series === selectedCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="compact-bestsellers-section">
      <div className="compact-bestsellers-header-row">
        <div>
          <h2 className="compact-bestsellers-title">Our Bestsellers</h2>
          <div className="compact-bestsellers-tagline">
            100% Transparent Formulations & Clinically Proven Bioavailability
          </div>
        </div>

        <div className="compact-bestsellers-nav-controls">
          <button
            className="compact-arrow-btn"
            onClick={scrollLeft}
            aria-label="Scroll products left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="compact-arrow-btn"
            onClick={scrollRight}
            aria-label="Scroll products right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Series Filters */}
      <div className="filter-container">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => onSelectCategory('all')}
        >
          All Formulations ({products.length})
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'performance' ? 'active' : ''}`}
          onClick={() => onSelectCategory('performance')}
        >
          Performance Series
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'core' ? 'active' : ''}`}
          onClick={() => onSelectCategory('core')}
        >
          Core Series
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'recovery' ? 'active' : ''}`}
          onClick={() => onSelectCategory('recovery')}
        >
          Recovery Series
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'essential' ? 'active' : ''}`}
          onClick={() => onSelectCategory('essential')}
        >
          Essential Series
        </button>
      </div>

      {/* Single-Line Horizontal Product Track */}
      <div className="compact-products-track" ref={scrollContainerRef}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  );
};
