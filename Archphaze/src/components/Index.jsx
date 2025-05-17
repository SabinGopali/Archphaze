import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";

import image1 from '../assets/homescreen.png';
import image2 from '../assets/archphaze1.png';
import image3 from '../assets/homescreen.png';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(135deg, ${color1}, ${color2})`;
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
    <div className="pt-12 bg-gradient-to-b from-white to-white-500 flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 px-6 md:px-12 xl:px-20 py-12">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-8 text-center md:text-left">
          <p className="text-red-500 uppercase font-medium tracking-wide" data-aos="fade-up">
            BUILD.HOST.LAUNCH
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900" data-aos="zoom-in">
            Innovative <span className="text-red-500">Tech Solutions</span> for Your Business
          </h1>

          <ReactTyped
            className='text-gray-600 text-base sm:text-lg'
            strings={['Empowering startups and enterprises with modern web and mobile technologies. Let’s create something impactful together.']}
            typeSpeed={40}
          />

          <div>
            <button className="px-5 py-3 border border-black rounded-md hover:bg-black hover:text-white transition">
              Build With Us
            </button>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div className="flex justify-center items-center relative" style={{ perspective: 1500 }}>
          <div
            className="relative w-full max-w-[600px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden shadow-2xl"
            style={{
              borderWidth: '3px',
              borderRadius: '0', // Sharp corners
              borderStyle: 'solid',
              borderImageSlice: 1,
              borderImageSource: cardGradient,
              backgroundColor: '#ffffff',
              boxShadow: `
                0 0 20px 4px ${cardGradient},
                inset 0 10px 25px rgba(0,0,0,0.1),
                0 25px 50px rgba(0,0,0,0.3)
              `,
              transform: 'rotateY(-20deg) rotateX(10deg) rotateZ(-3deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                  currentImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  borderRadius: '0px', // match parent
                  transform: 'translateZ(30px)',
                }}
              />
            ))}

            {/* Optional Glow Overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-overlay animate-pulse opacity-10 bg-gradient-to-br from-white via-transparent to-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
