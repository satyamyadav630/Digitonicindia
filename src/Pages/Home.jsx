import React from "react";
import Hero from "../Component/Hero";
import Serving from "./Serving";
import Text from "./Text";
import CompanyStats from "./ComponyState";
import Platforms from "./Plateforms";
// import Home from './components/Home'; 


const Home = () => {
  return (
    <div>
       <Hero/>
       <Serving/>
    <Text/>
    <CompanyStats/>
    <Platforms/>
      
    </div>
  );
};

export default Home;
