import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectDashboard from './pages/ProjectDashboardPage';
import CreateProject from './pages/CreateProjectPage';
import ProjectDetails from './pages/ProjectDetailsPage';
import PurchaseForm from './components/PurchaseForm';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-black overflow-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProjectDashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project/:_id" element={<ProjectDetails />} />
          <Route path="/purchase" element={<PurchaseForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;