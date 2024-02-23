import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProjectsGallery from "./pages/ProjectsGallery";
import DesignGallery from "./pages/DesignGallery";
import Contact from "./pages/Contact";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-gallery" element={<ProjectsGallery />} />
        <Route path="/design-gallery" element={<DesignGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;