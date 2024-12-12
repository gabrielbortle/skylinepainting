// src/components/ContactInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ContactInfo.css'; // Custom CSS for styling

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Talk!
      </motion.h2>

      <motion.div
        className="contact-details"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="contact-description">
          Chino Ortiz is available for inquiries.<br /> Feel free to reach out via the
          phone numbers or email provided below.
        </p>

        <motion.div
          className="contact-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3>Phone:</h3>
          <ul>
            <li>(208) 701 - 8837</li>
            <li>(208) 313 - 9266</li>
          </ul>
        </motion.div>

        <motion.div
          className="contact-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3>Email:</h3>
          <a href="mailto:Skylinepanting27@gmail.com">
            Skylinepanting27@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
