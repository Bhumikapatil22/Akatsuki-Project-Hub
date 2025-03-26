import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Github, Instagram, Linkedin } from 'lucide-react';
import LandingPage from './components/LandingPage';
import ProjectsDashboard from './components/ProjectsDashboard';
import ContactForm from './components/ContactForm';
import CreateProject from './components/CreateProject';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProjectsDashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactForm project={selectedProject} onClose={() => window.history.back()} />} />
        </Routes>
        
        <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-sm border-t border-purple-500/20 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-gray-400">© 2025 Akatsuki Projects Hub</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;