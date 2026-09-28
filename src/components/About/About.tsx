import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <div>
          <span className="section-tag">Company Background</span>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Committed to Elevating Human Performance
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
            AuthentIQ Nutraceuticals is committed to delivering science-backed, premium quality supplements that empower
            individuals to achieve their health and performance goals.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Our products are manufactured in state-of-the-art facilities with the highest quality standards and purity you
            can trust.
          </p>
        </div>

        <div className="about-card" id="contact">
          <span className="company-badge">Marketed By</span>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            VMS MULTIVENTURES HEALTHCARE PVT. LTD.
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Office No 404, Metropolis, Survey No 22/3, Balewadi High Street, Pune - 411045.
          </p>
          <hr style={{ border: 0, borderTop: '1px solid var(--border)', marginBottom: '1.5rem' }} />
          <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <strong>Phone:</strong> +91 7709337938
          </p>
          <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <strong>Email:</strong> info@authentiqnutrition.com
          </p>
          <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            <strong>Website:</strong> www.authentiqwellness.com
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            <strong>Instagram:</strong> @authentiq.nutrition
          </p>
        </div>
      </div>
    </section>
  );
};
