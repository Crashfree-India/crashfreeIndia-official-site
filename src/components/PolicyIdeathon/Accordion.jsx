import React, { useState } from 'react';

const topics = [
  {
    title: 'Speed Management in Urban Areas',
    subtitle: 'Over-speeding is the top cause of road deaths',
    points: [
      'Urban speed limits: default 30 kmph in high-density zones',
      'Mandatory speed-calming zones near schools/hospitals',
      'Local government guidelines for traffic-calming infrastructure',
    ],
    icon: '🚦',
  },
  {
    title: 'Helmet and Seatbelt Enforcement Reforms',
    subtitle: 'Helmet and seatbelt compliance remains low despite laws',
    icon: '🪖',
    points: ['Targeted enforcement using CCTV and AI at junctions',
'Community-based helmet drives in Tier-2/3 towns',
'Linking repeat violations to license points or insurance premiums',],
  },
  {
    title: 'Regulating E-commerce & Delivery Rider Safety',
    subtitle: 'Gig economy riders face time pressure, poor safety norms',
    icon: '🛵',
    points: ['Mandatory road safety orientation by platforms',
        'Rider speed tracking + incentives for compliance',
        'City-level licensing & standards for commercial two-wheeler use',
    ],
  },
  {
    title: 'School Zone Safety Norms',
    subtitle: 'Children’s remain high-risk vulnerable road users',
    icon: '🏫',
    points: ['State rules mandating safe zones around all schools',
        'Uniform school transport regulation across states',
        'Parent-led school safety audits backed by local authorities',
    ],
  },
  {
    title: 'Local Blackspot Identification Framework',
    subtitle: 'Black spots often go unidentified at ward/block level',
    icon: '⚠️',
    points: ['Civic tech tools for public black spot reporting',
        'Mandated monthly audits by ULBs / Traffic Police',
'Local Area Traffic Management (LATM) protocols',
    ],
  },
   {
    title: 'Alcohol & Drug Driving Prevention',
    subtitle: 'Black spots often go unidentified at ward/block level',
    icon: '🍺',
    points: ['Mandatory weekend night patrolling & breathalyzer checks',
        'Piloting ignition interlocks for repeat offenders',
'Link DUI history with driver license renewal',
    ],
  },
  {
    title: 'Road Safety Data Transparency',
    subtitle: 'Absence f granular crash data limits good policy',
    icon: '📊',
    points: ['Open data mandates for insurance companies & police FIRs',
        'State-level crash mapping and reporting standards',
    ],
  },
  {
    title: 'On-Road Emergency Response Protocols',
    subtitle: 'Victims often receive no assistance in the golden hour',
    icon: '🚑',
    points: ['State-specific SOPs for first responders and bystanders',
        'Better enforcement of Good Samaritan Law',
'Inclusion of road safety in first aid training for commercial drivers',
    ],
  },
  {
    title: 'Ambulance Standards & Regulations',
    subtitle: 'Ambulance response is delayed or sustandard in many cities',
    icon: '🏥',
    points: ['Enforcement of BIS/IRDAI standards for road ambulances',
        'City-level mandatory ambulance response time benchmarks',
'Geo-fenced, dedicated emergency lanes on arterial roads',
    ],
  },
  {
    title: 'Crash Compensation & Insurance Reform',
    subtitle: 'Compensation for road crash victims is dispayed and inadequate',
    icon: '💰',
    points: ['Fast-track compensation tribunals at the district level',
        'Uniform cashless treatment scheme across states',
'Digitization and integration of accident FIR → insurance claim pipeline',
    ],
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-[#FCFCFF] px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-5">Problem Statements / Tracks</h2>
      <p className="text-center text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
        Each team is required to select one theme from the list below. The suggested policy focus
        areas under each theme are indicative and not exhaustive.
      </p>

      <div className="max-w-4xl mx-auto space-y-4 ">
        {topics.map((topic, i) => (
          <div
  key={i}
  className="border border-gray-200 p-2 rounded-xl bg-white shadow-sm transition hover:shadow-md hover:bg-gray-100"
>
  <button
    onClick={() => setOpenIndex(i === openIndex ? null : i)}
    className="w-full flex items-center justify-between px-4 py-4 text-left"
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{topic.icon}</span>
      <div>
        <h3 className="font-semibold text-md">{topic.title}</h3>
        <p className="text-sm text-gray-500">{topic.subtitle}</p>
      </div>
    </div>
   <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-indigo-500 transform transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
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

  {/* Divider */}
  {openIndex === i && (
    <div className="border-t border-gray-200" />
  )}

  {openIndex === i && topic.points.length > 0 && (
    <ul className="px-6 pt-4 pb-6 list-disc text-gray-700 text-sm space-y-2">
      {topic.points.map((point, j) => (
        <li key={j}>{point}</li>
      ))}
    </ul>
  )}
</div>

        ))}
      </div>
    </div>
  );
};

export default Accordion;
