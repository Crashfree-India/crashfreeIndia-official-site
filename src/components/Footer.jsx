// components/Footer.jsx
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import Logo from '../assets/logo2.png'
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white py-12 px-2">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <div className="mb-4">
  <img src={Logo} alt="Crash Free India Logo" className="w-80 h-auto" />
</div>
        
          <p className="text-gray-400 mb-4">
            A bold initiative by CARS24 and the Indian Road Safety Campaign to create a safer mobility ecosystem across India.
          </p>
          <div className="flex gap-4 text-gray-300 text-xl">
            <a href="#"><Instagram className="hover:text-white" /></a>
            <a href="#"><Twitter className="hover:text-white" /></a>
            <a href="#"><Linkedin className="hover:text-white" /></a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="#ourwork" className="hover:text-white">Our Work</a></li>
            <li><a href="#" className="hover:text-white">Stories</a></li>
            <li><a href="#getinvolved" className="hover:text-white">Get Involved</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#contactus" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
     <div className="border-t border-gray-700 mt-10 pt-6 px-2 text-gray-400 text-md max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
  <p>© 2025 Crashfree India. All rights reserved.</p>

  <div className="flex gap-6">
    <a href="#" className="hover:text-white">Privacy Policy</a>
    <a href="#" className="hover:text-white">Terms of Service</a>
  </div>

  <button
    onClick={scrollToTop}
    className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 shadow-lg"
    aria-label="Back to top"
  >
    <ArrowUp size={18} />
  </button>
</div>

    </footer>
  );
};

export default Footer;
