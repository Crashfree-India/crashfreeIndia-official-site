// pages/PolicyIdeathonPage.jsx
import React from 'react';
import IdeathonStructure from '../components/PolicyIdeathon/IdeathonStructure';
import PolicyHeroSection from '../components/PolicyIdeathon/PolicyHeroSection';
import EligibilityCriteria from '../components/PolicyIdeathon/EligibilityCriteria';
import Accordion from '../components/PolicyIdeathon/Accordion';
import WhatYoullGet from '../components/PolicyIdeathon/WhatYoullGet';
import ReadyToJoin from '../components/PolicyIdeathon/ReadyToJoin';
const PolicyIdeathonPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
    <PolicyHeroSection />
      {/* Eligibility Section */}
    <EligibilityCriteria />

      {/* Ideathon Structure */}
      <IdeathonStructure />
      <Accordion />
      <WhatYoullGet />
   <ReadyToJoin />

    </div>
  );
};

export default PolicyIdeathonPage;
