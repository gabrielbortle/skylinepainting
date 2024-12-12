import React from 'react';
import './ResidentialServices.css';
import ResidentialImage from '../../assets/image5.jpg';

const ResidentialServices = () => {
  return (
    <div className="service-box">
      <h2>Residential Services</h2>
      <img
        src={ResidentialImage}
        alt="Residential Painting"
        className="service-image"
      />
      <details className="service-details">
        <summary>
          Interior Painting
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We provide top-notch interior painting services, transforming your living spaces with the colors you love.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Exterior Painting
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Enhance the curb appeal of your home with our expert exterior painting services, offering lasting results.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Prefinish Painting
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Our prefinish painting service offers superior finishes on materials before installation, ensuring a flawless look every time.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Staining
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Whether it’s for furniture, decks, or fences, our staining services bring out the natural beauty of wood with long-lasting protection.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Exterior Siding
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We specialize in painting and staining exterior siding to protect and beautify the outside of your home, adding curb appeal and value.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Decks
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          Our deck painting and staining services will protect your outdoor space from the elements while enhancing its natural beauty and longevity.
        </div>
      </details>
      <details className="service-details">
        <summary>
          Fences
          <span className="summary-arrow">&#x25BC;</span> {/* Downward arrow */}
        </summary>
        <div className="service-description">
          We provide professional fence painting and staining services to enhance durability and improve the overall appearance of your outdoor spaces.
        </div>
      </details>
    </div>
  );
};

export default ResidentialServices;
