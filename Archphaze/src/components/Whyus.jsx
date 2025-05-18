import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaShieldAlt, FaPiggyBank } from "react-icons/fa";
import logo from '../assets/archphaze1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    icon: <FaCode className="text-4xl text-black-600" />,
    title: "Custom Development",
    desc: "Tailored software to suit your business goals.",
  },
  {
    icon: <FaRocket className="text-4xl text-black-600" />,
    title: "Fast Deployment",
    desc: "Quick launch without compromising quality.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-black-600" />,
    title: "Cyber Security",
    desc: "End-to-end encryption and monitoring.",
  },
  {
    icon: <FaPiggyBank className="text-4xl text-black-600" />,
    title: "Cost Efficiency",
    desc: "Affordable plans with maximum ROI.",
  },
];

export default function Whyus() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
      }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12 max-w-6xl mx-auto">
      {/* Text Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4" data-aos="fade-out">
          Why Choose Our IT Services?
        </h2>
        <p className="text-gray-600 mb-6" data-aos="flip-right">
          We provide innovative and scalable IT solutions tailored to your business. From cloud deployments to secure infrastructure and intelligent software—trust us to deliver excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <img
          src={logo}
          alt="IT professional working"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
