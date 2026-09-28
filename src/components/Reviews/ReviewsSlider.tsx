import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { row1Reviews, row2Reviews, MarqueeReview } from '../../data/reviews';

interface ReviewCardProps {
  review: MarqueeReview;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="marquee-review-card">
      <div className="marquee-review-top">
        <div className="marquee-user-info">
          <img
            src={review.avatar}
            alt={review.name}
            className="marquee-avatar"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop';
            }}
          />
          <span className="marquee-user-name">{review.name}</span>
        </div>
        <div className="marquee-stars">
          {Array.from({ length: review.stars }).map((_, idx) => (
            <Star key={idx} size={15} className="star-gold" />
          ))}
        </div>
      </div>

      <p className="marquee-text">"{review.text}"</p>

      <div className="marquee-verified">
        <CheckCircle2 size={14} className="verified-icon" />
        <span>{review.verifiedDate}</span>
      </div>
    </div>
  );
};

export const ReviewsSlider: React.FC = () => {
  // Duplicate arrays to achieve infinite seamless 60fps marquee loop
  const row1Repeated = [...row1Reviews, ...row1Reviews];
  const row2Repeated = [...row2Reviews, ...row2Reviews];

  return (
    <section id="reviews" className="reviews-marquee-section">
      <div className="reviews-marquee-header">
        <div className="reviews-super-title">They Work.</div>
        <h2 className="reviews-main-title">
          Why Over 100,000 Athletes Trust authentiQ
        </h2>
        <div className="reviews-rating-badge">
          30k+ Verified 5-Star Reviews
        </div>
        <div className="reviews-cta-wrap">
          <a href="#products" className="btn-primary reviews-btn">
            View Results
          </a>
        </div>
      </div>

      {/* Marquee Track 1: Right to Left */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track marquee-row-1">
          {row1Repeated.map((r, index) => (
            <ReviewCard key={`r1-${r.id}-${index}`} review={r} />
          ))}
        </div>
      </div>

      {/* Marquee Track 2: Left to Right */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track marquee-row-2">
          {row2Repeated.map((r, index) => (
            <ReviewCard key={`r2-${r.id}-${index}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
};
