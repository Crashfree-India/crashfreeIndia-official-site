import React, { useState } from 'react';

const IdeathonStructure = () => {
  const [openStage, setOpenStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: 'Online Registration',
      date: 'Open till 23rd July 2025',
      description: 'Submit your team details and select your policy track.',
    },
    {
      id: 2,
      title: 'Concept Note Submission',
      date: 'Till 30th July 2025',
      description: 'Submit a brief outline of your policy idea addressing your chosen challenge.',
    },
    {
      id: 3,
      title: 'Virtual Mentorship + Final Proposal',
      date: 'By 27th August 2025',
      description: 'Receive guidance from policy experts and submit your complete policy proposal.',
    },
    {
      id: 4,
      title: 'Live Presentation',
      date: 'Third week of September (Top 10 Teams)',
      description: 'Present your refined proposals to a panel of experts and stakeholders.',
    },
  ];

  const toggleStage = (id) => {
    setOpenStage(openStage === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Ideathon Structure</h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mb-12">
        Our comprehensive four-stage process is designed to nurture policy ideas from concept
        to implementable solutions.
      </p>

      <div className="-ml-2 sm:-ml-24">
  <div className="relative flex flex-col items-start max-w-lg">

        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-500/30 rounded-full"></div>

        {stages.map((stage) => (
          <div key={stage.id} className="relative mb-8 w-full">
            {/* Circle */}
            <div className="absolute left-0 top-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#4940FF] to-[#6B63FF] text-white text-lg font-bold">
              {stage.id}
            </div>

            <div className="ml-14 bg-white rounded-lg shadow-md border border-gray-100 w-[85vh] overflow-hidden center">
              <button
                className=" group flex justify-between items-center w-full px-6 py-2 cursor-pointer focus:outline-none"
                onClick={() => toggleStage(stage.id)}
                aria-expanded={openStage === stage.id}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 text-left group-hover:underline">{stage.title}</h3>
                  <p className="text-[#3930CC] text-sm font-semibold text-left group-hover:underline">{stage.date}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${
                    openStage === stage.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Description content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openStage === stage.id ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 text-base">{stage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default IdeathonStructure;