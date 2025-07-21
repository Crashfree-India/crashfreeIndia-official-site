import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import vikramChopra from '../../assets/trustees/vikramChopra.png'
import gajendra from '../../assets/trustees/gajendra.png'
import ruchit from '../../assets/trustees/ruchit.png'
import amar from '../../assets/trustees/amar.png'
import deep from '../../assets/trustees/deep.png'

const trusteesData = [
  {
    name: "Vikram Chopra",
    role: "Co-founder & CEO",
    company: "CARS24",
    image: vikramChopra,
  },
  {
    name: "Gajendra Jangid",
    role: "Co-founder & CMO",
    company: "CARS24",
    image: gajendra,
  },
  {
    name: "Ruchit Agarwal",
    role: "Co-founder & CFO",
    company: "CARS24",
    image: ruchit,
  },
  {
    name: "Amar Srivastava",
    role: "Founder and President",
    company: "Indian Road Safety Council",
    image: amar,
  },
  {
    name: "Deepanshu Gupta",
    role: "Founder and Vice President",
    company: "Indian Road Safety Council",
    image: deep,
  },
];

const Trustees = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerPage(1);
      } else if (width < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const nextSlide = () => {
    const next = startIndex + cardsPerPage;
    if (next < trusteesData.length) {
      setStartIndex(next);
    }
  };

  const prevSlide = () => {
    const prev = startIndex - cardsPerPage;
    if (prev >= 0) {
      setStartIndex(prev);
    }
  };

  const visibleTrustees = trusteesData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold text-black mb-6">Our Trustees</h2>

      <div className="relative flex items-center justify-center max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="absolute left-0 z-10 p-2 bg-white border border-gray-100 rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowLeft />
        </button>

        {/* Trustees Cards */}
        <div className={`grid gap-4 w-full px-10 sm:px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${cardsPerPage}`}>
          {visibleTrustees.map((trustee, index) => (
            <div
              key={index}
              className="transition duration-300 p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <img
                src={trustee.image}
                alt={trustee.name}
                className="rounded-lg object-cover w-full h-72 mb-2 grayscale"
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
          disabled={startIndex + cardsPerPage >= trusteesData.length}
          className="absolute right-0 z-10 p-2 bg-white border border-gray-100 rounded-full shadow hover:bg-gray-100 disabled:opacity-40"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Trustees;
