// components/AboutUs.jsx
import React from 'react';
import { Eye, Rocket, Wrench } from 'lucide-react'; // You can use Heroicons or Lucide for icons

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-black mb-4">About Us</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Crashfree India is a national movement committed to making mobility safer and reversing this crisis – permanently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
        <div className="flex flex-col items-center text-center px-4">
          <Eye className="text-indigo-600 w-8 h-8 mb-2" />
          <h3 className="text-xl font-extrabold text-indigo-600 mb-2 ">Our Vision</h3>
          <p className="text-gray-700">
            A future where no life is lost to road crashes – an India with zero road fatalities by 2040
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <Rocket className="text-indigo-600 w-8 h-8 mb-2" />
          <h3 className="text-xl font-extrabold text-indigo-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Transforming the mobility ecosystem – making every road, vehicle, and community inherently safe
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <Wrench className="text-indigo-600 w-8 h-8 mb-2" />
          <h3 className="text-xl font-extrabold text-indigo-600 mb-2">Our Approach</h3>
          <p className="text-gray-700">
            Transformation through data, youth, policy, innovation, collaboration, and empowered people
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
