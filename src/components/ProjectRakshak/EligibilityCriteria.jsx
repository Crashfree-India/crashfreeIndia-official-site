import React from "react";

export default function EligibilityCriteria() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Eligibility Criteria
          </h2>
          <div className="bg-gray-50 rounded-lg shadow-sm p-6">
            <ul className="space-y-4">
              {/* Education */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4940ff]"
                  >
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
                    <path d="m9 18-1.5-1.5" />
                    <circle cx="5" cy="14" r="3" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold">Education:</span> Pursuing B.Tech (Civil Engineering and Planning preferable but not mandatory)
                </p>
              </li>
              {/* Team Location */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4940ff]"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                    <path d="M15 5.764v15" />
                    <path d="M9 3.236v15" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold">Team:</span> All team members must be in the same internship location
                </p>
              </li>
              {/* Team Size */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4940ff]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold">Team Size:</span> Minimum 1, Maximum 3 members
                </p>
              </li>
              {/* Commitment */}
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4940ff]"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M12 11h4" />
                    <path d="M12 16h4" />
                    <path d="M8 11h.01" />
                    <path d="M8 16h.01" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold">Commitment:</span> Each team must contribute 100 hours over the course of internship
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
