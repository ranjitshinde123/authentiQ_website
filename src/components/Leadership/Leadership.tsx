import React from 'react';
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
  HeartPulse
} from 'lucide-react';

export const Leadership: React.FC = () => {
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

      <div className="founders-container">
        {/* 1st Place: Vikram Shinde (Founder & Actual Owner) */}
        <div className="founder-hero-card">
          <div className="founder-hero-badge">
            <Sparkles size={16} /> Principal Founder & Visionary
          </div>

          <div className="founder-hero-layout">
            <div className="founder-profile-col">
              <div className="founder-avatar-wrapper">
                <div className="founder-avatar primary-avatar">
                  <span>VS</span>
                  <div className="avatar-status-badge" title="Verified Founder">
                    <ShieldCheck size={18} />
                  </div>
                </div>
                <div className="founder-identity">
                  <h3>Vikram Shinde</h3>
                  <p className="founder-role">Founder & Managing Director</p>
                  <span className="founder-org">VMS Multiventures Healthcare</span>
                </div>
              </div>

              <div className="founder-stats-grid">
                <div className="founder-stat-item">
                  <div className="stat-icon red-glow">
                    <FlaskConical size={20} />
                  </div>
                  <div className="stat-info">
                    <h4>18+ Years</h4>
                    <p>Pharma Manufacturing Head</p>
                  </div>
                </div>

                <div className="founder-stat-item">
                  <div className="stat-icon blue-glow">
                    <Dumbbell size={20} />
                  </div>
                  <div className="stat-info">
                    <h4>15+ Years</h4>
                    <p>Fitness & Bodybuilding Passion</p>
                  </div>
                </div>

                <div className="founder-stat-item">
                  <div className="stat-icon amber-glow">
                    <HeartPulse size={20} />
                  </div>
                  <div className="stat-info">
                    <h4>Real Comeback</h4>
                    <p>Health Setback to Resilience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="founder-content-col">
              <div className="story-paragraphs">
                <div className="story-item">
                  <div className="story-bullet">
                    <CheckCircle2 size={18} color="var(--accent-red)" />
                  </div>
                  <p>
                    With <strong>18+ years in pharmaceutical manufacturing</strong>, including leadership as a Manufacturing Head, quality and precision have always been at the core of my work.
                  </p>
                </div>

                <div className="story-item">
                  <div className="story-bullet">
                    <CheckCircle2 size={18} color="var(--accent-red)" />
                  </div>
                  <p>
                    With <strong>15+ years of passion for fitness and bodybuilding</strong>, I have lived the discipline and demands of the fitness journey firsthand.
                  </p>
                </div>

                <div className="story-item">
                  <div className="story-bullet">
                    <CheckCircle2 size={18} color="var(--accent-red)" />
                  </div>
                  <p>
                    After facing a <strong>major health setback and making my own comeback</strong>, my perspective on health and supplementation changed forever.
                  </p>
                </div>

                <div className="story-item">
                  <div className="story-bullet">
                    <CheckCircle2 size={18} color="var(--accent-red)" />
                  </div>
                  <p>
                    authentiQ was born from that experience — to bring <strong>pharmaceutical-grade discipline, fitness-driven understanding, and genuine trust</strong> into every product we create.
                  </p>
                </div>
              </div>

              {/* Highlight Quote Block */}
              <div className="founder-quote-banner">
                <Quote className="quote-watermark" size={56} />
                <p className="quote-text">
                  &ldquo;With 18+ years in pharmaceutical manufacturing and 15+ years of living the fitness journey, I’ve experienced both precision and performance. A major health setback taught me the true value of quality, recovery, and resilience. That journey became the foundation of authentiQ Nutrition—where pharmaceutical expertise meets real fitness experience.&rdquo;
                </p>
                <div className="quote-author-sign">
                  — <strong>Vikram Shinde</strong>, Founder
                </div>
              </div>

              <div className="founder-tagline-ribbon">
                <div className="tagline-pill">
                  <Flame size={15} /> Built on Experience. Driven by Passion. Made with Purpose.
                </div>
                <div className="tagline-pill accent">
                  <Award size={15} /> Built with Integrity. Driven by Experience. Made for Your Journey.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd & 3rd Leaders Grid */}
        <div className="co-founders-grid">
          {/* Vishal Kumbhar */}
          <div className="co-founder-card">
            <div className="co-founder-header">
              <div className="co-founder-avatar-wrap">
                <div className="co-founder-avatar">
                  <span>VK</span>
                </div>
                <div className="co-founder-meta">
                  <h3>Vishal Kumbhar</h3>
                  <p className="co-role">Co-Founder & Strategic Business Leadership</p>
                  <span className="co-badge">Strategic Growth</span>
                </div>
              </div>
              <div className="co-icon-indicator">
                <TrendingUp size={24} />
              </div>
            </div>

            <div className="co-founder-body">
              <p className="co-bio">
                With extensive experience in leading businesses at scale, he brings strategic vision, sharp business insight, and decisive leadership to authentiQ—turning ideas into action and driving the organization forward.
              </p>
            </div>

            <div className="co-founder-footer">
              <div className="co-tagline">
                <span>&ldquo;Vision. Leadership. Momentum.&rdquo;</span>
              </div>
            </div>
          </div>

          {/* Sandeep Pekhale */}
          <div className="co-founder-card">
            <div className="co-founder-header">
              <div className="co-founder-avatar-wrap">
                <div className="co-founder-avatar">
                  <span>SP</span>
                </div>
                <div className="co-founder-meta">
                  <h3>Sandeep Pekhale</h3>
                  <p className="co-role">Co-Founder & Operations / Logistics Head</p>
                  <span className="co-badge">Supply Chain Master</span>
                </div>
              </div>
              <div className="co-icon-indicator">
                <Truck size={24} />
              </div>
            </div>

            <div className="co-founder-body">
              <p className="co-bio">
                With 20+ years of pharmaceutical industry experience, he brings deep expertise in logistics and operations, ensuring efficient supply chain management, seamless distribution, and timely delivery.
              </p>
            </div>

            <div className="co-founder-footer">
              <div className="co-tagline">
                <span>&ldquo;20+ Years of Experience. Seamless Execution.&rdquo;</span>
              </div>
            </div>
          </div>
        </div>

        {/* VMS Healthcare Trust Strip */}
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
