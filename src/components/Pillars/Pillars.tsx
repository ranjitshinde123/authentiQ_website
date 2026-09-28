import React from 'react';
import { FlaskConical, CheckCircle2, Zap, Award } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <div className="pillars-section">
      <div className="pillars">
        <div className="pillar-card">
          <div className="pillar-icon">
            <FlaskConical size={24} />
          </div>
          <div>
            <strong>Scientifically Formulated</strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Optimal dosing backed by research.
            </p>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <strong>Quality Assured</strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Third-party tested for purity.
            </p>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">
            <Zap size={24} />
          </div>
          <div>
            <strong>Performance Driven</strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Engineered for higher training output.
            </p>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">
            <Award size={24} />
          </div>
          <div>
            <strong>Trusted by Athletes</strong>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              No banned substances, 100% clean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
