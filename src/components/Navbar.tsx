import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div>
          <Link className="mx-2 hover:text-gray-400" to="/">Home</Link>
          <Link className="mx-2 hover:text-gray-400" to="/about">About</Link>
          <Link className="mx-2 hover:text-gray-400" to="/projects">Projects</Link>
          <Link className="mx-2 hover:text-gray-400" to="/experience">Experience</Link>
          <Link className="mx-2 hover:text-gray-400" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
