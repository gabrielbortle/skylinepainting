import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ServicesIntro.css'; // Assuming you have a separate CSS file for styling
import Services from '../../assets/image1.jpg'

const ServicesIntro = () => {
  // Animation settings for entering the viewport
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <section className="services-section">
      <div className="services-container">

      <motion.div
          className="services-image"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src= {Services} alt="Services" />
        </motion.div>
        <motion.div
          className="services-text"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <p>
            At Skyline Painting, we offer a wide range of services, from residential to commercial projects. Whether you're looking to freshen up your home or need a complete overhaul for your commercial space, our experienced team is ready to handle any job with precision and care.
          </p>
          {/* Button that links to /services */}
          <Link to="/services">
            <motion.button
              className="services-button"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              View Our Services
            </motion.button>
          </Link>
        </motion.div>

       
      </div>
    </section>
  );
};

export default ServicesIntro;
