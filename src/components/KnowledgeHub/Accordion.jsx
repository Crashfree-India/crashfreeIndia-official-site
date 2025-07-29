import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase' 
import { Clock, User, ArrowRight } from 'lucide-react';
import * as LucideIcons from "lucide-react";

const Accordion = () => {
  const [sections, setSections] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const fetchAccordionData = async () => {
 const { data, error } = await supabase
  .from('accordion_sections')
  .select(`
    *,
    accordion_cards(*)
  `)
  .order('id', { foreignTable: 'accordion_cards', ascending: true });



  if (error) console.error('Fetch Error:', error);
  else console.log('Fetched Data:', data);
  setSections(data);
};


  useEffect(() => {
    fetchAccordionData();
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const LucideIcon = ({ name, className }) => {
    const IconComponent = LucideIcons[name];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  const BlogCard = ({ title, description, readTime, status, author, image, link }) => (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600">
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Clock className="w-3 h-3" />
          {readTime} read
          <span className="mx-1">•</span>
          <span className="text-green-600 font-medium">{status}</span>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-grow min-w-0">
            <h3 className="font-semibold text-sm leading-tight hover:text-blue-600 transition-colors">
              <a href={link}>{title}</a>
            </h3>
            <p className="text-gray-600 text-xs mt-2">{description}</p>
          </div>
          {image && (
            <img src={image} alt={title} className="w-12 h-9 object-cover rounded-lg border border-gray-200" loading="lazy" />
          )}
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <a href={link} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors group">
            Read
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );


  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-6xl mx-auto space-y-4">
          {sections.map((item, index) => (
            <div key={item.id} className="border border-gray-200 rounded-lg bg-white shadow-sm">
              <button onClick={() => toggle(index)} className="w-full text-left flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-4 w-full">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${item.iconBg}`}>
                    <LucideIcon name={item.icon} className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="text-left flex-grow min-w-0">
                    <h2 className="text-lg font-bold text-gray-800 mb-0">{item.title}</h2>
                    <p className={`text-sm font-medium mb-2 ${item.iconColor}`}>{item.subtitle}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <svg className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openIndex === index && item.accordion_cards?.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 px-6 pb-6">
                  {item.accordion_cards.map((card) => (
                    <BlogCard key={card.id} {...card} />
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
