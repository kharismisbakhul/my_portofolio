import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Cv from "../pages/Cv";
import Contact from "../pages/Contact";

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen">
      <Navbar/>      
      <Hero />
      <About />
      <Projects/>
      <Experience/>
      <Cv/>
      <Contact/>
    </div>
  );
};

export default Portfolio;
