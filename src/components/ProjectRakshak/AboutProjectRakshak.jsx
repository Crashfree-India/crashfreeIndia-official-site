import React from "react";

const BenefitItem = ({ icon, text }) => (
  <li className="flex items-start">
    <div className="text-blue-600 mt-1 mr-2 flex-shrink-0">{icon}</div>
    <span>{text}</span>
  </li>
);

const AboutProjectRakshak = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* About Project Rakshak */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800">
              About Project Rakshak
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Project Rakshak is a 3-month internship hosted by Crashfree India (A commitment by CARS24)
                that inspires and enables students to take meaningful action for road safety in their communities.
              </p>
              <p>
                As a Rakshak intern, you'll work with civic authorities, traffic police, local communities,
                and urban planners to identify and resolve high-risk infrastructural gaps in your area.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <p className="italic">
                  "Guided by experts from CFI, you'll turn everyday observations into life-saving interventions.
                  Just one corrected blind turn or repaired crossing can protect hundreds of lives over time."
                </p>
              </div>
              <p className="text-lg font-semibold bg-blue-100 inline-block px-4 py-2 rounded-lg">
                Your efforts can reduce road crashes in your neighborhood by up to 50%, and be part of the national
                movement toward zero road fatalities.
              </p>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-4 text-blue-700">What You'll Get</h3>
            <ul className="space-y-3 text-gray-800">
              <BenefitItem
                text="₹36,000 stipend per team"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  </svg>
                }
              />
              <BenefitItem
                text="Cash prizes up to ₹2,00,000 for top 4 teams"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  </svg>
                }
              />
              <BenefitItem
                text="Expert mentorship from industry leaders"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="7" r="4" />
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
              />
              <BenefitItem
                text="Real impact on your community's safety"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                }
              />
              <BenefitItem
                text="Professional endorsements for your portfolio"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                }
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectRakshak;
