import React, { useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    icon: FaCode,
    title: 'Website Development',
    para: 'Responsive, SEO-friendly, and high-performance websites built using modern technologies.',
    label: "Read More"
  },
  {
    icon: FaCode,
    title: 'Mobile App Development',
    para: 'Beautiful cross-platform mobile apps using React Native and Flutter.',
    label: "Read More"
  },
  {
    icon: FaCode,
    title: 'UI/UX Design',
    para: 'Intuitive and sleek user experiences tailored to your audience.',
    label: "Read More"
  },
  {
    icon: FaCode,
    title: 'API Integration',
    para: 'Secure and scalable APIs integration for your apps and platforms.',
    label: "Read More"
  }
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="relative w-full py-20 px-4 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-black" data-aos="zoom-out">OUR SERVICES</h1>
        <p className="text-lg text-gray-700 mt-4" data-aos="zoom-in">
          We deliver creative, modern, and scalable tech solutions for businesses of all sizes.
        </p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden sm:block relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-b-8 border-red-500
              flex flex-col items-center text-center transition-transform duration-100 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr hover:from-gray-100 hover:via-white hover:to-gray-50"
              style={{ minHeight: '420px' }}
            >
              <div className="bg-red-500 p-5 rounded-full mb-6 shadow-md transition-colors duration-300 ease-in-out hover:bg-red-600">
                <item.icon className="w-[40px] h-[40px] text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-black">{item.title}</h2>
              <p className="text-base text-gray-600 mb-6 px-2">{item.para}</p>
              <button className="px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-100 ease-in-out">
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Layout */}
      <div className="block sm:hidden relative z-10 space-y-6 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-b-[6px] border-red-500
            flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-tr hover:from-gray-100 hover:via-white hover:to-gray-50"
          >
            <div className="bg-red-500 p-5 rounded-full mb-6 shadow-md transition-colors duration-300 ease-in-out hover:bg-red-600">
              <item.icon className="w-[40px] h-[40px] text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-black">{item.title}</h2>
            <p className="text-base text-gray-600 mb-6 px-2">{item.para}</p>
            <button className="px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
