import React from 'react';
import { Zap, Flame, Brain } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

interface NewReleaseProps {
  onOpenModal: (productId: number) => void;
}

export const NewRelease: React.FC<NewReleaseProps> = ({ onOpenModal }) => {
  const { addToCart } = useCart();
  const shredFactor = products.find(p => p.id === 9);

  const handleAddToCart = () => {
    if (shredFactor) {
      addToCart(shredFactor);
    }
  };

  return (
    <section
      id="new-release"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="about-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="new-release-content">
          <span className="company-badge">NEW ANNOUNCEMENT</span>
          <h2
            className="section-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            INTRODUCING<br />
            <span style={{ color: 'var(--accent-red)' }}>SHRED FACTOR</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Our latest formulation engineered for thermogenic metabolic support, physical fat transportation, and crash-free physical focus. Push beyond your limits with raw performance.
          </p>

          <ul className="highlights" style={{ marginBottom: '2rem' }}>
            <li>
              <Zap style={{ color: 'var(--accent-red)' }} />
              <span><strong>L-Carnitine Complex:</strong> Drives fat oxidation for fuel</span>
            </li>
            <li>
              <Flame style={{ color: 'var(--accent-red)' }} />
              <span><strong>Thermogenic Burn:</strong> Elevates baseline metabolic calories</span>
            </li>
            <li>
              <Brain style={{ color: 'var(--accent-red)' }} />
              <span><strong>L-Theanine & Choline:</strong> Intense focus without caffeine crashes</span>
            </li>
          </ul>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => onOpenModal(9)}>
              Explore Science
            </button>
            <button className="btn-secondary" onClick={handleAddToCart}>
              Add to Cart - ₹2,999
            </button>
          </div>
        </div>

        <div className="new-release-image-wrap">
          <div className="new-release-img-bg">
            <img
              src="/images/shred_factor.png"
              alt="Shred Factor"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/mass_gainer.png';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
