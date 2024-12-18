"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Home_bg from "../public/Home_img/Home_bg.png";
import li_send from "../public/Home_img/li_send.png";
import Hreo_img from "../public/Home_img/Hreo_img.png";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 0,
      title: "Don't miss our daily",
      subtitle: "amazing deals.",
      description: "Save up to 60% off on your first order",
      bgImage: Home_bg,
      heroImage: Hreo_img,
    },
    {
      id: 1,
      title: "Exclusive Offers Just for You",
      subtitle: "Limited Time Only.",
      description: "Shop now and get 50% off on all items",
      bgImage: Home_bg,
      heroImage: Hreo_img,
    },
  ];

  // Handle slider scroll on dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  };

  // Handle click on individual slide to trigger scrolling
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="w-full h-full relative overflow-hidden"
        ref={sliderRef}
        style={{
          display: "flex",
          transition: "scroll 1s ease",
        }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.bgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleSlideClick(index)} // Corrected this line by removing the comment inside JSX
          >
            {/* Background color overlay */}
            <div className="absolute inset-0 bg-teal-200 bg-opacity-75"></div>
            {/* Slide Content */}
            <div className="relative z-20 sm:flex justify-between items-center h-full pl-2 sm:pl-8 lg:pl-24">
              {/* Hero Image */}
              <div className="order-first sm:order-last">
                <Image
                  src={slide.heroImage}
                  alt="Hero Image"
                  className="relative z-30"
                />
              </div>
              <div className="flex flex-col items-start mb-10 sm:mb-0">
                <h1 className="text-3xl lg:text-5xl font-mono font-semibold">
                  <span className="block">{slide.title}</span>
                  <span className="block">{slide.subtitle}</span>
                </h1>
                <p className="py-2 sm:py-4 lg:py-8 text-gray-800 text-base lg:text-lg lg:font-medium">
                  {slide.description}
                </p>
                <div className="flex items-center bg-white shadow-lg">
                  <Image src={li_send} alt="Send Icon" className=" ml-2" />
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="pl-4 outline-none flex-grow text-xs sm:text-base"
                  />
                  <button className="bg-green-600 text-white text-sm sm:text-base px-3 lg:px-6 py-2 lg:py-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute flex justify-center items-center bottom-5 left-1/2 transform -translate-x-1/2 gap-2 z-30">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentSlide === index
                ? "bg-green-500"
                : " border-2 border-gray-700"
            }`}
            alt={slide.title}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Home;
