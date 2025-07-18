// components/Home.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from "../components/HomePage/AboutUs";
import Trustees from "../components/HomePage/Trustees";
import OurWork from "../components/HomePage/OurWork";
import GetInvolved from "../components/HomePage/GetInvolved";
import ContactUs from "../components/HomePage/ContactUs";
import bgImage from "../assets/road.png"
const Home = () => {
  const [timer, setTimer] = useState(240); // 4 minutes
const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const sectionId = location.hash.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay ensures scroll happens after render
    }
  }
}, [location]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 240));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div>
     <section
        className="relative min-h-screen bg-cover bg-center px-4 pt-28 text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 drop-shadow-lg">
            THE URGENT NEED
          </h2>

          {/* Glass Timer Box */}
          <div className="bg-white/10 backdrop-blur border border-white rounded-md shadow-lg px-6 py-5 w-full max-w-2xl">
            <p className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
              ⚠️ Every 4 minutes, someone loses their life on Indian roads
            </p>
            <div className="flex justify-center my-6">
              <div className="px-6 py-2 bg-white/20 backdrop-blur-lg rounded-4xl shadow-2xl border border-white text-5xl md:text-6xl font-bold text-white">
                {formatTime(timer)}
              </div>
            </div>
            <p className="text-sm md:text">
              Time until another preventable tragedy
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
            <div className="bg-white text-black p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 text-center">11%</h3>
              <p className="mt-3 text-center text-sm md:text-base">
                India accounts for 11% of global road crashes and has the highest number of road accident deaths worldwide.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 text-center">172,000+</h3>
              <p className="mt-3 text-center text-sm md:text-base">
                Lives lost annually, affecting countless families and futures.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow-md border-t-4 border-indigo-600">
              <h3 className="text-3xl font-bold text-indigo-700 text-center">3% of GDP</h3>
              <p className="mt-3 text-center text-sm md:text-base">
                Crashes cost the Indian economy over 3% of GDP every year.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-lg font-semibold mt-6 drop-shadow">
            These are not just accidents – these are preventable tragedies.
          </p>
        </div>
      </section>
    <section id="aboutus"className="scroll-mt-20"><AboutUs /></section>
      <section id="trustees"className="scroll-mt-20"><Trustees /></section>
      <section id="ourwork"className="scroll-mt-20"><OurWork /></section>
      <section id="getinvolved"className="scroll-mt-20"><GetInvolved /></section>
      <section id="contactus" className="scroll-mt-20"><ContactUs /></section>
  </div>
  );
};

export default Home;
