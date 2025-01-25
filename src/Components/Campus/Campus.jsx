// Campus.jsx
import React, { useState } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/image-2.jpg';
import gallery_2 from '../../assets/image1.jpg';
import gallery_3 from '../../assets/image4.jpg';
import gallery_4 from '../../assets/galleryimage7.jpeg';
import gallery_5 from '../../assets/galleryimage8.jpeg';
import gallery_6 from '../../assets/galleryimage9.jpeg';
import left_arrow from '../../assets/back-icon.png';  // Make sure to import your arrow images
import right_arrow from '../../assets/next-icon.png';

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6];

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
        <div className="gallery-container">
          <img 
            src={left_arrow} 
            alt="Previous" 
            className="gallery-arrow gallery-arrow-left"
            onClick={() => {
              setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
            }}
          />
          
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`gallery-image ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
              style={{ display: currentIndex === index ? 'block' : 'none' }}
            />
          ))}
          
          <img 
            src={right_arrow} 
            alt="Next" 
            className="gallery-arrow gallery-arrow-right"
            onClick={() => {
              setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
            }}
          />
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