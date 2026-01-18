import React, { useState, useEffect } from 'react';
import Hero_01 from '../assets/Hero-01.jpeg';
import Hero_02 from '../assets/Hero-02.jpeg';
import Hero_03 from '../assets/Hero-03.jpeg';
import Hero_04 from '../assets/Hero-04.jpeg';

const Carousel = () => {
  const images = [
    Hero_01,
    Hero_02,
    Hero_03,
    Hero_04
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img} alt="School" className="h-full w-full object-cover" />
          <div className="absolute bottom-0 bg-black/40 p-4 text-white w-full">
            <p className="font-bold">Welcome to Our Campus</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;