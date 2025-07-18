import React from "react";

const journeySteps = [
  {
    number: "1",
    title: "Problem Identification",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-[#4940ff] mr-2"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    description:
      "Identify locations with road safety issues using data and field visits. Document with photos and videos, and research past accident records.",
  },
  {
    number: "2",
    title: "Stakeholder Analysis",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-[#4940ff] mr-2"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
    description:
      "Interview local stakeholders including vehicle drivers, police officers, pedestrians, and shop owners. Conduct a thorough Road Safety Audit.",
  },
  {
    number: "3",
    title: "Solution Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-[#4940ff] mr-2"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    description:
      "Analyze case studies to find feasible solutions with cost-benefit analysis. Design intervention strategies with mentor guidance.",
  },
  {
    number: "4",
    title: "Implementation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-[#4940ff] mr-2"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
    description:
      "Present solutions to local authorities and work towards implementation. Secure official approvals and document the process.",
  },
  {
    number: "5",
    title: "Impact Assessment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-[#4940ff] mr-2"
      >
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
    description:
      "Document implementation and measure its impact. Analyze stakeholder benefits and compile a comprehensive concluding report.",
  },
];

export default function ProtectorJourney() {
  return (
    <div>
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Your Journey as a Protector
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {journeySteps.map((step, idx) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row gap-6 ${idx === journeySteps.length - 1 ? "opacity-100" : ""}`}
              >
                {/* Timeline Connector */}
                <div className="md:w-16 flex flex-col items-center">
                  <div className="rounded-full bg-[#4940ff] text-white h-12 w-12 flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  {idx < journeySteps.length - 1 ? (
                    <div className="h-full w-0.5 bg-gray-300 mt-2 hidden md:block"></div>
                  ) : null}
                </div>
                {/* Step Content */}
                <div className="flex-1 bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    {step.icon}
                    <h3 className="text-xl font-bold text-[#4940ff]">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   
    </div>
  );
}
