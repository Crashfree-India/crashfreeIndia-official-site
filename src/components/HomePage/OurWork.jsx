import React, { useState } from 'react';
import { Shield, Settings, AlarmClock, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Map, Ambulance, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const workData = {
  Enforcement: {
    title: "Enforcement",
    icon: <Shield className="text-blue-600 w-36 h-36 bg-opacity-20 bg-blue-50 p-8 rounded-full" />,
    desc: `We support stronger law enforcement through data-driven advocacy for stricter traffic rules, collaborations with MoRTH, State governments and traffic police for improved enforcement measures, simplification of legal processes, and leveraging tech for smarter enforcement practices.`,
    highlight: "Stronger laws. Smarter compliance. Safer roads.",
    buttonText: "Explore Policy Ideathon > ",
    link:"/policyideathon"
  },
  Engineering: {
    title: "Engineering",
    icon:<Map className="text-green-600 w-36 h-36 bg-green-50 p-8 rounded-full" />,
    desc: `Unsafe infrastructure is a silent killer. We identify high-risk crash zones ('black spots') using data and specialized interventions, partner with authorities to drive road redesigns and safety audits, and champion low-cost, high-impact engineering fixes.`,
    highlight: "Better roads aren't optional - they're lifesavers.",
    buttonText: "Explore Project Rakshak > ",
    link:"/projectrakshak"
  },
  Emergency: {
    title: "Emergency",
    icon:<Ambulance className="text-red-600 w-36 h-36 bg-red-50 p-8 rounded-full" />,
    desc: `Post-crash response can be the difference between life and death. We're strengthening the Golden Hour response network, training first responders and bystanders, and pushing for tech-enabled 911-style emergency systems.`,
    highlight: "When seconds count, systems should respond.",
    // buttonText: "See Emergency Programs"
  },
  Education: {
    title: "Education",
    icon: <GraduationCap className="text-yellow-600 w-36 h-36 bg-yellow-50 p-8 rounded-full" />,
    desc: `Changing mindsets is key to changing outcomes. We run large-scale youth and citizen awareness campaigns, create content and training for safer driving habits, and engage communities in road safety pledges and programs.`,
    highlight: "Awareness today. Action tomorrow. Impact forever.",
    // buttonText: "See Education Initiatives"
  }
};

const keys = Object.keys(workData);

const OurWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeKey = keys[activeIndex];
  const activeData = workData[activeKey];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % keys.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + keys.length) % keys.length);
  };

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Work</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-6 text-md">
        A 360° Approach to Saving Lives. Road safety is complex – and that's why our work spans
        the 4Es of intervention: Enforcement, Engineering, Emergency, and Education.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {keys.map((key, index) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-full transition ${
              activeIndex === index
                ? "bg-indigo-600 text-white"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-16 flex flex-col md:flex-row items-center md:items-center gap-10">
  {/* Icon Circle */}
  <div className="flex items-center justify-center  w-36 h-36">
    {activeData.icon}
  </div>

  {/* Text Content */}
  <div className="text-left flex-1">
    <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeData.title}</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
      {activeData.desc}
    </p>
    <p className="text-indigo-600 text-2xl font-semibold mb-6">
      {activeData.highlight}
    </p>
    {activeData.link && activeData.buttonText && (
  <Link to={activeData.link}>
    <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-md flex items-center gap-2 hover:bg-indigo-700 transition">
      {activeData.buttonText}
    </button>
  </Link>
)}
  </div>
</div>


      {/* Navigation Dots + Arrows */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

       
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default OurWork;
