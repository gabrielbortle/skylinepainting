import { div } from 'framer-motion/client';
import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import PortfolioHero from '../components/PortfolioHero/PortfolioHero';

const Portfolio = () => {
  return(
    <div>
      <PortfolioHero />
      <Gallery />
    </div>
  );
};

export default Portfolio;
