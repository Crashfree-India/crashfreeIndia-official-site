import React from 'react';
import { Trophy, FileText, Users, BookOpen } from 'lucide-react';
const WhatYoullGet = () => {
  const benefits = [
    {
      icon: <Trophy className="h-8 w-8 text-indigo-600" />,
      title: 'Cash Prizes up to ₹5 Lakhs',
      description: (
        <>
          <p>₹2.5L for winner, ₹1.5L for runner-up</p>
          <p>₹50K for second runner-up</p>
          <p>₹10K consolation prize to next 5 teams</p>
        </>
      ),
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: 'Certificates for All Qualifiers',
      description: (
        <>
          <p>Participation certificates for teams</p>
          <p>clearing the concept submission round</p>
        </>
      ),
    },
    {
       icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Expert Mentorship',
      description: (
        <>
          <p>Guidance from policy experts</p>
          <p>industry leaders, and practitioners</p>
        </>
      ),
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'Real-World Policy Impact',
      description: (
        <>
          <p>Contribute to shaping grassroots</p>
          <p>road safety policies across India</p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Get</h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mb-12">
        Participating in the Policy Ideathon offers numerous benefits beyond the competition itself.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12  w-full">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md text-center transition duration-300 hover:shadow-xl hover:scale-105 gap-y-4"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-200">
  {benefit.icon}
</div>
            <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
            <div className="text-gray-600 text-md leading-relaxed">{benefit.description}</div>
          </div>
        ))}
      </div>

      <div className="px-4 sm:px-6 py-2 bg-[#6B63FF1A] rounded-lg text-center text-lg font-medium shadow-sm mx-auto">
        Plus professional recognition with Letters of Recommendation and Achievement
      </div>
    </div>
  );
};

export default WhatYoullGet;
