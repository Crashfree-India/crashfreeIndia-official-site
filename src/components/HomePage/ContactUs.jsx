// components/ContactUs.jsx
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center w-full">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>
      <p className="text-gray-600 mt-6 mb-10 text-lg">
        Have questions or want to join our mission? We'd love to hear from you.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-left">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Send Us a Message</h3>
          <form className="space-y-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us how you'd like to get involved..."
                className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
     <div className="flex flex-col gap-6">
      {/* Get in Touch */}
      <div className="bg-white p-12 rounded-xl shadow-md">
        <h3 className="text-2xl font-extrabold mb-4 text-gray-900">Get in Touch</h3>

        <div className="flex items-center gap-3 mb-3 text-gray-700">
          <Mail className="text-indigo-600 w-5 h-5" />
          <div>
            <div className="font-medium text-black">Email</div>
            <div className="text-sm">hello@crashfreeindia.org</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3 text-gray-700">
          <Phone className="text-indigo-600 w-5 h-5" />
          <div>
            <div className="font-medium text-black">Phone</div>
            <div className="text-sm">+91 9667197064</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <MapPin className="text-indigo-600 w-5 h-5" />
          <div>
            <div className="font-medium text-black">Office</div>
            <div className="text-sm">New Delhi, India</div>
          </div>
        </div>
      </div>

      {/* Connect With Us */}
      <div className="bg-white p-12 rounded-xl shadow-md">
        <h3 className="text-2xl font-extrabold mb-4 text-gray-900">Connect With Us</h3>
        <p className="text-md text-gray-600 mb-4">
          Follow us on social media to stay updated on our latest initiatives and how you can contribute.
        </p>
        <div className="flex gap-4 text-indigo-600">
         <a
  href="#"
  aria-label="Instagram"
  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-200 transition"
>
  <Instagram className="w-5 h-5 text-white" />
</a>
          <a href="#" aria-label="Twitter"  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-200 transition">
            <Twitter className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="LinkedIn"  className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-200 transition">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default ContactUs;
