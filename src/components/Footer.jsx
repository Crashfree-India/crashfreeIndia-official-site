import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import Logo from '../assets/logo2.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Logo & Description */}
        <div>
          <div className="mb-6">
            <img src={Logo} alt="Crashfree India Logo" className="h-12 w-auto" />
          </div>
          <p className="text-gray-400 mb-6">
            A bold initiative by CARS24 and the Indian Road Safety Campaign to create a safer mobility ecosystem across India.
          </p>
          <div className="flex space-x-4 text-gray-300">
            <a
              href="https://www.instagram.com/crashfreeindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <Instagram />
            </a>
            <a
              href="https://x.com/CrashfreeIndia"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/company/crashfree-india"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Right: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="/#aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="/#ourwork" className="hover:text-white">Our Work</a></li>
            <li><a href="/blog" className="hover:text-white">Stories</a></li>
            <li><a href="/#getinvolved" className="hover:text-white">Get Involved</a></li>
            <li><a href="/resources" className="hover:text-white">Resources</a></li>
            <li><a href="/#contactus" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-gray-400 text-sm max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p>© 2025 Crashfree India. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-white">Terms of Service</a>
        </div>
        <button
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 shadow-md transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
