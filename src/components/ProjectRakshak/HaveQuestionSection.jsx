import React from "react";
import { useNavigate } from "react-router-dom";

export default function HaveQuestionsSection() {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    navigate("/#contactus"); 
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Have Questions?
          </h2>
          <div className="text-center">
            <p className="text-lg mb-6">
              For any other queries about Project Rakshak, feel free to contact us.
            </p>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#4940ff] hover:bg-blue-700 text-white px-6 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={10}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
