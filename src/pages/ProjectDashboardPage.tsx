import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, ThumbsDown, ThumbsUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { IProject } from '../types';


const ProjectsDashboard: React.FC = () => {

  const navigate = useNavigate();

  const techStackOptions = [
    'MERN', 'Java', 'Python'
  ];


  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<number[]>([]);
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [dislikes, setDislikes] = useState<Record<number, number>>({});
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');


  useEffect(() => {
    const fetchProjects = async () => {
      try {
       
        const response = await axios.get<IProject[]>(`https://akatsuki-cohert.vercel.app/api/projects`);
        console.log(response.data);
        setProjects(response.data);
        setLoading(false);
      } catch (error: unknown) {
        console.log('Error while fetch projects', error)
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  const filteredProjects = projects
    .filter((project) => {
      // Check for null or undefined project or techStack
      if (!project?.techStack) return false;
      if (filter !== 'all' && project.techStack.toLowerCase() !== filter) {
        return false;
      }
      return true;
    })
    .filter((project) => {
      // Check for missing title or description
      if (!project?.title || !project?.description) return false;
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    });



  const handleAddToCart = (projectId: number) => {
    if (!cart.includes(projectId)) {
      setCart([...cart, projectId]);
    }
  };

  const handleRemoveFromCart = (projectId: number) => {
    setCart(cart.filter(id => id !== projectId));
  };

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDislike = (id: number) => {
    setDislikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-2xl text-purple-400">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-700">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar
        title="Explore Projects"
        backPath="/"
        showSearch
        showCreateButton
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="container mx-auto px-4 my-16">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {['All', ...techStackOptions].map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech.toLowerCase())}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 border ${filter === tech.toLowerCase()
                ? 'bg-black text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-black/50 text-gray-400 border-gray-800 hover:border-purple-500/50'
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="relative">
                <img
                  src={project.coverImageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-lg font-semibold">
                  ₹{project.price}
                </div>
              </div>

              <div className="p-4 sm:p-6 relative z-20">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center md:gap-2">

                  <div className="flex gap-2 md:gap-4">
                    <button
                      onClick={() => handleLike(project._id)}
                      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <ThumbsUp size={20} /> {likes[project._id] || 0}
                    </button>
                    <button
                      onClick={() => handleDislike(project._id)}
                      className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <ThumbsDown size={20} /> {dislikes[project._id] || 0}
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {cart.includes(project._id) ? (
                      <button
                        onClick={() => handleRemoveFromCart(project._id)}
                        className="px-3 py-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/50 hover:bg-red-500/20 transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(project._id)}
                        className="p-1 md:px-2 md:py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/50 hover:bg-green-500/20 transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                    )}
                    <button
                      onClick={() => navigate(`/project/${project._id}`)}
                      className="p-1 md:px-2 md:py-2 bg-black text-purple-400 rounded-lg border border-purple-500/50 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300 text-sm"
                    >
                      View Details
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDashboard;
