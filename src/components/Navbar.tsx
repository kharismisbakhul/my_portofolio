import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md p-4 z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <a href="#hero" className="text-white text-lg font-semibold">My Portfolio</a>

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
    </>
  );
};

export default Navbar;
