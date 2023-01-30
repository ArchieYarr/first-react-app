import ReactDOM from "react-dom/client";
import React from "react";
import Contact from "./Contact"
import About from "./About"
import Footer from "./Footer"
import BBCPoliticsCard from "./HomeComponents/BBCPoliticsCard";
import PortfolioSiteCard from "./HomeComponents/PortfolioSiteCard";

import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";

import {Link} from "react-scroll"



function Home() {
  
  return (
    
    //Grid Containing the Home Page Content
    // div 1 = Heading Image, second nested grid contains the case study cards 
    <div className="flex flex-col  gap-10 " id = "home">

<div className="hero min-h-screen bg-base-100 shadow-2x1 ">
  <div className="hero-content flex-col lg:flex-row">
  <img className=" max-w-sm rounded-lg shadow-2xl" src={homeHeader}/> 
    <div>
      <h1 className="text-5xl font-bold">Hi I'm Archie! </h1>
      <p className="py-6">I'm a Computing Science graduate and aspiring UX designer. Have a look at some of my work and learn a bit about me, feel free to get in touch too!</p>
      <Link to = 'Study1' spy={true} smooth={true} offset={50} duration={500}><button className="btn btn-primary">Check out my work!</button></Link>
    </div>
  </div>
</div>

      <div className ="mt-8 grid-cols-1 grid-flow-col gap-10 lg:px-80 lg:pt-52 lg:pb-52" id ="Study1" >

      <BBCPoliticsCard />
      <PortfolioSiteCard />

    </div>

    <div className="lg:pb-96">
      <About />
      </div>

      
      <Contact />
    
      <Footer />
    
    </div>
  );
}

export default Home;
