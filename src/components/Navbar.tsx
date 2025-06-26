import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-white text-lg font-semibold">
            Misbakhul Kharis
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Projects", "Experience", "Resume", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-white"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`fixed top-0 left-0 w-full bg-gray-900 md:hidden flex flex-col items-center py-6 space-y-4 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
        >
          {/* Close Button (FiX Icon) */}
          <button
            className="absolute top-4 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={28} />
          </button>

          {["Home", "About", "Projects", "Experience", "Resume", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 w-full text-center rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-white"
              >
                {item}
              </a>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
