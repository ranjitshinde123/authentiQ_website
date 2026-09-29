import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.series === selectedCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        // Loop back to start
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  // 3-Second (3000ms) Auto-scroll from Right to Left
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        scrollRight();
      }, 3000);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, filteredProducts]);

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
            title="Previous products"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="compact-arrow-btn"
            onClick={scrollRight}
            aria-label="Scroll products right"
            title="Next products"
          >
            <ChevronRight size={20} />
          </button>
          <button
            className="compact-arrow-btn play-toggle"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause 3s auto-scroll' : 'Resume 3s auto-scroll'}
            title={isAutoPlaying ? 'Pause 3s auto-scroll' : 'Play 3s auto-scroll'}
          >
            {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
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

      {/* Single-Line Horizontal Product Track with 3-Second Auto-Movement */}
      <div
        className="compact-products-track"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
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
