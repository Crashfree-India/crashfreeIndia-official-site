import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const trusteesData = [
  {
    name: "Vikram Chopra",
    role: "Co-founder & CEO",
    company: "CARS24",
    image: "/vikramChopra.png",
  },
  {
    name: "Gajendra Jangid",
    role: "Co-founder & CMO",
    company: "CARS24",
    image: "/gajendra.png",
  },
  {
    name: "Ruchit Agarwal",
    role: "Co-founder & CFO",
    company: "CARS24",
    image: "/ruchit.png",
  },
  {
    name: "Amar Srivastava",
    role: "Founder and President",
    company: "Indian Road Safety Council",
    image: "/amar.png",
  },
  {
    name: "Deepanshu Gupta",
    role: "Founder and Vice President",
    company: "Indian Road Safety Council",
    image: "/deep.png",
  },
];

const Trustees = () => {
  const cardsPerPage = 3;
  const slideStep = 2;
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    const next = startIndex + slideStep;
    setStartIndex(next >= trusteesData.length ? 0 : next);
  };

  const prevSlide = () => {
    const prev = startIndex - slideStep;
    setStartIndex(prev < 0 ? Math.max(0, trusteesData.length - cardsPerPage) : prev);
  };

  const visibleTrustees = trusteesData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold text-black mb-6">Our Trustees</h2>

      <div className="relative flex items-center justify-center max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-white border border-gray-100 rounded-full shadow hover:bg-gray-100"
        >
          <ArrowLeft />
        </button>

        {/* Trustees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleTrustees.map((trustee, index) => (
            <div
              key={index}
              className="transition duration-300 p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <img
                src={trustee.image}
                alt={trustee.name}
                className="rounded-lg object-cover w-full h-72 mb-2"
              />
              <h3 className="text-sm font-semibold text-gray-900">{trustee.name}</h3>
              <p className="text-sm text-gray-600">{trustee.role}</p>
              <p className="text-xs text-gray-500">{trustee.company}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-white border border-gray-100 rounded-full shadow hover:bg-gray-100 "
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Trustees;
