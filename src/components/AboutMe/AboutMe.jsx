import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutMe.css'; // Assuming you have a separate CSS file for styling
import Chino from '../../assets/chino.jpg'

const AboutUs = () => {
  // Animation settings for entering the viewport
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <motion.div
          className="about-us-image"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Triggers when half of the element is in the viewport
        >
          <img src={Chino} alt="Chino Ortiz" />
        </motion.div>
        
        <motion.div
          className="about-us-content"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Triggers when half of the element is in the viewport
        >
          <h2>About Us</h2>
          <h3>I'm Chino Ortiz, the founder of Skyline Painting.</h3>
          <p>
            I am dedicated to providing exceptional painting services with over 19 years of experience. Driven by a commitment to quality and customer satisfaction, over the last 3 years, Skyline Painting has become a trusted name in the industry. Our team is ready to take on any job you have for us!
          </p>
          <p>Thank you for considering Skyline Painting for your project. We look forward to working with you!</p>
          
          {/* Button that links to /contact */}
          <Link to="/contact">
            <motion.button
              className="contact-button"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
