import React from "react";
import Road from "../../assets/road2.png"
export default function ProjectRakshakHero() {
  return (
    <section className="relative py-10 md:py-16 ">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Road}
          alt="Indian road infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white">
            Project Rakshak
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white font-light">
            Infrastructure and Mobility Action Internship
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-6">
            <p className="text-md md:text-lg text-white">
              Empowering students to reduce road crashes and become protectors of community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-1">~30%</h3>
              <p className="text-white text-sm">
                Road crashes that infrastructure improvements can prevent
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-1">~50%</h3>
              <p className="text-white text-sm">
                Potential reduction in neighborhood crashes through your work
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <h3 className="text-3xl font-bold text-white mb-1">20,000+</h3>
              <p className="text-white text-sm">
                Lives saved annually by fixing dangerous intersections
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 font-medium rounded-md bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all">
              Apply Now
            </button>
            <button className="inline-flex items-center justify-center gap-2 border rounded-md bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-5 w-5"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
