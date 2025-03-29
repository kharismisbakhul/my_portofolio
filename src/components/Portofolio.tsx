import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaEnvelope, FaWhatsapp, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";

const Portfolio: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-white text-lg font-semibold">MyPortfolio</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Projects", "Experience", "CV", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-900 py-4 space-y-4">
            {["Home", "About", "Projects", "Experience", "CV", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 w-full text-center rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left p-8 space-y-6 md:space-y-0 md:space-x-12">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold">Hi, It's me Kharis</h1>
          <p className="text-xl mt-4">A Frontend Developer with 6 years Experience</p>
        </div>
        {/* <img src="/kharis.png" alt="Haris" className="w-48 h-48 rounded-full shadow-lg border-4 border-white" /> */}
        <img src="/kharis_square.png" alt="Haris" className="w-96 h-100 rounded-full shadow-lg border-4 border-white" />
      </section>

      {/* About Section */}
      <section id="about" className="p-10 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <div className="mt-4 text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
          <p>
            Hi, I’m Kharis, a Frontend Developer with <strong>6 years of experience</strong> specializing in building and optimizing web applications.
          </p>
          <p className="mt-4">
            My journey began during college, where I took on <strong>internships</strong> and <strong>freelance projects</strong>. After graduating, I joined <strong>KUD Minatani Cooperative</strong> as a Web Developer, developing applications to streamline business operations.
          </p>
          <p className="mt-4">
            Later, I moved to <strong>PT. Infomedia Nusantara</strong>, enhancing my expertise in web development while staying up-to-date with the latest technologies.
          </p>
          <p className="mt-4">
            I’m passionate about <strong>problem-solving, clean code, and continuous learning</strong>. I actively explore new frameworks, tools, and best practices to build high-quality, scalable solutions.
          </p>
          <p className="mt-4">
            Outside of coding, I enjoy <strong>basketball, reading, and watching movies</strong> to balance my professional and personal life.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column - Title */}
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-semibold text-center md:text-left">Projects</h2>
          </div>

          {/* Right Column - Project List */}
          <div className="space-y-6">
            {/* Wedding Invitation */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img src="/wedding-invitation.jpg" alt="Wedding Invitation" className="w-40 h-40 rounded-lg shadow-md" />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Wedding Invitation</h3>
                <p>A CodeIgniter-based invitation website</p>
                <p className="text-sm text-gray-400"><strong>Stack:</strong> CodeIgniter, MySQL, jQuery, Bootstrap</p>
              </div>
            </div>

            {/* Digital Agency */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img src="/digital-agency.jpg" alt="Digital Agency" className="w-40 h-40 rounded-lg shadow-md" />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">Digital Agency</h3>
                <p>A Next.js landing page with Strapi</p>
                <p className="text-sm text-gray-400"><strong>Stack:</strong> Next.js, TypeScript, Strapi, Tailwind CSS</p>
              </div>
            </div>

            {/* MERN Stack App */}
            <div className="flex flex-col md:flex-row bg-gray-800 p-6 rounded-lg shadow-md items-center">
              <img src="/mern-app.jpg" alt="MERN Stack App" className="w-40 h-40 rounded-lg shadow-md" />
              <div className="md:ml-6 mt-4 md:mt-0 text-left">
                <h3 className="text-xl font-bold">MERN Stack App</h3>
                <p>A full-stack web app using MongoDB, Express, React, and Node.js</p>
                <p className="text-sm text-gray-400"><strong>Stack:</strong> MongoDB, Express.js, React, Node.js</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="p-10 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center">Experience & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Experience Column */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-center">Experience</h3>
            <br/>

            {/* PT. INFOMEDIA NUSANTARA */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">PT. INFOMEDIA NUSANTARA – Jakarta, Indonesia</h3>
              <p className="text-gray-400">Web Developer (June 2022 – August 2024)</p>
            </div>

            {/* KUD MINATANI COOPERATIVE */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">KUD MINATANI COOPERATIVE – Lamongan, Indonesia</h3>
              <p className="text-gray-400">Web Developer (September 2020 – May 2022)</p>
            </div>

            {/* PSIK, FACULTY OF ECONOMICS AND BUSINESS, BRAWIJAYA UNIVERSITY */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">PSIK, Faculty of Economics and Business, Brawijaya University – Malang, Indonesia</h3>
              <p className="text-gray-400">Web Developer (June 2019 – April 2021)</p>
            </div>

            {/* FACULTY OF COMPUTER SCIENCE, BRAWIJAYA UNIVERSITY */}
            <div className="mb-8 text-center">
              <h3 className="text-xl font-semibold">Faculty of Computer Science, Brawijaya University – Malang, Indonesia</h3>
              <p className="text-gray-400">Teaching Assistant (February 2019 – May 2019)</p>
            </div>

          </div>
          {/* Education Column */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-center">Education</h3>
            <br/>

            <div className="flex flex-col items-center text-center">
              <img src="/brawijaya_university.png" alt="Brawijaya University Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
              <div>
                <h3 className="text-xl font-bold">Brawijaya University</h3>
                <p className="text-gray-300">(2016 - 2020)</p>
                <br/>
                <p>Bachelor's degree in <strong>Informatics Engineering</strong></p>
                <p>GPA: <strong>3.70 / 4.0</strong></p>
                <br/>
                <div className="inline"></div>
                <p>Bachelor's degree certificates from campus can be seen here</p>
                <a 
                  href="/Bachrelors_Degree_Certificate.pdf" // Update this with the actual path to your CV file
                  download="Bachrelors_Degree_Certificate.pdf"
                  className="mt-4 inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  <PiCertificateBold />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="cv" className="p-10">
        {/* CV Download Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-center">See my CV</h2>
          <p className="text-gray-400 mt-2">Get a copy of my resume to know more about my experience and skills.</p>
          <a 
            href="/CV_Misbakhul_Kharis.pdf" // Update this with the actual path to your CV file
            download="CV_Misbakhul_Kharis.pdf"
            className="mt-4 inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            <FaDownload className="mr-2" /> Download
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start mt-12">
          
          {/* Left Column - Description */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Feel free to reach out through any of my social platforms.  
              Whether it's a collaboration, project inquiry, or just to say hello,  
              I'm always happy to connect!
            </p>
          </div>

          {/* Center Column - Social Links (First Half) */}
          <div className="grid gap-4 text-lg">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-400" />
              <a href="mailto:kharismisbakhul@gmail.com" className="hover:text-gray-400">kharismisbakhul@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaGithub className="text-gray-400" />
              <a href="https://github.com/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">github.com/kharismisbakhul</a>
            </div>
            <div className="flex items-center space-x-3">
              <SiLeetcode className="text-gray-400" />
              <a href="https://leetcode.com/u/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">leetcode.com/u/kharismisbakhul</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-gray-400" />
              <a href="https://linkedin.com/in/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">linkedin.com/in/kharismisbakhul</a>
            </div>
          </div>

          {/* Right Column - Social Links (Second Half) */}
          <div className="grid gap-4 text-lg">
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-gray-400" />
              <a href="https://wa.me/6285607872843" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">+62856-0787-2843</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaInstagram className="text-gray-400" />
              <a href="https://instagram.com/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">@kharismisbakhul</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaTelegram className="text-gray-400" />
              <a href="https://t.me/kharismisbakhul" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">@kharismisbakhul</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaFacebook className="text-gray-400" />
              <a href="https://facebook.com/misbakhulkharis" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Misbakhul Kharis</a>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Portfolio;
