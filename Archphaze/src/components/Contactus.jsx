import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          If You Have Any <span className="text-red-500">Query</span>, Please <br className="hidden sm:block" />
          <span className="text-red-500">Contact Us</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Panel - Contact Info */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in touch</h3>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Whether you have a question about our services, need assistance,
            or just want to provide feedback, our team is ready to help.
          </p>

          <div className="space-y-6 text-gray-800">
            <div>
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <MapPin className="w-5 h-5" />
                <span>Location:</span>
              </div>
              <p className="ml-7">Kalimati-13, Kathmandu, Nepal</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-orange-500 font-semibold">
                <Mail className="w-5 h-5" />
                <span>Email:</span>
              </div>
              <p className="ml-7">info@example.com</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-orange-500 font-semibold">
                <Phone className="w-5 h-5" />
                <span>Call:</span>
              </div>
              <p className="ml-7">+977-9999999999, +977-9999999999</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className="flex flex-col gap-8">
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
              />
            </div>
            <input
              type="text"
              placeholder="Phone.no"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            ></textarea>
            <div className="hidden md:block">
          <button className="px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            Send us message
          </button>
        </div>
          </form>
        </div>
      </div>

      {/* Full-Width Google Map */}
      <div className="w-full h-[300px] sm:h-[400px] mt-16 rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13026.427238943295!2d85.28174274164017!3d27.699050667404098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1860ae22d385%3A0x7c2444e8284cef52!2sKalimati%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1747642856636!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
