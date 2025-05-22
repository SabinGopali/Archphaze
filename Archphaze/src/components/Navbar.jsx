import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/archphaze1.png';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 w-full h-28 border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-8 md:px-16 py-2">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 shrink-0">
          <img 
            src={logo} 
            className="h-24 w-auto max-h-[96px] min-w-[120px] object-contain" 
            alt="Logo" 
          />
        </NavLink>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center flex-1 relative">
          <ul className="flex space-x-8 bg-[#f7f8fc] px-6 py-3 rounded-xl font-medium text-gray-600">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-black font-semibold' : 'hover:text-black'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  isActive ? 'text-black font-semibold' : 'hover:text-black'
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive ? 'text-black font-semibold' : 'hover:text-black'
                }
              >
                Career
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                <NavLink
                  to="/Testimonial"
                  className={({ isActive }) =>
                    isActive ? 'text-black font-semibold' : ''
                  }
                >
                  Meet The Team
                </NavLink>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <NavLink
                      to="/Aboutus"
                      className={({ isActive }) =>
                        isActive ? 'block px-4 py-2 bg-gray-100' : 'block px-4 py-2 hover:bg-gray-100'
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="/Contactus"
                className={({ isActive }) =>
                  isActive ? 'text-black font-semibold' : 'hover:text-black'
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            Build With Us
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col px-6 py-4 bg-gray-50 text-gray-700 font-medium border-t space-y-3">
          <li>
            <NavLink to="/" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'font-semibold' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'font-semibold' : ''}>
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'font-semibold' : ''}>
              Career
            </NavLink>
          </li>

          {/* Mobile Dropdown */}
          <li>
            <button
              className="w-full text-left flex items-center justify-between"
              onClick={toggleServicesMenu}
            >
              <NavLink to="/Testimonial" className={({ isActive }) => isActive ? 'font-semibold' : ''}>
                Meet The Team
              </NavLink>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServicesOpen && (
              <ul className="mt-2 ml-4 space-y-2 text-sm">
                <li>
                  <NavLink to="/Aboutus" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'font-semibold' : ''}>
                    About Us
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/Contactus" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'font-semibold' : ''}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <button className="w-full text-center px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
              Build With Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
