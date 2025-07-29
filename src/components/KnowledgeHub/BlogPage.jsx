import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import { CustomBlockquote } from './CustomBlockquote';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Blockquote from '@tiptap/extension-blockquote';
import { common, createLowlight } from 'lowlight';
import slugify from 'slugify';
import { Button } from './ui/Button';
import LivePreview from './LivePreview';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from './ui/dropdown-menu';

const lowlight = createLowlight(common);

export default function BlogPage() {
  const [sections, setSections] = useState([]);
  const [formData, setFormData] = useState({
    section_id: '',
    title: '',
    description: '',
    summary: '',
    readTime: '',
    author: '',
    image: '',
    slug: '',
    tag: 'Hear from Crashfree India',
  });
  const [submitting, setSubmitting] = useState(false);
  const [content, setContent] = useState('');

const insertColoredBlockquote = (editor, type) => {
  const { state } = editor;
  const isBlockquote = state.schema.nodes.blockquote;

  const from = state.selection.from;
  const to = state.selection.to;
  const text = state.doc.textBetween(from, to, ' ') || 'Your quote here';

  const parentNode = state.doc.resolve(from).node();

  // If already a blockquote, remove it
  if (parentNode.type.name === 'blockquote') {
    editor.chain().focus().lift('blockquote').run();
  } else {
    editor
      .chain()
      .focus()
      .insertContent(`<blockquote class="blockquote-${type}">${text}</blockquote>`)
      .run();
  }
};

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ blockquote: false }),
      Underline,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Heading.configure({ levels: [2, 3] }),
      CustomBlockquote,
      Blockquote,
      CodeBlockLowlight.configure({ lowlight }),
      Image,
    ],
    content: '',
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  useEffect(() => {
    const fetchSections = async () => {
      const { data } = await supabase.from('accordion_sections').select('*');
      setSections(data || []);
    };
    fetchSections();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!editor || !formData.section_id) return;
    setSubmitting(true);

    const slug = slugify(formData.title, { lower: true });
    const link = `/blog/${slug}`;

    const { data: cardData, error: cardError } = await supabase.from('accordion_cards').insert([{
      section_id: formData.section_id,
      title: formData.title,
      description: formData.description,
      summary: formData.summary,
      readTime: formData.readTime,
      author: formData.author,
      image: formData.image,
      status: 'Published',
      link,
    }]).select().single();

    if (cardError) {
      console.error('Card Error:', cardError);
      setSubmitting(false);
      return;
    }

    const { error: storyError } = await supabase.from('story_pages').insert([{
      card_id: cardData.id,
      content: editor.getHTML(),
    }]);

    if (storyError) {
      console.error('Story Error:', storyError);
    } else {
      alert('Story published successfully!');
      editor.commands.clearContent();
      setFormData({
        section_id: '',
        title: '',
        description: '',
        summary: '',
        readTime: '',
        author: '',
        image: '',
        slug: '',
        tag: 'Hear from Crashfree India',
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Publish a New Story</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* LEFT: FORM + EDITOR */}
        <div className="space-y-4">
          <select name="section_id" value={formData.section_id} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Section</option>
            {sections.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>

          <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
          <input name="description" value={formData.description} onChange={handleChange} placeholder="Description (shown on card)" className="w-full p-2 border rounded" />
          <textarea name="summary" value={formData.summary} onChange={handleChange} placeholder="Short Summary " className="w-full p-2 border rounded" />
          <input name="readTime" value={formData.readTime} onChange={handleChange} placeholder="e.g. 5 min" className="w-full p-2 border rounded" />
          <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border rounded" />
<input
  type="file"
  accept="image/*"
  onChange={async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const { data, error } = await supabase.storage
      .from('story-images')
      .upload(`thumbnails/${Date.now()}-${file.name}`, file);

    if (!error && data?.path) {
      const { data: urlData } = supabase.storage
        .from('story-images')
        .getPublicUrl(data.path);
      setFormData((prev) => ({ ...prev, image: urlData.publicUrl }));
    } else {
      console.error(error);
      alert('Failed to upload thumbnail');
    }
  }}
  className="w-full p-2 border rounded"
/>

          {/* Toolbar */}
          {editor && (
            <div className="flex flex-wrap gap-2">
  {/* Text Formatting */}
  <Button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</Button>
  <Button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</Button>
  <Button onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</Button>
  <Button onClick={() => editor.chain().focus().toggleHighlight().run()}>Highlight</Button>

  {/* Headings */}
  <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Button>
  <Button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Button>

  {/* Special */}
  <Button onClick={() => editor.chain().focus().toggleBlockquote().run()}>Blockquote</Button>
<Button
  onClick={async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const { data, error } = await supabase.storage
        .from('story-images')
        .upload(`inline-images/${Date.now()}-${file.name}`, file);

      if (!error && data?.path) {
        const { data: urlData } = supabase.storage
          .from('story-images')
          .getPublicUrl(data.path);

        editor.chain().focus().setImage({ src: urlData.publicUrl }).run();
      } else {
        console.error(error);
        alert('Failed to upload image');
      }
    };
    input.click();
  }}
>
  Upload Image
</Button>

  {/* Callouts Dropdown */}
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Blockquote options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={() => insertColoredBlockquote(editor, 'success')}>✅ Green</DropdownMenuItem>
    <DropdownMenuItem onClick={() => insertColoredBlockquote(editor, 'warning')}>⚠️ Yellow</DropdownMenuItem>
    <DropdownMenuItem onClick={() => insertColoredBlockquote(editor, 'info')}>ℹ️ Blue</DropdownMenuItem>
    <DropdownMenuItem onClick={() => insertColoredBlockquote(editor, 'danger')}>❌ Red</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>

          )}

          <EditorContent
  editor={editor}
  className="border border-gray-300 rounded p-3 min-h-[200px] bg-white tiptap"
/>


          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Publishing...' : 'Publish Story'}
          </Button>
        </div>

        {/* RIGHT: LIVE PREVIEW */}
        <LivePreview
          header={{
            title: formData.title,
            summary: formData.summary,
            author: formData.author,
            duration: formData.readTime,
            thumbnail: formData.image,
            tag: formData.tag,
          }}
          content={content}
        />
      </div>
    </div>
  );
}
