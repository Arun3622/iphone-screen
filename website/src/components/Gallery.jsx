// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF/808080',
    'https://via.placeholder.com/150/FF0000/FFFFFF',
    // Add more image URLs as needed
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-images">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
