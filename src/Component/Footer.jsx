import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="/About" className="hover:underline">About</a>
          <a href="/Services" className="hover:underline">Services</a>
          <a href="/Blog" className="hover:underline">Blog</a>
          <a href="/Careers" className="hover:underline">Careers</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
