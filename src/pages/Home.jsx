import React from 'react';
import HomeHero from '../components/HomeHero/HomeHero';
import AboutUs from '../components/AboutMe/AboutMe';
import ServicesIntro from '../components/ServicesIntro/ServicesIntro';
import ProudlyServing from '../components/ProudlyServing/ProudlyServing';

const Home = () => {
  return(
    <div>
      <HomeHero />

      <AboutUs />

      <ServicesIntro />

      <ProudlyServing />
    </div>
  );
};

export default Home;
