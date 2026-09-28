import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Flame,
  Dumbbell,
  FlaskConical,
  TrendingUp,
  Truck,
  Quote,
  CheckCircle2,
  HeartPulse,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Building2,
  Phone,
  Mail
} from 'lucide-react';

interface LeaderSlide {
  id: string;
  name: string;
  shortRole: string;
  avatarInitials: string;
  avatarGradient: string;
  badge: string;
  badgeIcon: React.ReactNode;
  subtitle: string;
  quote: string;
  stats: {
    icon: React.ReactNode;
    glowClass: string;
    value: string;
    label: string;
  }[];
  bullets: string[];
  taglines: string[];
  isCompanyCard?: boolean;
}

const slides: LeaderSlide[] = [
  {
    id: 'vikram-shinde',
    name: 'Vikram Shinde',
    shortRole: 'Principal Founder & MD',
    avatarInitials: 'VS',
    avatarGradient: 'linear-gradient(135deg, #e63946 0%, #991b1b 100%)',
    badge: 'Principal Founder & Visionary',
    badgeIcon: <Sparkles size={16} />,
    subtitle: 'Founder & Managing Director • VMS Multiventures Healthcare',
    quote:
      'With 18+ years in pharmaceutical manufacturing and 15+ years of living the fitness journey, I’ve experienced both precision and performance. A major health setback taught me the true value of quality, recovery, and resilience. That journey became the foundation of authentiQ Nutrition—where pharmaceutical expertise meets real fitness experience.',
    stats: [
      {
        icon: <FlaskConical size={20} />,
        glowClass: 'red-glow',
        value: '18+ Years',
        label: 'Pharma Manufacturing Head'
      },
      {
        icon: <Dumbbell size={20} />,
        glowClass: 'blue-glow',
        value: '15+ Years',
        label: 'Fitness & Bodybuilding Passion'
      },
      {
        icon: <HeartPulse size={20} />,
        glowClass: 'amber-glow',
        value: 'Real Comeback',
        label: 'Health Setback to Resilience'
      }
    ],
    bullets: [
      'With 18+ years in pharmaceutical manufacturing as a Manufacturing Head, quality and precision have always been at the core of my work.',
      'With 15+ years of passion for fitness and bodybuilding, I have lived the discipline and demands of the fitness journey firsthand.',
      'After facing a major health setback and making my own comeback, my perspective on health and supplementation changed forever.',
      'authentiQ was born from that experience—to bring pharmaceutical-grade discipline, fitness-driven understanding, and genuine trust into every product we create.'
    ],
    taglines: [
      'Built on Experience. Driven by Passion. Made with Purpose.',
      'Built with Integrity. Driven by Experience. Made for Your Journey.'
    ]
  },
  {
    id: 'vishal-kumbhar',
    name: 'Vishal Kumbhar',
    shortRole: 'Co-Founder & Business Lead',
    avatarInitials: 'VK',
    avatarGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    badge: 'Co-Founder & Strategic Leadership',
    badgeIcon: <TrendingUp size={16} />,
    subtitle: 'Co-Founder • Strategic Business Leadership',
    quote:
      'Vision without execution is just an idea. At authentiQ, we turn scientific excellence into accessible, trusted nutrition that empowers athletes and active individuals every single day.',
    stats: [
      {
        icon: <TrendingUp size={20} />,
        glowClass: 'blue-glow',
        value: 'Strategic Scale',
        label: 'Enterprise Growth & Vision'
      },
      {
        icon: <Sparkles size={20} />,
        glowClass: 'red-glow',
        value: 'Decisive Action',
        label: 'Rapid Momentum & Execution'
      },
      {
        icon: <ShieldCheck size={20} />,
        glowClass: 'amber-glow',
        value: 'Consumer Trust',
        label: 'Transparency & Long-Term Value'
      }
    ],
    bullets: [
      'With extensive experience in leading high-growth businesses at scale, Vishal brings strategic vision, sharp business insight, and decisive leadership to authentiQ.',
      'Spearheads business strategy, brand expansion, and partnerships, turning innovative concepts into actionable momentum.',
      'Champions customer-centric operations and ethical business governance across all distribution channels.',
      'Committed to establishing authentiQ as India’s benchmark for integrity and uncompromised athletic performance.'
    ],
    taglines: [
      'Vision. Leadership. Momentum.',
      'Scaling Purity. Empowering Human Performance.'
    ]
  },
  {
    id: 'sandeep-pekhale',
    name: 'Sandeep Pekhale',
    shortRole: 'Co-Founder & Operations Head',
    avatarInitials: 'SP',
    avatarGradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    badge: 'Co-Founder & Supply Chain Master',
    badgeIcon: <Truck size={16} />,
    subtitle: 'Co-Founder • Operations & Logistics Head',
    quote:
      'Quality is not just about what is inside the formulation—it is about preserving that purity until the moment you take your first scoop. Precision logistics is our promise to you.',
    stats: [
      {
        icon: <Truck size={20} />,
        glowClass: 'emerald-glow',
        value: '20+ Years',
        label: 'Pharma Logistics Leadership'
      },
      {
        icon: <FlaskConical size={20} />,
        glowClass: 'blue-glow',
        value: '100% Quality',
        label: 'Cold-Chain & Storage Integrity'
      },
      {
        icon: <CheckCircle2 size={20} />,
        glowClass: 'amber-glow',
        value: 'Pan-India Delivery',
        label: 'Direct-from-Facility Dispatch'
      }
    ],
    bullets: [
      'With 20+ years of pharmaceutical industry experience, Sandeep brings deep expertise in logistics, inventory precision, and operations.',
      'Oversees end-to-end supply chain management ensuring tamper-proof packaging, strict moisture control, and climate-regulated storage.',
      'Guarantees seamless, rapid distribution and timely delivery to athletes and fitness enthusiasts nationwide.',
      'Ensures every single batch reaches consumers with zero degradation in potency or freshness.'
    ],
    taglines: [
      '20+ Years of Experience. Seamless Execution.',
      'Precision Logistics. Factory-Fresh Purity.'
    ]
  },
  {
    id: 'vms-healthcare',
    name: 'VMS Healthcare',
    shortRole: 'Parent Organization',
    avatarInitials: 'VMS',
    avatarGradient: 'linear-gradient(135deg, #001a9c 0%, #e63946 100%)',
    badge: 'The VMS Trust Advantage',
    badgeIcon: <Building2 size={16} />,
    subtitle: 'VMS MULTIVENTURES HEALTHCARE PVT. LTD. (Vikram • Vishal • Sandeep)',
    quote:
      'Under VMS Multiventures Healthcare, authentiQ bridges the gap between pharmaceutical rigor and sports supplementation. Every batch is manufactured under cGMP standards and verified by independent laboratory audits.',
    stats: [
      {
        icon: <ShieldCheck size={20} />,
        glowClass: 'blue-glow',
        value: 'cGMP Certified',
        label: 'Pharma-Grade Manufacturing'
      },
      {
        icon: <FlaskConical size={20} />,
        glowClass: 'red-glow',
        value: '100% Tested',
        label: 'NABL Certified Lab Reports'
      },
      {
        icon: <Award size={20} />,
        glowClass: 'amber-glow',
        value: 'Pune, India',
        label: 'Metropolis Corporate HQ'
      }
    ],
    bullets: [
      'VMS Multiventures Healthcare Pvt. Ltd. represents the united expertise of Vikram Shinde, Vishal Kumbhar, and Sandeep Pekhale.',
      'Every formulation undergoes rigorous pharmaceutical-grade audits, heavy-metal profiling, and verified macronutrient accuracy.',
      'Corporate Office: Office No 404, Metropolis, Survey No 22/3, Balewadi High Street, Pune - 411045.',
      'Direct Support: +91 7709337938 | info@authentiqnutrition.com | @authentiq.nutrition'
    ],
    taglines: [
      'Pharmaceutical Discipline. Athlete Passion.',
      'Purity You Can Trust. Power You Can Feel.'
    ],
    isCompanyCard: true
  }
];

export const Leadership: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 6500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, currentSlide]);

  // Touch gesture support for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeLeader = slides[currentSlide];

  return (
    <section id="leadership" className="leadership-section">
      <div className="section-header">
        <span className="section-tag">Leadership & Vision</span>
        <h2 className="section-title">
          authenti<span style={{ color: 'var(--accent-red)' }}>Q</span> was born from experience—not just an idea.
        </h2>
        <p className="section-subtitle">
          Founded by pharmaceutical manufacturing veterans, dedicated fitness athletes, and visionary leaders committed to uncompromised purity and human performance.
        </p>
      </div>

      {/* Leadership Carousel Main Container */}
      <div
        className="leader-carousel-wrapper"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {/* Top Tab Bar / Founder Quick-Selector Pills */}
        <div className="leader-tabs-nav" role="tablist" aria-label="Founders Selection">
          {slides.map((leader, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={leader.id}
                role="tab"
                aria-selected={isActive}
                className={`leader-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div
                  className="tab-avatar-mini"
                  style={{ background: leader.avatarGradient }}
                >
                  {leader.avatarInitials}
                </div>
                <div className="tab-meta">
                  <span className="tab-name">{leader.name}</span>
                  <span className="tab-role">{leader.shortRole}</span>
                </div>
                {isActive && <div className="tab-active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Carousel Slide Display Area */}
        <div
          className="leader-slide-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="founder-hero-card carousel-card-active">
            {/* Top Badge & Counter */}
            <div className="founder-card-top-row">
              <div className="founder-hero-badge">
                {activeLeader.badgeIcon} {activeLeader.badge}
              </div>
              <div className="carousel-slide-counter">
                <span className="counter-current">0{currentSlide + 1}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">0{totalSlides}</span>
              </div>
            </div>

            {/* Content Layout: 2 Columns on Desktop, Cleanly Stacked on Mobile */}
            <div className="founder-hero-layout">
              {/* Profile / Stats Column */}
              <div className="founder-profile-col">
                <div className="founder-avatar-wrapper">
                  <div
                    className="founder-avatar primary-avatar"
                    style={{ background: activeLeader.avatarGradient }}
                  >
                    <span>{activeLeader.avatarInitials}</span>
                    <div className="avatar-status-badge" title="Verified Founder">
                      <ShieldCheck size={18} />
                    </div>
                  </div>
                  <div className="founder-identity">
                    <h3>{activeLeader.name}</h3>
                    <p className="founder-role">{activeLeader.subtitle}</p>
                    <span className="founder-org">VMS Multiventures Healthcare</span>
                  </div>
                </div>

                {/* 3 Key Metric Stats */}
                <div className="founder-stats-grid">
                  {activeLeader.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="founder-stat-item">
                      <div className={`stat-icon ${stat.glowClass}`}>
                        {stat.icon}
                      </div>
                      <div className="stat-info">
                        <h4>{stat.value}</h4>
                        <p>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {activeLeader.isCompanyCard && (
                  <div className="company-quick-contact">
                    <a href="tel:+917709337938" className="contact-link-pill">
                      <Phone size={14} /> +91 7709337938
                    </a>
                    <a href="mailto:info@authentiqnutrition.com" className="contact-link-pill">
                      <Mail size={14} /> info@authentiqnutrition.com
                    </a>
                  </div>
                )}
              </div>

              {/* Story & Quotes Column */}
              <div className="founder-content-col">
                <div className="story-paragraphs">
                  {activeLeader.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="story-item">
                      <div className="story-bullet">
                        <CheckCircle2 size={18} color="var(--accent-red)" />
                      </div>
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Highlight Quote Block */}
                <div className="founder-quote-banner">
                  <Quote className="quote-watermark" size={56} />
                  <p className="quote-text">&ldquo;{activeLeader.quote}&rdquo;</p>
                  <div className="quote-author-sign">
                    — <strong>{activeLeader.name}</strong>, {activeLeader.badge}
                  </div>
                </div>

                {/* Taglines Ribbon */}
                <div className="founder-tagline-ribbon">
                  {activeLeader.taglines.map((tagline, tIdx) => (
                    <div
                      key={tIdx}
                      className={`tagline-pill ${tIdx === 1 ? 'accent' : ''}`}
                    >
                      {tIdx === 0 ? <Flame size={15} /> : <Award size={15} />}
                      {tagline}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Bottom Controls: Arrows, Dots & Autoplay Button */}
        <div className="leader-carousel-controls">
          <button
            className="carousel-nav-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous Leader"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="carousel-dots-wrap">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot-pill ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="carousel-nav-btn next-btn"
            onClick={nextSlide}
            aria-label="Next Leader"
          >
            <ChevronRight size={22} />
          </button>

          <button
            className="carousel-play-toggle"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause auto-sliding' : 'Play auto-sliding'}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>

        {/* VMS Healthcare Trust Strip Footer */}
        <div className="vms-trust-strip">
          <div className="vms-icon">
            <ShieldCheck size={28} />
          </div>
          <div className="vms-text">
            <strong>The VMS Advantage (Vikram • Vishal • Sandeep)</strong>
            <p>
              Under <strong>VMS MULTIVENTURES HEALTHCARE PVT. LTD.</strong>, every authentiQ formulation undergoes rigorous pharmaceutical-grade quality audits, transparent batch testing, and world-class manufacturing standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
