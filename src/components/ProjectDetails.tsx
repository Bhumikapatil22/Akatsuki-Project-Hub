import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="container mx-auto max-w-4xl">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        <div className="bg-black border border-purple-500/20 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.1)]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              {project.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/50">
                {project.techStack}
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                ${project.price}
              </span>
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/50 hover:bg-purple-500/20 transition-all"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/50 hover:bg-purple-500/20 transition-all"
              >
                <Github size={20} />
                View Code
              </a>
            </div>
            
            <div className="prose prose-invert max-w-none mb-8">
              <div className="text-gray-400 whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>

            <div className="border-t border-purple-500/20 pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Developer</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-all"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;