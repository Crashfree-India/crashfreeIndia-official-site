import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNav = (sectionId) => {
    setIsOpen(false); // close mobile menu
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    { name: 'About Us', id: 'aboutus' },
    { name: 'Our Work', id: 'ourwork' },
    { name: 'Knowledge Hub', id: 'knowledgehub' },
    { name: 'Get Involved', id: 'getinvolved' },
    { name: 'Donate Now', id: 'donate', button: 'orange' },
    { name: 'Contact Us', id: 'contactus', button: 'indigo' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <img src={logo} alt="Crashfree India Logo" className="h-10 w-auto" />

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-black font-medium">
          {navItems.map(({ name, id, button }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={
                  button === 'orange'
            ? 'bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition'
            : button === 'indigo'
            ? 'bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition'
            : 'hover:text-indigo-700'}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 text-black font-medium bg-white shadow-md">
          {navItems.map(({ name, id, button }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={
                  button
                    ? `bg-${button}-500 text-white px-4 py-2 rounded-md hover:bg-${button}-600 transition w-full text-left`
                    : 'hover:text-indigo-700'
                }
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
