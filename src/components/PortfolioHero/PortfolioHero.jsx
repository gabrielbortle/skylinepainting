// PortfolioHero.jsx
import React from "react";
import "./PortfolioHero.css";

const PortfolioHero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery-section");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-content">
        <h1 className="hero-title">
          Showcasing <span className="highlight">Excellence</span>
        </h1>
        <p className="hero-tagline">
          Explore <span className="highlight">carefully crafted designs</span> and <span className="highlight">thoughtful projects</span> that make an impact.
        </p>

        <button className="hero-cta" onClick={scrollToGallery}>View Our Work</button>
      </div>
    </section>
  );
};

export default PortfolioHero;
