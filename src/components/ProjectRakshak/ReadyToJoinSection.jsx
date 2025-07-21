import React from "react";

export default function ReadyToJoinSection() {
  return (
    <section className="bg-gradient-to-r from-[#4940ff] to-[#2563eb] py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Make Roads Safer?
          </h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Join Project Rakshak today and become part of India's zero-fatality mission
          </p>
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg mb-6 max-w-md mx-auto">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-white font-semibold">Deadline: 22nd June 2025</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
  disabled
  className="inline-flex items-center justify-center gap-2 px-8 py-5 text-lg font-medium text-gray-600 bg-gray-300 border border-gray-300 rounded-md cursor-not-allowed transition-colors disabled:opacity-50 disabled:pointer-events-none"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
  Applications Closed
</button>

<a href="https://docs.google.com/document/d/1gNOSOCiJTetCU3UmfRNdfR7oZn_Z3HrjaXhB7kozFcM/edit?tab=t.0"
              target="_blank"
    rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground rounded-md bg-transparent text-white border-white hover:bg-white/20 text-lg px-8 py-5 h-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download the Module
            
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
