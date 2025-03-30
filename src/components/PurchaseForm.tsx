import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface PurchaseFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const PurchaseForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  const [formData, setFormData] = useState<PurchaseFormData>({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-red-400">No project selected for purchase</div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle purchase form submission
    console.log({ ...formData, projectId: project.id, price: project.price });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black border border-purple-500/20 p-6 sm:p-8 rounded-xl w-full max-w-md relative shadow-[0_0_25px_rgba(168,85,247,0.1)]">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>
        
        <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Purchase {project.name}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Mobile Number</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="mb-4">
            <p className="text-gray-400">Price: <span className="text-purple-400">₹{project.price}</span></p>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg border border-purple-500/50 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;