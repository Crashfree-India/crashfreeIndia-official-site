import React from "react";
import { CheckCircle } from "lucide-react";

export default function ThankYouScreen({ onClose }) {
  return (
    <div className="p-8 text-center max-w-4xl mx-auto">
         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Share Your Good Samaritan Story
          </h2>
      <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Thank You for Sharing Your Story!</h2>
      <p className="text-gray-600 mb-4">
        Your story has been received and means more than you know. Every act of kindness on our roads creates ripples of hope and inspires others to be heroes too.
        
      </p>
      <p className="text-gray-600 mb-4">
        We'll review your submission carefully. If your story is verified and published, you'll be eligible for our small token of appreciation—an Amazon voucher worth ₹1000. Not as payment for your heroism, but as our way of saying thank you for making our roads safer and kinder.
      </p>
      <p className="text-gray-600 mb-6">
        If we need any additional details, we'll reach out to you. Until then, know that your courage and compassion are making a difference.
      </p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={onClose}
      >
        Keep being the person who stops to help.
      </button>
    </div>
  );
}
