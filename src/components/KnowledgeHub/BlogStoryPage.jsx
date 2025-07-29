// src/pages/BlogStoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useNavigate } from 'react';
import { supabase } from '../../supabase';


export default function BlogStoryPage() {
  const { slug } = useParams();
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchStory = async () => {
    // Step 1: Get card with its section (title & iconBg)
    const { data: card, error: cardError } = await supabase
      .from('accordion_cards')
      .select(`
        *,
        section:accordion_sections (
          title,
          iconBg
        )
      `)
      .eq('link', `/blog/${slug}`)
      .single();

    if (cardError || !card) {
      console.error('Card not found:', cardError);
      setLoading(false);
      return;
    }

    // Step 2: Get story content using card_id
    const { data: story, error: storyError } = await supabase
      .from('story_pages')
      .select('*')
      .eq('card_id', card.id)
      .single();

    if (storyError || !story) {
      console.error('Story not found:', storyError);
      setLoading(false);
      return;
    }

    // Step 3: Combine data into storyData
    setStoryData({
      ...card,
      content: story.content,
      section: card.section?.title || 'Untitled Section',
      iconBg: card.section?.iconBg || '#6366f1', // fallback color if missing
    });

    setLoading(false);
  };

  fetchStory();
}, [slug]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  if (!storyData) return <div className="p-4 text-center text-red-600">Story not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 mt-24">
  {/* Meta Info */}
 <div className="text-sm text-gray-600 mb-4 flex items-center flex-wrap gap-4">

  {/* Section Tag */}
<div
  className={`inline-block px-4 py-1 rounded-full text-sm font-semibold text-white bg-indigo-500`}
>
  {storyData.section}
</div>
  {/* Read Time */}
  <span className="flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
    {storyData.readTime} read
  </span>

  {/* Author */}
  <span className="flex items-center gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    Written By: {storyData.author}
  </span>
</div>


  {/* Title */}
  <h1 className="text-4xl font-bold mb-4">{storyData.title}</h1>

  {/* Thumbnail Image */}
  <img src={storyData.image} alt={storyData.title} className="mb-6 rounded shadow" />

  {/* Story Content */}
  <div
    className="prose max-w-none"
    dangerouslySetInnerHTML={{ __html: storyData.content }}
  />
</div>

  );
}
