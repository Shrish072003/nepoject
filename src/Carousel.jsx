import React, { useState, useEffect } from "react";
import ca1 from './ca1.png';
import ca2 from './ca2.png';
import ca3 from './ca3.png';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [ca1, ca2, ca3];

  // Handle Next Slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle Previous Slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Go to Specific Slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3000ms = 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="relative w-full" data-carousel="slide">
      {/* Carousel Wrapper */}
      <div className="relative imc overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="absolute block imc2 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default Carousel;
