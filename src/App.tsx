import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectDashboard from './pages/ProjectDashboardPage';
import CreateProject from './pages/CreateProjectPage';
import ProjectDetails from './pages/ProjectDetailsPage';
import PurchaseForm from './components/PurchaseForm';
import Footer from './components/Footer';
// import ContactForm from './components/ContactForm';

function App() {
  // const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-black overflow-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProjectDashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/purchase" element={<PurchaseForm />} />
          {/* <Route path="/contact" element={<ContactForm project={selectedProject} onClose={() => window.history.back()} />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;