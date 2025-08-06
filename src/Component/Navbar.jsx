// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import digitonic from'../assets/digitonic.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={digitonic}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 p-2 m items-center font-medium text-white">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs" className="hover:text-blue-500">AboutUs</Link>
          </li>
          <li>
            <Link to="/Services" className="hover:text-blue-500">Services</Link>
          </li>
          <li>
            <Link to="/Blog" className="hover:text-blue-500">Blog</Link>
          </li>
          <li>
            <Link to="/Careers" className="hover:text-blue-500">Careers</Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              <PhoneCall size={16} />
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 bg-white rounded-md shadow-md text-slate-700 p-4 space-y-3 font-medium">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/AboutUs" onClick={() => setIsOpen(false)}>AboutUs</Link></li>
          <li><Link to="/Services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/Blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/Careers" onClick={() => setIsOpen(false)}>Careers</Link></li>
          <li>
            <Link
              to="/Contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              <PhoneCall size={16} />
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
