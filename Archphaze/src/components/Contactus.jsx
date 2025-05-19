import React from 'react';

export default function ContactUs() {
  return (
    <div className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* Left side - Contact Form */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            If You Have Any <span className='text-red-500'>Query</span>, Please <br /> <span className='text-red-500'>Contact Us</span>
          </h2>

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
              placeholder="Mobile Number"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"/>

            {/* Services Dropdown */}
            <select
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
              defaultValue=""
            >
              <option value="" disabled>Select a Service</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="consulting">IT Consulting</option>
            </select>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"/>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"></textarea>
            <button type='submit' className="w-50 text-center px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
              Send us a message
            </button>
          </form>
        </div>

        {/* Right side - Google Map */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-md">
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
    </div>
  );
}
