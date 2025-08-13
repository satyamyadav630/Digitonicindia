import React from 'react';
import Navbar from './Component/Navbar';
// import Hero from './Component/Hero';


import { Routes, Route } from "react-router-dom";
import Internship from './Pages/Internship';
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
// import Careers from "./Pages/Careers";
// import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';
// import { AnimatePresence, motion } from "framer-motion";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
<div>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path='Contact' element={<Contact/>}/>
        {/* <Route path="/Careers" element={<Careers />} /> */}
        <Route path="/Internship" element={<Internship />} />
      </Routes>
     
</div>

     
      <Footer/>
    </div>
  );
}

export default App;   