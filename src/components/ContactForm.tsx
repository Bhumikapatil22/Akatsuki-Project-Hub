import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
  project: any;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ project, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    priceRequest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="bg-black border border-purple-500/20 p-8 rounded-xl w-full max-w-md relative shadow-[0_0_25px_rgba(168,85,247,0.1)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Contact for {project?.name}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Price Request ($)</label>
            <input
              type="number"
              required
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
              value={formData.priceRequest}
              onChange={(e) => setFormData({...formData, priceRequest: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg border border-purple-500/50 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm