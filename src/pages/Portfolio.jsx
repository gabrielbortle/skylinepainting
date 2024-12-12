import { div } from 'framer-motion/client';
import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import PortfolioHero from '../components/PortfolioHero/PortfolioHero';
import LogoCarousel from '../components/LogoCarousel/LogoCarousel';

const Portfolio = () => {
  return(
    <div>
      <PortfolioHero />
      <Gallery />

      <LogoCarousel />
    </div>
  );
};

export default Portfolio;
