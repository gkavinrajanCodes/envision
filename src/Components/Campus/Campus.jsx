// Campus.jsx
import React, { useState, useEffect } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery1.jpg';
import gallery_2 from '../../assets/gallery2.jpg';
import gallery_3 from '../../assets/gallery3.jpg';
import gallery_4 from '../../assets/gallery4.jpg';
import gallery_5 from '../../assets/gallery5.jpg';
import left_arrow from '../../assets/back-icon.png';  // Make sure to import your arrow images
import right_arrow from '../../assets/next-icon.png';

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [images.length]);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setSelectedImage(null);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className='campus' id='gallery'>
      <div className='gallery'>
        <div className="carousel-wrapper">
          <img 
            src={left_arrow} 
            alt="Previous" 
            className="gallery-arrow gallery-arrow-left"
            onClick={() => {
              setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
            }}
          />
          
          <div className="gallery-track">
            {images.map((image, index) => {
              let position = 'hidden';
              
              if (index === currentIndex) {
                position = 'center';
              } else if (
                index === (currentIndex - 1 + images.length) % images.length
              ) {
                position = 'left';
              } else if (
                index === (currentIndex + 1) % images.length
              ) {
                position = 'right';
              }
              
              return (
                <div
                  key={index}
                  className={`gallery-slide ${position}`}
                  onClick={() => {
                    if (position === 'center') {
                      handleImageClick(index);
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                >
                  <img src={image} alt={`Gallery ${index + 1}`} />
                  <div className="slide-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <img 
            src={right_arrow} 
            alt="Next" 
            className="gallery-arrow gallery-arrow-right"
            onClick={() => {
              setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
            }}
          />
        </div>
        
        {/* Carousel indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <img 
              src={left_arrow} 
              alt="Previous" 
              className="modal-arrow modal-arrow-left"
              onClick={handlePrevImage}
            />
            <img src={selectedImage} alt="" className="modal-image" />
            <img 
              src={right_arrow} 
              alt="Next" 
              className="modal-arrow modal-arrow-right"
              onClick={handleNextImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Campus;