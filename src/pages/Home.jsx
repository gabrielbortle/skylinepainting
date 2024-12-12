import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import AboutUs from '../components/AboutMe/AboutMe';
import ServicesIntro from '../components/ServicesIntro/ServicesIntro';

const Home = () => {
  return(
    <div>
      <HomeHero />

      <AboutUs />

      <ServicesIntro />

      
    </div>
  );
};

export default Home;
