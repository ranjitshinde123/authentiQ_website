import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export interface OwnerReview {
  id: string;
  name: string;
  role: string;
  organization: string;
  initials: string;
  badge: string;
  verifiedLabel: string;
  quote: string;
}

export const ownersData: OwnerReview[] = [
  {
    id: 'vikram-shinde',
    name: 'Vikram Shinde',
    role: 'Principal Founder & MD',
    organization: 'VMS Multiventures Healthcare',
    initials: 'VS',
    badge: '18+ Yrs Pharma Head & Athlete',
    verifiedLabel: 'Verified Founder & Manufacturing Head',
    quote:
      'With 18+ years in pharmaceutical manufacturing and 15+ years of living the fitness journey, I’ve experienced both precision and performance. A major health setback taught me the true value of quality, recovery, and resilience. That journey became the foundation of authentiQ Nutrition—where pharmaceutical expertise meets real fitness experience.'
  },
  {
    id: 'vishal-kumbhar',
    name: 'Vishal Kumbhar',
    role: 'Co-Founder & Business Strategist',
    organization: 'VMS Multiventures Healthcare',
    initials: 'VK',

    badge: 'Enterprise Growth & Strategy',
    verifiedLabel: 'Verified Co-Founder & Business Strategist',
    quote:
      'Vision without execution is just an idea. At authentiQ, we turn scientific excellence into accessible, trusted nutrition that empowers athletes and active individuals every single day. We are building India’s most trusted benchmark for supplement purity and performance.'
  },
  {
    id: 'sandeep-pekhale',
    name: 'Sandeep Pekhale',
    role: 'Co-Founder & Operations Head',
    organization: 'VMS Multiventures Healthcare',
    initials: 'SP',
    badge: '20+ Yrs Pharma Supply Chain',
    verifiedLabel: 'Verified Co-Founder & Logistics Head',
    quote:
      'Quality is not just about what is inside the formulation—it is about preserving that purity until the moment you take your first scoop. Precision logistics, climate-controlled storage, and tamper-proof delivery is our unbreakable promise to you.'
  }
];

interface OwnerCardProps {
  owner: OwnerReview;
}

const getOwnerGradient = (id: string) => {
  if (id === 'vikram-shinde') return 'linear-gradient(135deg, #e63946 0%, #991b1b 100%)';
  if (id === 'vishal-kumbhar') return 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)';
  return 'linear-gradient(135deg, #059669 0%, #047857 100%)';
};

const OwnerReviewCard: React.FC<OwnerCardProps> = ({ owner }) => {
  return (
    <div className="owner-review-card">
      <div className="owner-card-header">
        <div className="owner-user-info">
          <div className="owner-avatar" style={{ background: getOwnerGradient(owner.id) }}>
            <span>{owner.initials}</span>
            <div className="owner-verified-shield" title="Verified Founder">
              <ShieldCheck size={13} />
            </div>
          </div>
          <div className="owner-meta">
            <div className="owner-name-row">
              <h3 className="owner-name">{owner.name}</h3>
              <span className="owner-badge">{owner.badge}</span>
            </div>
            <p className="owner-role">
              {owner.role} • {owner.organization}
            </p>
          </div>
        </div>
      </div>

      <p className="owner-quote-text">
        {owner.quote}
      </p>

      <div className="owner-card-footer">
        <div className="owner-verified-tag">
          <CheckCircle2 size={15} className="verified-icon-emerald" />
          <span>{owner.verifiedLabel}</span>
        </div>
      </div>
    </div>
  );
};

export const Leadership: React.FC = () => {
  // Duplicate 3-card array to achieve seamless infinite right-to-left loop
  const repeatedOwners = [...ownersData, ...ownersData, ...ownersData, ...ownersData];

  return (
    <section id="leadership" className="owners-marquee-section">
      <div className="owners-section-header">
        <span className="section-tag">Leadership & Vision</span>
        <h2 className="owners-section-title">
          authenti<span style={{ color: 'var(--accent-red)' }}>Q</span> was born from experience—not just an idea.
        </h2>
        <p className="owners-section-subtitle">
          Founded by pharmaceutical manufacturing veterans and athletes who bridge medicine-grade quality with real fitness results.
        </p>
      </div>

      {/* Single Line Moving from Right to Left */}
      <div className="owner-marquee-wrapper">
        <div className="owner-marquee-track">
          {repeatedOwners.map((owner, index) => (
            <OwnerReviewCard key={`${owner.id}-${index}`} owner={owner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
