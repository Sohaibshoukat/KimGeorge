import React, { useState } from 'react';
import client1 from '../assets/Clients/client-1.png';
import client2 from '../assets/Clients/client-2.png';
import client3 from '../assets/Clients/client-3.png';
import client4 from '../assets/Clients/client-4.png';

const ImageSlider = () => {
  const images = [client1, client2, client3, client4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-auto flex justify-center items-center my-10">
      <div className="relative w-190 h-auto overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out mx-10" style={{ transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-190 px-2 mx-2 my-2"
            />
          ))}
        </div>
      
      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 ${currentImageIndex === 0 ? 'invisible' : ''}`}
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 ${currentImageIndex === images.length - 1 ? 'invisible' : ''}`}
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      </div>
    </div>
  );
};

export default ImageSlider;
