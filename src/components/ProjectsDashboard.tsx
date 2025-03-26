import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import axios from 'axios';

// Define the Project type
interface Project {
  id: number;
  name: string;
  description: string;
  price: number;
  techStack: string;
  image: string;
}

const ProjectsDashboard: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  // Commented API integration code
  /*
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>('your-api-endpoint/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-purple-400">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }
  */

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-black">
      <nav className="border-b border-purple-500/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <ArrowLeft size={20} />
                Back
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Projects Dashboard
              </h1>
            </div>
            <button
              onClick={() => navigate('/create-project')}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/50 hover:bg-purple-500/20 transition-all"
            >
              <Plus size={20} />
              Create Project
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'MERN', 'Java', 'Python'].map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech.toLowerCase())}
              className={`px-6 py-2 rounded-full transition-all duration-300 border ${
                filter === tech.toLowerCase()
                  ? 'bg-black text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-black/50 text-gray-400 border-gray-800 hover:border-purple-500/50'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-semibold">
                    ${project.price}
                  </span>
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="px-4 py-2 bg-black text-purple-400 rounded-lg border border-purple-500/50 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300"
                  >
                    View Details
                  </button>
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