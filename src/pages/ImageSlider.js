import React, { useEffect, useRef } from 'react';
import './css/image-slider.css';
import img1 from "./image1.jpg";
import img2 from "./image2.jpg";
import img3 from "./image3.jpg";

const ImageSlider = () => {
    const images = [img1, img2, img3];
    const sliderRef = useRef(null);
  
    useEffect(() => {
      let currentIndex = 0;
      const slider = sliderRef.current;
  
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 2000);
  
      return () => {
        clearInterval(interval);
      };
    }, [images.length]);
  
    return (
      <div className="image-slider">
        <div className="slider" ref={sliderRef}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSlider;

