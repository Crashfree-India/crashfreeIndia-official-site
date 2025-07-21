import React, { useState } from 'react';
import * as LucideIcons from "lucide-react";
import { Clock, User, ArrowRight } from "lucide-react";

const accordionData = [
  {
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    icon: "Heart",
    title: "Unsung Heroes",
    subtitle: "Real changemakers on our roads",
    description:
      "Stories of quiet heroes who chose action over apathy and saved lives within the Golden Hour.",
    cards: [
      {
        title: "How One Moment on the Road Turned Rajesh Wagh into a Life-Saving Force",
        description: "From fixing tyres to leading India's first Road Accident Disaster Response Centre.",
        readTime: "4 min",
        status: "Published",
        author: "CFI Team",
        image: "/lovable-uploads/5a72060b-d966-487c-bff1-258f1bb1ed6b.png",
        link: "/blog/suraj-prakash-vaid-golden-hour"
      },
      {
        title: "The Taxi-Driver Who Became Delhi's Golden Hour Lifeline",
        description: "A retired taxi driver turned his life around after witnessing a road accident.",
        readTime: "4 min",
        status: "Published",
        author: "CFI Team",
        image: "/lovable-uploads/5a72060b-d966-487c-bff1-258f1bb1ed6b.png",
        link: "/blog/suraj-prakash-vaid-golden-hour"
      },
      {
        title: "Everyday Hero: Bowler's Brave Act Transforms Tragedy on the Highway",
        description: "Mohammad Shami showed us that true heroism emerges beyond stadium lights when he helped rescue a car accident victim.",
        readTime: "4 min",
        status: "Published",
        author: "CFI Team",
        image: "/lovable-uploads/5a72060b-d966-487c-bff1-258f1bb1ed6b.png",
        link: "/blog/suraj-prakash-vaid-golden-hour"
      },
      {
        title: "Anyone Can Be a Lifesaver: The Spirit of a Good Samaritan",
        description: "Dr. Maya Tandon's journey from operating theatres to highways, training over 100,000 citizens in life-saving skills.",
        readTime: "4 min",
        status: "Published",
        author: "CFI Team",
        image: "/lovable-uploads/5a72060b-d966-487c-bff1-258f1bb1ed6b.png",
        link: "/blog/suraj-prakash-vaid-golden-hour"
      }
    ]
  },
  {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    icon: "Shield",
    title: "Safety Standards",
    subtitle: "Authentic safety gear matters",
    description:
      "~70% of helmets sold in India are not-certified. Learn about safety myths and insights."
  },
  
  {
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    icon: "BookOpen",
    title: "Research & Policy",
    subtitle: "Evidence-based solutions",
    description:
      "Transforming India's road mobility through research, policy recommendations, and innovation."
  },
  {
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    icon: "Newspaper",
    title: "News & Updates",
    subtitle: "Latest developments",
    description:
      "Stay informed about road safety news, policy updates, and developments across India."
  },
  {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    icon: "User",
    title: "Hear from Crashfree Crew",
    subtitle:
      "Here, our team shares what it really takes to fight for safer roads in India",
    description:
      "This is where the mission gets personal. From field reflections to deep convictions - come listen in."
  }
];

const BlogCard = ({ title, description, readTime, status, author, image, link }) => {
  return (
    <div className="rounded-lg border bg-white text-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600">
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Clock className="w-3 h-3" />
          {readTime} read
          <span className="mx-1">•</span>
          <span className="text-green-600 font-medium">{status}</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold tracking-tight text-sm leading-tight hover:text-blue-600 transition-colors">
              <a href={link}>{title}</a>
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed mt-2">{description}</p>
          </div>
          {image && (
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-12 h-9 object-cover rounded-lg border border-gray-200"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <a
            href={link}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-600 font-medium transition-colors group text-xs"
          >
            Read
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const LucideIcon = ({ name, className }) => {
    const IconComponent = LucideIcons[name];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex items-center justify-between px-4 py-4"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${item.iconBg}`}>
                    <LucideIcon
                      name={item.icon}
                      className={`w-5 h-5 ${item.iconColor}`}
                    />
                  </div>
                  <div className="text-left flex-grow min-w-0">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
                      {item.title}
                    </h2>
                    <p className={`text-sm font-medium mb-2 ${item.iconColor}`}>
                      {item.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {openIndex === index && item.cards && (
                <div className="grid sm:grid-cols-2 gap-4 px-6 pb-6">
                  {item.cards.map((card, i) => (
                    <BlogCard key={i} {...card} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
