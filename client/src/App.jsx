import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <Router>
      <div className="relative">
        <div className="texture" />
        <Navbar />
        <div className="pt-24 px-4 min-h-[100vh] flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
