import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your custom images here
import WebDevImg from '../assets/homescreen.png';
import MobileAppImg from '../assets/homescreen.png';
import UIUXImg from '../assets/homescreen.png';
import ApiImg from '../assets/homescreen.png';

const data = [
  {
    img: WebDevImg,
    title: 'Website Development',
    para: 'Responsive, SEO-friendly, and high-performance websites built using modern technologies.',
    label: "Read More"
  },
  {
    img: MobileAppImg,
    title: 'Mobile App Development',
    para: 'Beautiful cross-platform mobile apps using React Native and Flutter.',
    label: "Read More"
  },
  {
    img: UIUXImg,
    title: 'UI/UX Design',
    para: 'Intuitive and sleek user experiences tailored to your audience.',
    label: "Read More"
  },
  {
    img: ApiImg,
    title: 'API Integration',
    para: 'Secure and scalable APIs integration for your apps and platforms.',
    label: "Read More"
  }
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="relative w-full py-20 px-4 lg:px-20 overflow-hidden bg-white">
      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-black" data-aos="zoom-out">
          OUR <span className="text-red-500">SERVICES</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4" data-aos="zoom-in">
          We deliver creative, modern, and scalable tech solutions for businesses of all sizes.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:border-red-400"
            >
              <div className="w-full h-[180px] mb-6 overflow-hidden rounded-xl shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-black">{item.title}</h2>
              <p className="text-base text-gray-600 mb-4">{item.para}</p>
              <button className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300">
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
