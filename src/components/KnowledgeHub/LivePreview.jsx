import React from 'react'

export default function LivePreview({ header, content }) {
  return (
    <div className="bg-white p-6 shadow rounded space-y-4">
      <div className="flex items-center gap-4  flex-wrap text-sm">
  <span className="bg-orange-200 text-orange-800 font-semibold px-3 py-1 rounded-full uppercase tracking-wide text-xs">
    {header.tag}
  </span>
  <span className="text-gray-500">
    Written By: {header.author} · {header.duration}
  </span>
</div>
<h1 className="text-2xl font-bold text-gray-800">{header.title}</h1>

     <div>
      {header.thumbnail && (
        <img src={header.thumbnail} alt="Story Thumbnail" className="rounded-lg mb-4" />
      )}
      </div>
               <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                <p className="text-lg text-gray-700 font-medium leading-relaxed">{header.summary}</p>
</div>

<div
  className="prose prose-lg max-w-none
    [&>blockquote]:rounded-md
    [&>blockquote]:px-6
    [&>blockquote]:py-4
    [&>blockquote]:not-italic
    [&>blockquote]:text-gray-800
    [&>blockquote]:border-l-4

    [&>blockquote]:bg-orange-50
    [&>blockquote]:border-orange-500

    [&>blockquote.blockquote-success]:bg-green-50
    [&>blockquote.blockquote-success]:border-green-500

    [&>blockquote.blockquote-warning]:bg-yellow-50
    [&>blockquote.blockquote-warning]:border-yellow-500

    [&>blockquote.blockquote-info]:bg-blue-50
    [&>blockquote.blockquote-info]:border-blue-500

    [&>blockquote.blockquote-danger]:bg-red-50
    [&>blockquote.blockquote-danger]:border-red-500
       [&>img]:rounded-lg [&>img]:my-4 [&>img]:shadow
       [&>h2]:text-2xl
        [&>h2]:font-semibold
    [&>h2]:text-gray-800
  "
  dangerouslySetInnerHTML={{ __html: content }}
/>



    </div>
  );
}