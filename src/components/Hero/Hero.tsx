import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <a href="#products" className="hero-overlay-link" aria-label="Shop Bestsellers"></a>
      <div className="hero-content visually-hidden">
        <div className="hero-badge">Your Journey. Our Nutrition. Better Everyday.</div>
        <h1>FUELING AMBITIONS. POWERING PERFORMANCE.</h1>
        <p>
          Scientifically formulated nutraceuticals and performance supplements designed for transparency, raw power, and proven results.
        </p>
        <div className="hero-btns">
          <a href="#products" className="btn-primary">Explore Formulations</a>
          <a href="#about" className="btn-secondary">About AuthentIQ</a>
        </div>
      </div>
    </section>
  );
};
