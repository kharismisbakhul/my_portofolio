import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Portfolio from "./components/Portofolio";

const App: React.FC = () => {
  return (
    <Router>
      <Portfolio/>
    </Router>
  );
};

export default App;