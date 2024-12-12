import React, { useState } from 'react';
import './Gallery.css';

// Import images
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image7.jpg'



const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  const openModal = (index) => {
    setModalImage(images[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setModalImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setModalImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Prevent modal close when clicking on the arrow buttons
  const handleArrowClick = (e) => {
    e.stopPropagation(); // Stop event propagation to the modal overlay
  };

  return (
    
    <div className="gallery-container">
            <section id='gallery-section'></section>

      <h2>Portfolio Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(index)}>
            <img src={image} alt={`Project ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged project" className="modal-image" />
          </div>

          {/* Close button outside image */}
          <button className="close-btn" onClick={closeModal}>×</button>

          {/* Navigation buttons outside image */}
          <button 
            className="nav-btn prev" 
            onClick={(e) => { handleArrowClick(e); prevImage(); }}
          >
            &#10094;
          </button>
          <button 
            className="nav-btn next" 
            onClick={(e) => { handleArrowClick(e); nextImage(); }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
