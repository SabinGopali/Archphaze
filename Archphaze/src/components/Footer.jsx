import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-300 py-8 px-6 relative border-t border-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Archphaze Technologies Pvt. Ltd</h2>
          <p className="text-sm mt-1">© {year}. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><FaFacebook /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>

        {/* Credits */}
        
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-400 transition cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}