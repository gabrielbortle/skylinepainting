import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="overlay">
        <div className="content">
          <h1 className="hero-title">
            Welcome to Skyline Painting
          </h1>
          <p className="hero-subtitle">
            Over <span className="highlight">19 years of experience</span> delivering excellence.
          </p>
          <p className="hero-description">
            <span className="highlight">Top Quality Assurance</span> &amp; <span className="highlight">Customer Satisfaction</span>
          </p>
          <div className="contact-numbers">
            <p><span className="highlight">(208) 701 - 8837</span></p>
            <p><span className="highlight">(208) 313 - 9266</span></p>
          </div>
          <Link to="/contact" className="cta-button">
            Request a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
