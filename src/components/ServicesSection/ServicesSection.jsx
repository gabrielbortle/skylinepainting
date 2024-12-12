import React from 'react';
import ResidentialServices from '../ResidentialServices/ResidentialServices';
import CommercialServices from '../CommericalServices/CommercialServices';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
    <CommercialServices />

      <ResidentialServices />
    
    </section>
  );
};

export default ServicesSection;
