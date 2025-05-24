import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/homescreen.webp';
import { Link } from 'react-router-dom';

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
                <Link to="https://www.linkedin.com/feed/update/urn:li:activity:7316736925334212609/?origin=NETWORK_CONVERSATIONS&lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BLh1l2V04RyO5dV%2BMeiEsPA%3D%3D&midToken=AQHdqC9gAooJWg&midSig=2r_s_gDCGTKHI1&trk=eml-email_network_conversations_01-truncated~share~message-0-see~more&trkEmail=eml-email_network_conversations_01-truncated~share~message-0-see~more-null-lhuwm1~m9k117sz~e6-null-null&eid=lhuwm1-m9k117sz-e6&otpToken=MTMwNzE3ZTkxNTI2Y2NjNWI1MmQwZmViNDExYWUzYmM4ZWNhZDg0NTlhYTg4NzY5N2JjZTAwNmU0NzUzNWFmMmYxZDNkM2U5NTVmYWMxYzc0NDg2ZjRjYjQyZDQxZDZhNTdmNTcxMTBkOGVkOTg2YjI4MmJhOWU0LDEsMQ%3D%3D" className="text-gray-400 hover:text-blue-600">
                  <FaLinkedin size={20} />
                </Link>
                <Link to="https://www.linkedin.com/feed/update/urn:li:activity:7316736925334212609/?origin=NETWORK_CONVERSATIONS&lipi=urn%3Ali%3Apage%3Aemail_email_network_conversations_01%3BLh1l2V04RyO5dV%2BMeiEsPA%3D%3D&midToken=AQHdqC9gAooJWg&midSig=2r_s_gDCGTKHI1&trk=eml-email_network_conversations_01-truncated~share~message-0-see~more&trkEmail=eml-email_network_conversations_01-truncated~share~message-0-see~more-null-lhuwm1~m9k117sz~e6-null-null&eid=lhuwm1-m9k117sz-e6&otpToken=MTMwNzE3ZTkxNTI2Y2NjNWI1MmQwZmViNDExYWUzYmM4ZWNhZDg0NTlhYTg4NzY5N2JjZTAwNmU0NzUzNWFmMmYxZDNkM2U5NTVmYWMxYzc0NDg2ZjRjYjQyZDQxZDZhNTdmNTcxMTBkOGVkOTg2YjI4MmJhOWU0LDEsMQ%3D%3D" className="text-gray-400 hover:text-blue-400">
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
