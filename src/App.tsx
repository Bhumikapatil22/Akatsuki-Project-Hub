import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Github, Instagram, Linkedin } from 'lucide-react';
import LandingPage from './components/LandingPage';
import ProjectsDashboard from './components/ProjectsDashboard';
import ContactForm from './components/ContactForm';
import CreateProject from './components/CreateProject';
import ProjectDetails from './components/ProjectDetails';
import PurchaseForm from './components/PurchaseForm';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-black overflow-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProjectsDashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/purchase" element={<PurchaseForm />} />
          <Route path="/contact" element={<ContactForm project={selectedProject} onClose={() => window.history.back()} />} />
        </Routes>
        
        <footer className="fixed bottom-0 w-full bg-black/80 backdrop-blur-sm border-t border-purple-500/20 p-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <p className="text-sm sm:text-base text-gray-400">© 2025 Akatsuki Projects Hub</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;