import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ProudlyServing.css'; // Assuming you have a separate CSS file for styling
import Serving from '../../assets/states.jpg'

const ProudlyServing = () => {
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
          <img src={Serving} alt="Chino Ortiz" />
        </motion.div>
        
        <motion.div
          className="about-us-content"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Triggers when half of the element is in the viewport
        >
          <h3>We're Proud to Serve Idaho, Wyoming, Utah, and Montana!</h3>
<p>
  Based in the heart of Teton Valley, Skyline Painting is committed to delivering top-tier painting services across four states. Whether you're in Idaho, Wyoming, Utah, or Montana, we’re ready to transform your space with the highest quality of work.
</p>

          {/* Button that links to /contact */}
          <Link to="/portfolio">
            <motion.button
              className="contact-button"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
             Our Portfolio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProudlyServing;
