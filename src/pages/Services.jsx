import React from 'react';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import { div } from 'framer-motion/m';
import ServicesHero from '../components/ServicesHero/ServicesHero';
import CustomProjects from '../components/CustomProjects/CustomProjects';

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesSection />
      <CustomProjects />

    </div>
  )
};

export default Services;
