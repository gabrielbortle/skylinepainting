import React from 'react';
import './ServicesHero.css'; // Ensure the CSS file name is correct

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="hero-content">
        <h1 className="hero-title">Our Services</h1>
        <p className="hero-description">
          Transforming your space with <span className="highlight">quality craftsmanship</span> and <span className="highlight">professional painting services</span>
        </p>
        <a href="#services" className="cta-button">Explore Our Services</a>
      </div>
    </section>
  );
}

export default ServicesHero;
