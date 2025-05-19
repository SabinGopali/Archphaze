import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import logo from "../assets/archphaze1.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#1B2A4C] animate-fadeIn">
      {/* Brand */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>
        <p className="text-sm text-gray-400">
          Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
        </p>
        <div className="flex space-x-2 mt-4">
          {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, i) => (
            <button
              key={i}
              className="bg-[#1B2A4C] p-2 rounded text-white hover:bg-[#2B3C5C] transition transform hover:scale-110 shadow-md"
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Address</h3>
        <p className="flex items-center space-x-2 text-sm mb-2">
          <FaMapMarkerAlt />
          <span>123 Street, New York, USA</span>
        </p>
        <p className="flex items-center space-x-2 text-sm mb-2">
          <FaPhoneAlt />
          <span>+012 345 67890</span>
        </p>
        <p className="flex items-center space-x-2 text-sm">
          <FaEnvelope />
          <span>info@example.com</span>
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          {["About Us", "Contact Us", "Our Services", "Terms & Conditions", "Support"].map((text, i) => (
            <li
              key={i}
              className="cursor-pointer relative w-fit after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
