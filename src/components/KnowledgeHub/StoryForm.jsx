import React from "react";
import { supabase } from "../../supabase";
import { useState } from "react";
export default function StoryForm({ onSuccess, onCancel }) {
const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const location = form.location.value.trim();
    const role = form.role.value;
    const story = form.story.value.trim();
    const anonymous = form.anonymous.value;
    const consent = form.consent.checked;

    const wordCount = story.split(/\s+/).filter(Boolean).length;

    if (!fullName || !email || !date || !location || !role || wordCount < 100 || !consent) {
      alert("Please fill all required fields. Story must be at least 100 words.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.from("stories").insert([
        {
          full_name: fullName,
          email,
          phone,
          date,
          location,
          role,
          story,
          anonymous,
          consent,
        },
        
      ]);
      setLoading(false);

      if (error) {
        console.error("Supabase Error:", error);
        setLoading(false);
        alert("Something went wrong while saving your story. Please try again.");
        return;
      }
setLoading(false);
  form.reset();
      onSuccess(); // 👈 Modal close callback
    } catch (err) {
      console.error("Unexpected Error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Full Name</label>
          <input name="fullName" required className="w-full border border-gray-200 rounded px-3 py-2 mt-2" />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" required className="w-full border border-gray-200 rounded px-3 py-2 mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Phone Number (Optional)</label>
          <input name="phone" className="w-full border border-gray-200 rounded px-3 py-2 mt-2" />
        </div>
        <div>
          <label>Date of Incident</label>
          <input name="date" type="date" required className="w-full border border-gray-200 rounded px-3 py-2 mt-2" />
        </div>
      </div>

      <div>
        <label>Incident Location</label>
        <input name="location" required className="w-full border border-gray-200 rounded px-3 py-2 mt-2" />
      </div>

      <div>
        <label>Your Role</label>
        <div className="space-y-2 mt-2">
          <label><input type="radio" name="role" value="helper" required className="mr-2" /> I helped someone</label><br />
          <label><input type="radio" name="role" value="witness" className="mr-2" /> I witnessed someone helping</label><br />
          <label><input type="radio" name="role" value="helped" className="mr-2" /> I was helped</label>
        </div>
      </div>

      <div>
        <label>Your Story (Min 100 words)</label>
        <textarea name="story" rows="6" required className="w-full border border-gray-200 rounded px-3 py-2 mt-2" placeholder="Tell your story in detail..."></textarea>
      </div>

      <div>
        <label>Upload media (optional)</label>
        <input type="file" multiple accept="image/*,video/*" className="w-full border border-gray-200 rounded px-3 py-2 mt-2" />
      </div>

      <div>
        <label>Stay Anonymous?</label>
        <div className="flex gap-4 mt-2">
          <label><input type="radio" name="anonymous" value="yes" className="mr-2" /> Yes</label>
          <label><input type="radio" name="anonymous" value="no" className="mr-2" defaultChecked /> No</label>
        </div>
      </div>

      <div>
        <label><input type="checkbox" name="consent" className="mr-2" required /> I give permission to publish my story and media.</label>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button type="button" className="px-4 py-2 border rounded hover:bg-gray-100" onClick={onCancel}>Cancel</button>
<button
  type="submit"
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 flex items-center justify-center gap-2"
  disabled={loading}
>
  {loading ? (
    <>
      <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      Submitting...
    </>
  ) : (
    "Share Your Story"
  )}
</button>      </div>
    </form>
  );
}
