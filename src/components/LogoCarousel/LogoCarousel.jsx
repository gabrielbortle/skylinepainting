import React from 'react';
import Slider from 'react-slick';
import './LogoCarousel.css'; // Assuming you have this file for styles
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.png';
import Logo3 from '../../assets/logo3.png';
import Logo4 from '../../assets/logo4.png';
import Logo5 from '../../assets/logo5.png';
import Logo6 from '../../assets/logo6.png';
import Logo7 from '../../assets/logo7.png';
import Logo8 from '../../assets/logo8.png';
import Logo9 from '../../assets/logo9.png';

const LogoCarousel = () => {
  const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9
    // Add your logos here
  ];

  const settings = {
    infinite: true,
    speed: 1000, // Controls how fast the transition happens
    autoplay: true, // Enable autoplay
    autoplaySpeed: 300, // Adjust this to slow it down or speed it up
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="logo-carousel">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
