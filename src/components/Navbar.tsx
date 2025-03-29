import React from 'react';
import { ArrowLeft, Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  title: string;
  backPath: string;
  showSearch?: boolean;
  showCreateButton?: boolean;
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  backPath,
  showSearch = false,
  showCreateButton = false,
  searchQuery = '',
  setSearchQuery
}) => {
  const navigate = useNavigate();

  return (
    <nav className="border-b border-purple-500/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(backPath)}
              className="flex items-center justify-center gap-2 p-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/50 hover:bg-purple-500/20 transition-all whitespace-nowrap"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              {title}
            </h1>
          </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              {showSearch && setSearchQuery && (
                <div className="relative flex-1 sm:flex-none">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2 bg-black text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              )}

              {showCreateButton && (
                <button
                  onClick={() => navigate('/create-project')}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/50 hover:bg-purple-500/20 transition-all whitespace-nowrap"
                >
                  <Plus size={20} />
                  Create Project
                </button>
              )}
            </div>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
