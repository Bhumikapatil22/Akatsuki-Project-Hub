import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      <div className="text-center relative z-10">
        <img 
          src="https://www.pngmart.com/files/23/Akatsuki-Logo-PNG-Pic.png"
          alt="Akatsuki Logo"
          className="w-32 mx-auto mb-6 transform rotate-[-8deg]"
        />
        <div className="inline-block">
          <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text relative leading-relaxed py-2">
            Akatsuki Projects Hub
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2" />
        </div>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto mt-8">
          Discover exceptional software projects crafted by elite developers. 
          From MERN stack applications to Java enterprise solutions, find the 
          perfect project for your needs.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full overflow-hidden transition-all duration-300 border border-purple-500/50 hover:border-purple-500"
        >
          <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold">
            Explore Projects
          </span>
          <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform text-purple-400" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;