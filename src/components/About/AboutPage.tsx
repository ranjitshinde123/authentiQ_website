import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Flame,
  HeartPulse,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  TrendingUp,
  Truck,
  FlaskConical,
  Compass,
  ArrowRight,
  Dumbbell
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: (sectionId?: string) => void;
  onOpenModal?: (productId: number) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* Top Breadcrumb Bar */}
      <div className="about-page-breadcrumb-wrap">
        <div className="about-page-container">
          <div className="about-breadcrumb-bar">
            <button
              className="about-back-btn"
              onClick={() => onNavigateHome('home')}
              aria-label="Back to home"
            >
              <ArrowLeft size={16} />
              <span>Back to Store</span>
            </button>
            <div className="about-breadcrumb-links">
              <span onClick={() => onNavigateHome('home')} className="breadcrumb-link">
                Home
              </span>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-active">About Us & Leadership</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="about-page-hero">
        <div className="about-page-container">
          <div className="about-hero-content">
            <div className="about-pill-badge">
              <Sparkles size={14} className="badge-sparkle-icon" />
              <span>THE AUTHENTIQ STORY</span>
            </div>

            <h1 className="about-main-title">
              authenti<span className="text-red-accent">Q</span> was born from experience—
              <br className="desktop-break" />
              <span className="about-title-sub">not just an idea.</span>
            </h1>

            <p className="about-hero-lead">
              Where pharmaceutical expertise meets real fitness experience. We bring clinical discipline,
              uncompromising purity, and genuine passion into every scoop and formulation.
            </p>

            {/* Quick Stat Badges */}
            <div className="about-stats-grid">
              <div className="about-stat-box">
                <div className="stat-box-icon red-glow">
                  <FlaskConical size={22} />
                </div>
                <div className="stat-box-info">
                  <span className="stat-box-val">18+ Years</span>
                  <span className="stat-box-label">Pharma Manufacturing</span>
                </div>
              </div>

              <div className="about-stat-box">
                <div className="stat-box-icon blue-glow">
                  <Dumbbell size={22} />
                </div>
                <div className="stat-box-info">
                  <span className="stat-box-val">15+ Years</span>
                  <span className="stat-box-label">Fitness & Bodybuilding</span>
                </div>
              </div>

              <div className="about-stat-box">
                <div className="stat-box-icon green-glow">
                  <Truck size={22} />
                </div>
                <div className="stat-box-info">
                  <span className="stat-box-val">20+ Years</span>
                  <span className="stat-box-label">Supply Chain & Operations</span>
                </div>
              </div>

              <div className="about-stat-box">
                <div className="stat-box-icon purple-glow">
                  <ShieldCheck size={22} />
                </div>
                <div className="stat-box-info">
                  <span className="stat-box-val">100%</span>
                  <span className="stat-box-label">Label Transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Founder Showcase: Vikram Shinde */}
      <section className="about-section founder-spotlight-section">
        <div className="about-page-container">
          <div className="founder-spotlight-card">
            <div className="founder-card-glow-bg"></div>

            <div className="founder-spotlight-header">
              <div className="founder-avatar-wrap">
                <div className="founder-avatar-circle">
                  <span>VS</span>
                  <div className="founder-verified-icon" title="Verified Principal Founder">
                    <ShieldCheck size={18} />
                  </div>
                </div>
                <div className="founder-intro-meta">
                  <div className="founder-name-group">
                    <h2 className="founder-fullname">Vikram Shinde</h2>
                    <span className="founder-role-chip">Principal Founder & MD</span>
                  </div>
                  <p className="founder-company-line">
                    <Building2 size={14} /> VMS Multiventures Healthcare Pvt. Ltd.
                  </p>
                  <div className="founder-tag-strip">
                    <span className="tag-chip">18+ Yrs Pharma Head</span>
                    <span className="tag-chip">Athlete & Bodybuilder</span>
                    <span className="tag-chip">Manufacturing Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Grid / Timeline blocks */}
            <div className="founder-story-body">
              <div className="story-step-card">
                <div className="story-step-icon">
                  <FlaskConical size={20} />
                </div>
                <div className="story-step-content">
                  <h3>Pharma-Grade Manufacturing Foundation</h3>
                  <p>
                    With <strong>18+ years in pharmaceutical manufacturing</strong>, including leadership as a
                    <strong> Manufacturing Head</strong>, quality and precision have always been at the core of my work.
                    Every formulation must meet the highest medicine-grade standards of safety and consistency.
                  </p>
                </div>
              </div>

              <div className="story-step-card">
                <div className="story-step-icon">
                  <Flame size={20} />
                </div>
                <div className="story-step-content">
                  <h3>15+ Years Living the Fitness Discipline</h3>
                  <p>
                    With <strong>15+ years of passion for fitness and bodybuilding</strong>, I have lived the discipline,
                    the daily grind, and the physical demands of the fitness journey firsthand. I understand what an athlete's body truly needs.
                  </p>
                </div>
              </div>

              <div className="story-step-card">
                <div className="story-step-icon">
                  <HeartPulse size={20} />
                </div>
                <div className="story-step-content">
                  <h3>The Health Setback & Comeback</h3>
                  <p>
                    After facing a <strong>major health setback and making my own comeback</strong>, my perspective on
                    health, recovery, and supplementation changed forever. It taught me the true value of resilience, ingredient purity, and authentic wellness.
                  </p>
                </div>
              </div>

              <div className="story-step-card highlight-step">
                <div className="story-step-icon">
                  <Sparkles size={20} />
                </div>
                <div className="story-step-content">
                  <h3>The Genesis of authentiQ</h3>
                  <p>
                    <strong>authentiQ was born from that experience</strong> — to bring pharmaceutical-grade discipline,
                    fitness-driven understanding, and genuine trust into every single product we create.
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent Quote Block */}
            <div className="founder-manifesto-quote">
              <div className="quote-mark-left">“</div>
              <p className="manifesto-text">
                With 18+ years in pharmaceutical manufacturing and 15+ years of living the fitness journey,
                I’ve experienced both precision and performance. A major health setback taught me the true value of quality,
                recovery, and resilience. That journey became the foundation of authentiQ Nutrition—where pharmaceutical expertise
                meets real fitness experience.
              </p>
              <div className="manifesto-author-sign">
                <strong>Vikram Shinde</strong>
                <span>Founder & Managing Director</span>
              </div>
            </div>

            {/* Core Mantras Banner */}
            <div className="mantras-container">
              <div className="mantra-pill mantra-pill-primary">
                <CheckCircle2 size={16} />
                <span>Built on Experience. Driven by Passion. Made with Purpose.</span>
              </div>
              <div className="mantra-pill mantra-pill-secondary">
                <ShieldCheck size={16} />
                <span>Built with Integrity. Driven by Experience. Made for Your Journey.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders & Core Leadership Grid */}
      <section className="about-section cofounders-section">
        <div className="about-page-container">
          <div className="section-header-centered">
            <span className="section-tag">Executive Leadership</span>
            <h2 className="section-heading">Strategic Vision & Operational Mastery</h2>
            <p className="section-subtext">
              The combined leadership behind authentiQ brings together enterprise growth, decisive governance, and deep pharmaceutical supply chain excellence.
            </p>
          </div>

          <div className="cofounders-grid">
            {/* Vishal Kumbhar Card */}
            <div className="cofounder-profile-card">
              <div className="cofounder-top-bar vishal-accent"></div>
              <div className="cofounder-header">
                <div className="cofounder-avatar vishal-bg">
                  <span>VK</span>
                  <div className="cofounder-verified-badge">
                    <ShieldCheck size={13} />
                  </div>
                </div>
                <div className="cofounder-meta">
                  <h3 className="cofounder-name">Vishal Kumbhar</h3>
                  <span className="cofounder-title">Co-Founder & Business Strategist</span>
                  <span className="cofounder-org">VMS Multiventures Healthcare</span>
                </div>
              </div>

              <div className="cofounder-tag-badge">
                <TrendingUp size={14} />
                <span>Enterprise Growth & Strategic Vision</span>
              </div>

              <p className="cofounder-bio">
                With extensive experience in leading businesses at scale, he brings strategic vision, sharp business insight,
                and decisive leadership to authentiQ—turning ideas into action and driving the organization forward.
              </p>

              <div className="cofounder-pillar-box vishal-pillar">
                <div className="pillar-dot"></div>
                <strong>Vision. Leadership. Momentum.</strong>
              </div>
            </div>

            {/* Sandeep Pekhale Card */}
            <div className="cofounder-profile-card">
              <div className="cofounder-top-bar sandeep-accent"></div>
              <div className="cofounder-header">
                <div className="cofounder-avatar sandeep-bg">
                  <span>SP</span>
                  <div className="cofounder-verified-badge">
                    <ShieldCheck size={13} />
                  </div>
                </div>
                <div className="cofounder-meta">
                  <h3 className="cofounder-name">Sandeep Pekhale</h3>
                  <span className="cofounder-title">Co-Founder & Operations Head</span>
                  <span className="cofounder-org">VMS Multiventures Healthcare</span>
                </div>
              </div>

              <div className="cofounder-tag-badge">
                <Truck size={14} />
                <span>20+ Yrs Pharma Supply Chain & Logistics</span>
              </div>

              <p className="cofounder-bio">
                With 20+ years of pharmaceutical industry experience, he brings deep expertise in logistics and operations,
                ensuring efficient supply chain management, seamless distribution, and timely delivery.
              </p>

              <div className="cofounder-pillar-box sandeep-pillar">
                <div className="pillar-dot"></div>
                <strong>20+ Years of Experience. Seamless Execution.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of the authentiQ Promise */}
      <section className="about-section pillars-promise-section">
        <div className="about-page-container">
          <div className="section-header-centered">
            <span className="section-tag">Our Benchmark</span>
            <h2 className="section-heading">The authentiQ Standard of Purity</h2>
            <p className="section-subtext">
              We eliminate proprietary blends, inflated claims, and sub-therapeutic dosages.
            </p>
          </div>

          <div className="pillars-cards-grid">
            <div className="promise-card">
              <div className="promise-card-icon">
                <FlaskConical size={26} />
              </div>
              <h3>Pharmaceutical Discipline</h3>
              <p>
                Every raw batch undergoes strict chromatographic identity, potency, and heavy-metal testing before entering production.
              </p>
            </div>

            <div className="promise-card">
              <div className="promise-card-icon">
                <Flame size={26} />
              </div>
              <h3>Real Athlete Tested</h3>
              <p>
                Formulated to satisfy the rigorous energetic and recovery requirements of high-performance lifters and dedicated fitness athletes.
              </p>
            </div>

            <div className="promise-card">
              <div className="promise-card-icon">
                <ShieldCheck size={26} />
              </div>
              <h3>100% Label Integrity</h3>
              <p>
                Zero hidden blends. Zero amino spiking. What is printed on the label is verified down to the milligram inside the container.
              </p>
            </div>

            <div className="promise-card">
              <div className="promise-card-icon">
                <Compass size={26} />
              </div>
              <h3>Direct Cold-Chain Custody</h3>
              <p>
                Stored in climate-controlled environments and delivered in tamper-evident packaging to preserve active nutrient bioavailability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Entity & Contact Information */}
      <section className="about-section corporate-info-section">
        <div className="about-page-container">
          <div className="corporate-grid">
            <div className="corporate-about-col">
              <span className="section-tag">Corporate Headquarters</span>
              <h2 className="corporate-title">VMS MULTIVENTURES HEALTHCARE PVT. LTD.</h2>
              <p className="corporate-desc">
                AuthentIQ Nutraceuticals is engineered and marketed by VMS Multiventures Healthcare Pvt. Ltd.,
                dedicated to elevating human vitality, physical potential, and wellness through certified science-backed nutraceutical innovations.
              </p>

              <div className="corporate-badges-row">
                <span className="cert-pill">WHO-GMP Compliant Facilities</span>
                <span className="cert-pill">ISO 22000 Certified</span>
                <span className="cert-pill">FSSAI Approved</span>
                <span className="cert-pill">Zero Banned Substances</span>
              </div>
            </div>

            <div className="corporate-contact-card">
              <h3 className="contact-card-title">Official Contact & Address</h3>
              
              <div className="contact-card-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-text">
                  <strong>Registered Office:</strong>
                  <span>Office No 404, Metropolis, Survey No 22/3, Balewadi High Street, Pune - 411045, Maharashtra, India.</span>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-text">
                  <strong>Direct Line:</strong>
                  <a href="tel:+917709337938">+91 7709337938</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-text">
                  <strong>Corporate Inquiries:</strong>
                  <a href="mailto:info@authentiqnutrition.com">info@authentiqnutrition.com</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <Globe size={18} />
                </div>
                <div className="contact-text">
                  <strong>Official Web Portal:</strong>
                  <a href="https://www.authentiqwellness.com" target="_blank" rel="noopener noreferrer">
                    www.authentiqwellness.com
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon">
                  <Instagram size={18} />
                </div>
                <div className="contact-text">
                  <strong>Official Community:</strong>
                  <a href="https://instagram.com/authentiq.nutrition" target="_blank" rel="noopener noreferrer">
                    @authentiq.nutrition
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="about-cta-section">
        <div className="about-page-container">
          <div className="about-cta-banner">
            <div className="about-cta-text">
              <h2>Ready to Fuel Your Journey with authentiQ?</h2>
              <p>Explore our pharma-grade formulations built with integrity, passion, and proven clinical science.</p>
            </div>
            <div className="about-cta-buttons">
              <button
                className="btn-primary about-shop-now-btn"
                onClick={() => onNavigateHome('products')}
              >
                <span>Explore Formulations</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn-secondary about-home-btn"
                onClick={() => onNavigateHome('home')}
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
