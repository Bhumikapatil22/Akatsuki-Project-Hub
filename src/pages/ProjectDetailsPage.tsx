import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Github, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { IProject } from '../types';

const ProjectDetails: React.FC = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  // const project = projects.find(p => p.id === Number(_id));
  console.log(_id)


  //axios 
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://akatsuki-cohert-api.vercel.app/api/projects/${_id}`)
      .then(response => {
        console.log(response.data);
        setProject(response.data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.log(err)
        setError('Project not found');
        setLoading(false);
      });

  }, [_id]);


  //axios end
  if (!project) {
    return <div>Project not found</div>;
  }
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

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-700">Project not found</div>
      </div>
    );
  }

  const handlePurchase = () => {
    navigate('/purchase', { state: { project } });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar
        title="Project Details"
        backPath="/dashboard"
      />

      <div className="container mx-auto px-4 my-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black border border-purple-500/20 rounded-xl overflow-h_idden shadow-[0_0_25px_rgba(168,85,247,0.1)]">
            <img
              src={project.coverImageUrl}
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover"
            />

            <div className="p-4 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                <span className="px-3 sm:px-4 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/50">
                  {project.techStack}
                </span>

                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  ₹{project.price}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/50 hover:bg-purple-500/20 transition-all text-sm sm:text-base"
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  Live Demo
                </a>
                <button
                  onClick={handlePurchase}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/50 hover:bg-green-500/20 transition-all text-sm sm:text-base"
                >
                  Purchase Now
                </button>
              </div>

            
              <div className="prose prose-invert max-w-none mb-6 sm:mb-8">
                <div
                  className="text-sm sm:text-base text-gray-400 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: project.details }}
                />
              </div>


              <div className="border-t border-purple-500/20 pt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">Contact Developer</h3>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all"
                  >
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all"
                  >
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all"
                  >
                    <Instagram size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;