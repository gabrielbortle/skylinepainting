import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHero.css'; // Make sure you have your custom styles here

const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="overlay-text">
        <h1 className="hero-title">
          <strong>Welcome to Skyline Painting</strong>
        </h1>
        <h3 className="hero-subtitle">
          With over <em>19 years of experience</em> in the industry
        </h3>
        <h4 className="hero-cta">
          <em>Top Quality Assurance</em> &amp; <em>Dedication to Customer Satisfaction</em>
        </h4>
        <div className="numbers">
          <p className="phone-number">(208) 701 - 8837</p>
          <p className="phone-number">(208) 313 - 9266</p>
        </div>
        <Link to="/contact" className="cta-button">
          Request a Free Quote
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
