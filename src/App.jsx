import React from 'react';
import Navbar from './Component/Navbar';
// import Hero from './Component/Hero';

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Careers from "./Pages/Careers";
import AboutUs from './Pages/AboutUs';
import Footer from './Component/Footer';
// ✅ Home icon hata diya

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>

      {/* <Hero /> */}
      <Footer/>
    </div>
  );
}

export default App;
