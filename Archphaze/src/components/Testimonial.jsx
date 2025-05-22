import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/homescreen.png';

const teamMembers = [
  {
    id: 1,
    name: 'Kapil Gautam',
    position: 'Chief Executive Officer',
    bio: 'Leading the company with a vision for innovation and growth.',
    img: logo,
    delay: 0.2,
  },
  {
    id: 2,
    name: 'Sulav Kadel',
    position: 'lead developer',
    bio: 'Architecting scalable and robust technology solutions.',
    img: logo,
    delay: 0.4,
  },
  {
    id: 3,
    name: 'Ayush Pyakurel',
    position: 'Project Manager',
    bio: 'Bridging the gap between users and developers with clarity.',
    img: logo,
    delay: 0.6,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white py-20 px-4 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 uppercase  ">
          Meet <span className="text-red-500 uppercase">Our Team</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          The passionate minds building powerful digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: member.delay, duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-red-500 font-medium">{member.position}</p>
              </div>
              <p className="text-gray-500 text-sm">{member.bio}</p>

              <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
