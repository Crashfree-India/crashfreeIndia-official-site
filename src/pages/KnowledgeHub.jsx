import React from "react";
import * as LucideIcons from "lucide-react"
import Accordion from "../components/KnowledgeHub/Accordion";

export default function KnowledgeHub() {
    
  return (
    <main className="flex-grow ">
        {/* hero section */}
      <section
        className="relative flex   items-center justify-center text-white overflow-hidden"
        id="knowledgehub"
        style={{
          backgroundImage:
            "url('/lovable-uploads/57729120-bd74-4c27-b8f6-186e028a0513.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        <div className="container mx-auto relative z-10 px-3 py-6 mt-32 sm:px-4 sm:py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 animate-fade-in leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>
            <div className="animate-fade-in mb-4 sm:mb-6" style={{ animationDelay: "0.3s" }}>
              <p className="text-xs sm:text-sm md:text-base font-medium text-blue-100 mb-3 sm:mb-4 leading-relaxed px-2">
                Road safety isn't a slogan. It's a system. This is where we break it down.
              </p>
            </div>
            <div className="animate-fade-in mb-4 sm:mb-6" style={{ animationDelay: "0.6s" }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                {[
                  {
                    iconColor: "red",
                    text: "Stories of quiet changemakers saving lives on our roads",
                    Icon: (
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    ),
                  },
                  {
                    iconColor: "blue",
                    text: "Learn what's working. Discover the safety tools and standards that matter",
                    Icon: (
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    ),
                  },
                  {
                    iconColor: "green",
                    text: "Stay informed on policies that protect you and the people you love",
                    Icon: (
                      <>
                        <path d="M12 7v14" />
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                      </>
                    ),
                  },
                ].map(({ iconColor, text, Icon }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center space-y-1 sm:space-y-2 p-2 sm:p-3"
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 bg-${iconColor}-500/20 rounded-full flex items-center justify-center mb-1`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide w-3 h-3 sm:w-4 sm:h-4 text-${iconColor}-400`}
                      >
                        {Icon}
                      </svg>
                    </div>
                    <p className="text-xs text-white/90 leading-relaxed px-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="pt-3 sm:pt-4 border-t border-white/20 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <p className="text-xs sm:text-sm font-bold text-white mb-1 sm:mb-2">This isn't just a blog.</p>
              <p className="text-xs text-blue-100 font-medium leading-relaxed px-2">
                It's a window into the movement to make India's roads safer—for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* Search & Share Section */}
      <section className="py-4 sm:py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <div className="relative flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  className="flex h-10 bg-white px-3 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 border-2 border-gray-200 focus:border-blue-600 rounded-lg w-full pl-10 pr-4 py-3 text-base md:text-sm"
                  placeholder="Search articles..."
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 h-10 bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium text-sm"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-plus w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
     <Accordion />

      {/* Share Prompt CTA Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-6 sm:py-8">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-base sm:text-lg font-bold mb-3 leading-tight">
            Have a Road Safety Story to Share?
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            We believe every act of kindness and courage on our roads deserves recognition.
            Share your story and inspire others to make a difference.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-blue-800 transition-colors font-medium text-xs sm:text-sm"
            type="button"
          >
            Share Your Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
}
