// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProjectsGallery from "./pages/ProjectsGallery";
import DesignGallery from "./pages/DesignGallery";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

import "./css/app.css"

function App() {
  return (
    <Router>
      <div className="bg-dark vh-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-gallery" element={<ProjectsGallery />} />
        <Route path="/design-gallery" element={<DesignGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;