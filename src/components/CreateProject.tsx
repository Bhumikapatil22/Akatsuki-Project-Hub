import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, List, ListOrdered, ArrowLeft } from 'lucide-react';

const CreateProject: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    techStack: 'MERN'
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert min-h-[200px] focus:outline-none text-gray-300'
      }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle project creation here
    navigate('/dashboard');
  };

  return (  
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-400 hover:text-purple-500 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        <div className="bg-[#111111] border border-purple-500/20 rounded-xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.1)]">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Create New Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Project Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 bg-[#0a0a0a] text-gray-300 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Image URL</label>
              <input
                type="url"
                required
                className="w-full px-4 py-2 bg-[#0a0a0a] text-gray-300 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <div className="border border-gray-800 rounded-lg overflow-hidden">
                <div className="border-b border-gray-800 p-2 flex gap-2 bg-[#0a0a0a]">
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className={`p-2 rounded hover:bg-purple-500/10 ${editor?.isActive('bold') ? 'text-purple-500' : 'text-gray-400'}`}
                  >
                    <Bold size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    className={`p-2 rounded hover:bg-purple-500/10 ${editor?.isActive('italic') ? 'text-purple-500' : 'text-gray-400'}`}
                  >
                    <Italic size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBulletList().run()}
                    className={`p-2 rounded hover:bg-purple-500/10 ${editor?.isActive('bulletList') ? 'text-purple-500' : 'text-gray-400'}`}
                  >
                    <List size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                    className={`p-2 rounded hover:bg-purple-500/10 ${editor?.isActive('orderedList') ? 'text-purple-500' : 'text-gray-400'}`}
                  >
                    <ListOrdered size={20} />
                  </button>
                </div>
                <EditorContent editor={editor} className="p-4 bg-[#0a0a0a]" />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Tech Stack</label>
              <select
                className="w-full px-4 py-2 bg-[#0a0a0a] text-gray-300 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
                value={formData.techStack}
                onChange={(e) => setFormData({...formData, techStack: e.target.value})}
              >
                <option value="MERN">MERN</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Price (₹)</label>
              <input
                type="number"
                required
                min="0"
                className="w-full px-4 py-2 bg-[#0a0a0a] text-gray-300 rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0a0a0a] text-gray-300 rounded-lg border border-purple-500/50 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20"
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;