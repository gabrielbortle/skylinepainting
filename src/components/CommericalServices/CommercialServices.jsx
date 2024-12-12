import React from 'react';
import './CommercialServices.css';
import CommercialImage from '../../assets/image1.jpg';

const CommercialServices = () => {
  return (
    <div className="service-box">
      <h2>Commercial Services</h2>
      <img
        src={CommercialImage}
        alt="Commercial Painting"
        className="service-image"
      />
      <details className="service-details">
        <summary>
          Office Painting
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Our office painting services are designed to create a professional and inviting environment for your team and clients.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Retail Space Painting
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We specialize in transforming retail spaces to reflect your brand’s personality and attract customers.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Apartments
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We offer painting services for apartment buildings, ensuring a fresh, modern look for both interiors and exteriors that appeals to tenants and increases property value.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Hotels
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Our hotel painting services bring a fresh, welcoming look to your establishment, enhancing both guest experiences and overall aesthetics.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Stores
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We provide professional painting for retail stores, focusing on creating an attractive, cohesive design that aligns with your brand’s identity.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Warehouses
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Our warehouse painting services focus on durability and safety, offering high-quality finishes that withstand the demands of industrial environments.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Office Spaces
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We help businesses enhance their office spaces with professional painting services, improving both functionality and the work environment.
        </div>
      </details>
    </div>
  );
};

export default CommercialServices;
