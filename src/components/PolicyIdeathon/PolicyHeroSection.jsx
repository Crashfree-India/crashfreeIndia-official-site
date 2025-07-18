import React from 'react';
import Policy from "../../assets/policy.png";

const PolicyHeroSection = () => {
  return (
    <section className="relative h-auto flex items-center justify-center text-center text-white overflow-hidden ">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Policy}
          alt="Ideathon Background"
          className="w-full h-full object-cover object-top scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-[#4940FF]/50
" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mt-48">
        <div className="inline-block px-6 py-1 bg-slate-900/50 backdrop-blur-sm rounded-full text-white text-base font-semibold mb-6 shadow-sm">
          Registration Open Until July 23, 2025
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
          Nextmile: <span className="text-indigo-200">Road Safety Policy Ideathon</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-sm max-w-3xl mx-auto">
          Catalyzing bold, policy-focused solutions to India&apos;s road safety crisis through a national competition
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://registration-link.com"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Register Now &gt;
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center justify-center gap-2 px-8 h-11 text-lg font-medium text-white whitespace-nowrap rounded-md border border-white/30 bg-white/5 hover:bg-white/20 backdrop-blur-sm shadow-md transition"
          >
            Learn More
          </a>
        </div>
        <div className="mt-20 flex justify-center mb-8">
  <div className="w-20 h-2 rounded-full bg-indigo-600" />
</div>

      </div>
    
    </section>
  );
};

export default PolicyHeroSection;
