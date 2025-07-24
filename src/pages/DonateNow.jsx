import React from "react";
import { useState } from "react";
  import {
  Shield,
  Wrench,
  Smartphone,
  Heart,
  Users,
} from "lucide-react";

const DonateNow = () => {
    const items = [
    {
      title: "1. Changing the System, Not Just the Symptoms",
      iconColor: "blue",
      icon: Shield,
      description:
        "We push for stronger laws—and we don't stop there. Our policy research and advocacy efforts drive real enforcement and implementation. Because good policy only saves lives when it's followed through.",
    },
    {
      title: "2. Fixing the Roads Before They Break Us",
      iconColor: "green",
      icon: Wrench,
      description:
        "Cracked pavements. Missing signage. Blind turns. We lead national infrastructure programs that target these dangers head-on. Project Rakshak is just one example—proof that safer roads can be built, not just hoped for.",
    },
    {
      title: "3. Building Smarter Tools for Safer Streets",
      iconColor: "inidgo",
      icon: Smartphone,
      description:
        "We design tech that does more than raise awareness. It alerts, informs, and responds. These aren't one-off apps—they're scalable solutions built to outlast us. Tools that serve citizens, guide policy, and save seconds when seconds matter.",
    },
    {
      title: "4. Standing By Victims When Systems Fall Short",
      iconColor: "red",
      icon:Heart,
      description:
        "When a crash happens, the trauma doesn't end at the scene. We step in—supporting families through medical emergencies, legal hurdles, and financial strain. We also work behind the scenes to strengthen post-crash care across the board.",
    },
    {
      title: "5. Rewiring Habits. Rebuilding Culture.",
      iconColor: "orange",
      icon: Users,
      description:
        "We take on the slow, essential work of behavioral change. Through campaigns, conversations, and community programs, we embed road safety into the everyday. Not just as a rule—but as a value.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <>
      {/* Donate Hero Section */}
      <section
        className="relative py-16 md:py-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(73, 64, 255, 0.8), rgba(107, 99, 255, 0.8)), url('/lovable-uploads/35d89ab1-5528-4fc6-91ab-a2d75f4f5ee0.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Donation Isn't Just Generous.
            <br />
            <span className="text-yellow-300">It's Powerful.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            It turns policy into protection. Roads into lifelines. Ideas into impact.
          </p>
          <div className="flex justify-center">
            <a href="#donation-form" className="inline-flex items-center justify-center gap-2 h-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              Donate Now
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
                className="lucide lucide-arrow-right ml-2 h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Impact Accordion Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Here's How Your Support Fuels Real Change
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every donation directly contributes to making India's roads safer through these proven impact areas.
          </p>

          {/* Static accordion-style list (can be made interactive later) */}
           <div className="max-w-6xl mx-auto space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleDescription(index)}
          className="rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-6 p-6 sm:p-8">
            <div
              className={`bg-${item.iconColor}-50 text-${item.iconColor}-600 p-4 rounded-full`}
            >
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold flex-1">{item.title}</h3>
          </div>

          {/* Description */}
          {activeIndex === index && (
            <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-sm sm:text-base text-gray-600 transition-all duration-300">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* Donation Form */}
       <section id="donation-form" className="py-20 bg-gradient-to-r from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your Donation</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Your generous contribution helps us build safer roads for all Indians. Every donation makes a meaningful difference in saving lives.
      </p>
    </div>

    <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm w-full max-w-2xl mx-auto">
      <div className="flex flex-col space-y-1.5 p-6 text-center">
        <h3 className="font-semibold tracking-tight flex items-center justify-center gap-2 text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-heart h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Make a Donation
        </h3>
        <p className="text-gray-600">Your contribution helps us build safer roads for everyone</p>
      </div>

      <div className="p-6 pt-0">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4 ">
            <div className="space-y-2 ">
              <label for="fullName" className="text-sm font-medium">Full Name *</label>
              <input id="fullName" name="name" type="text" placeholder="Enter your full name" required className="form-input w-full border border-gray-200 rounded-md p-2" />
            </div>
            <div className="space-y-2">
              <label for="email" className="text-sm font-medium">Email Address *</label>
              <input id="email" name="email" type="email" placeholder="your.email@example.com" required className="form-input w-full border border-gray-200 rounded-md p-2" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label for="contact" className="text-sm font-medium">Contact Number *</label>
              <input id="contact" name="contactNumber" type="tel" placeholder="Enter your contact number" required className="form-input w-full border border-gray-200 rounded-md p-2" />
            </div>
            <div className="space-y-2">
              <label for="organization" className="text-sm font-medium">Organization</label>
              <input id="organization" name="organization" type="text" placeholder="Enter organization name or NA" className="form-input w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <label for="address" className="text-sm font-medium">Address</label>
            <textarea id="address" name="address" placeholder="Enter your address (required for tax receipts)" className="form-textarea w-full border border-gray-200 rounded-md p-2"></textarea>
          </div>

          <div className="space-y-2">
            <label for="purpose" className="text-sm font-medium">Purpose of Donation</label>
            <textarea id="purpose" name="purpose" placeholder="Mention a project or your motivation" className="form-textarea w-full  border border-gray-200 rounded-md p-2"></textarea>
          </div>

          <div className="space-y-2">
            <label for="amount" className="text-sm font-medium">Donation Amount (₹) *</label>
            <input id="amount" name="amount" type="number" min="1" value="500" placeholder="Enter amount in INR" required className="form-input w-full border border-gray-200 rounded-md p-2" />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input id="receipt" name="receipt" type="checkbox" className="form-checkbox mt-1" />
              <label for="receipt" className="text-sm">Would you like a donation receipt?</label>
            </div>
            <div className="flex items-start gap-3">
              <input id="subscribe" name="subscribe" type="checkbox" className="form-checkbox mt-1" />
              <label for="subscribe" className="text-sm">Stay connected for updates, volunteering opportunities, and future donation drives</label>
            </div>
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-heart mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Donate ₹500
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Donation Trust Section */}
      <section className="py-16 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 text-center">
      
     
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <h3 className="text-xl font-semibold mb-2">100% Transparent</h3>
        <p className="text-gray-300">Every donation is tracked and reported with full transparency</p>
      </div>
      
     
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
        <h3 className="text-xl font-semibold mb-2">Secure Donations</h3>
        <p className="text-gray-300">Your personal and financial information is completely secure</p>
      </div>
      
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
        <h3 className="text-xl font-semibold mb-2">Direct Impact</h3>
        <p className="text-gray-300">Your donation directly funds life-saving road safety initiatives</p>
      </div>

    </div>
  </div>
</section>

{/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Many of these efforts are already shaping lives on the ground.
            <br />
            More are in motion.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            This is what your donation builds. This is what it protects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 h-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
              Donate Now
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
                className="lucide lucide-arrow-right ml-2 h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <a href="/#ourwork" className="inline-flex items-center justify-center gap-2 h-10 border border-white text-blue-600 bg-white hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg">
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateNow;
