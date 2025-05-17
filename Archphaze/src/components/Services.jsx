import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.firstChild.getBoundingClientRect().width + 24; // 24px gap approx
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full py-20 px-4 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-black" data-aos="zoom-out">OUR SERVICES</h1>
        <p className="text-lg text-gray-700 mt-4" data-aos="zoom-in">
          We deliver creative, modern, and scalable tech solutions for businesses of all sizes.
        </p>
      </div>

      {/* Desktop Custom Carousel without arrows */}
      <div className="hidden sm:block relative z-10 w-full">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6"
          style={{
            
            paddingLeft: '1rem',
            paddingRight: '1rem',
            justifyContent: 'center',
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`group bg-white p-8 rounded-2xl shadow-lg border-b-8 border-red-400
              flex flex-col items-center text-center h-full min-w-[250px] flex-shrink-0 scroll-snap-align-start
              transition duration-500 ease-in-out transform hover:-translate-y-4 hover:rotate-[1deg] hover:shadow-2xl`}
              style={{
                minHeight: '420px',
                maxWidth: '280px',
                marginLeft: index === 0 ? 'auto' : undefined,
                marginRight: index === data.length - 1 ? 'auto' : undefined,
              }}
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

      {/* Mobile Vertical Layout */}
      <div className="block sm:hidden relative z-10 space-y-6 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-white p-8 rounded-2xl shadow-lg border-b-[6px] border-red-400
            flex flex-col items-center text-center transition duration-500 ease-in-out transform
            hover:-translate-y-2 hover:shadow-xl"
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
