// Navbar.jsx
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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const isHome = location.pathname === "/";
  const bgClass = isHome
    ? scrolled
      ? "bg-gray-900 shadow-md"
      : "bg-transparent"
    : "bg-transparent";

    
  return (
    <nav className={`fixed top-0    left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl  h-20 mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex  items-center over">
          <img src={logo} alt="Logo" className="h-44 w-52 p-1 " />
        </Link>

        <div className="hidden md:flex space-x-9">
          <Link to="/" className="text-white text-lg">Home</Link>
          <Link to="/AboutUs" className="text-white text-lg">About</Link>
          <Link to="/Services" className="text-white text-lg">Services</Link>
          <Link to="/Contact" className="text-white text-lg">Contact</Link>
          <Link to="/Blog" className="text-white text-lg">Blogs</Link>
          <Link to="/Internship" className="text-white text-lg">Internship</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="block py-2" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/blog" className="block py-2" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/Internship" className="block py-2" onClick={() => setIsOpen(false)}>Internship</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
