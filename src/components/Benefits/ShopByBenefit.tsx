import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BenefitCategory {
  id: string;
  title: string;
  image: string;
  productIds: number[];
}

export const benefitCategories: BenefitCategory[] = [
  {
    id: 'burn-fat',
    title: 'Burn Fat',
    image: '/images/benefit_burn_fat.jpg',
    productIds: [9]
  },
  {
    id: 'muscle-growth',
    title: 'Muscle Growth',
    image: '/images/benefit_muscle.jpg',
    productIds: [1, 3, 5]
  },
  {
    id: 'mens-health',
    title: "Men's Health",
    image: '/images/benefit_mens_health.jpg',
    productIds: [10]
  },
  {
    id: 'wellness',
    title: 'Wellness',
    image: '/images/benefit_wellness.jpg',
    productIds: [6, 8]
  },
  {
    id: 'performance',
    title: 'Performance',
    image: '/images/benefit_performance.jpg',
    productIds: [2, 4]
  }
];

interface ShopByBenefitProps {
  onSelectBenefit: (benefit: BenefitCategory) => void;
}

export const ShopByBenefit: React.FC<ShopByBenefitProps> = ({ onSelectBenefit }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="shop-by-benefit-section">
      <div className="benefit-header-row">
        <h2 className="benefit-main-title">Shop by Benefit</h2>
        <div className="benefit-nav-arrows">
          <button
            className="benefit-arrow-btn"
            onClick={scrollLeft}
            aria-label="Scroll benefits left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="benefit-arrow-btn"
            onClick={scrollRight}
            aria-label="Scroll benefits right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="benefit-cards-container" ref={scrollContainerRef}>
        {benefitCategories.map((cat) => (
          <div
            key={cat.id}
            className="benefit-card-item"
            onClick={() => onSelectBenefit(cat)}
          >
            <div className="benefit-img-box">
              <img src={cat.image} alt={cat.title} loading="lazy" />
              <div className="benefit-card-overlay">
                <span>View Products</span>
              </div>
            </div>
            <h3 className="benefit-card-title">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
