import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";

import image1 from '/homescreen.webp';
import image2 from '/archphaze.webp';
import image3 from '/homescreen.webp';

import Services from './Services';
import Whyus from './Whyus';
import Testimonial from './Testimonial';

function getRandomGradient() {
  return `linear-gradient(135deg, #ff0000, #cc0000)`; 
}

export default function Index() {
  const [currentImage, setCurrentImage] = useState(0);
  const [cardGradient, setCardGradient] = useState(getRandomGradient());
  const images = [image1, image2, image3];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);

    setCardGradient(getRandomGradient());

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="pt-6 bg-gradient-to-b from-white to-white-500 flex items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 px-6 md:px-12 xl:px-20 py-12">
          
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-8 text-center md:text-left" data-aos="fade-right">
            <p className="text-red-500 uppercase font-medium tracking-wide">
              BUILD.HOST.LAUNCH
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Innovative <span className="text-red-500">Tech Solutions</span> for Your Business
            </h1>

            <ReactTyped
              className='text-gray-600 text-base sm:text-lg'
              strings={['Empowering startups and enterprises with modern web and mobile technologies. Let’s create something impactful together.']}
              typeSpeed={40}
            />

            <div>
              <button
                className="px-6 py-3 font-semibold rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:from-pink-600 hover:to-red-500 hover:scale-105 hover:shadow-2xl transition transform duration-300 ease-in-out cursor-pointer"
              >
                Build With Us
              </button>
            </div>
          </div>

          {/* Optimized Image Section */}
          <div className="flex justify-center items-center relative" data-aos="fade-left">
            <div
              className="relative w-full max-w-[600px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-2xl"
              style={{
                borderWidth: '3px',
                borderRadius: '0',
                borderStyle: 'solid',
                borderImageSlice: 1,
                borderImageSource: cardGradient,
                backgroundColor: '#ffffff',
                boxShadow: `0 0 20px 4px ${cardGradient}`,
              }}
            >
              <img
                src={images[currentImage]}
                alt={`Slide ${currentImage + 1}`}
                className="absolute inset-0 w-full h-full object-contain z-10"
                loading="eager"
                decoding="async"
              />

              {/* Optional Subtle Glow */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-overlay animate-pulse opacity-10 bg-gradient-to-br from-white via-transparent to-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Whyus />
      <Testimonial />
    </>
  );
}
