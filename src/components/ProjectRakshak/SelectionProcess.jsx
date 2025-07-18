import React from "react";

export default function SelectionProcess() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Selection Process
        </h2>
        <div className="max-w-3xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Registration Form */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-[#4940ff] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Registration Form</h3>
              <p className="text-gray-600">
                Submit your application through our online registration form
              </p>
            </div>
            {/* Interview Round */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="bg-[#4940ff] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Interview Round</h3>
              <p className="text-gray-600">
                Selected candidates will be invited for an interview
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
