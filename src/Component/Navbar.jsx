import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/digitonic.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // check on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Background and text color based on scroll
  const bgClass = scrolled ? "bg-white shadow-md" : "bg-transparent";
  const textColorClass = scrolled ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="max-w-7xl h-20 mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-44 w-52 p-1" />
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-9 ${textColorClass}`}>
          <Link to="/" className="text-lg">Home</Link>
          <Link to="/AboutUs" className="text-lg">About</Link>
          <Link to="/Services" className="text-lg">Services</Link>
          <Link to="/Contact" className="text-lg">Contact</Link>
          <Link to="/Blog" className="text-lg">Blogs</Link>
          <Link to="/Internship" className="text-lg">Internship</Link>
        </div>

        {/* Mobile Menu Button */}
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${textColorClass}`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow text-center">
          <Link to="/" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/AboutUs" className="block py-2 text-black" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Services" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/Contact" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/Blog" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/Internship" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Internship</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
