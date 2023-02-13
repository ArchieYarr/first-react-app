import ReactDOM from "react-dom/client";
import React from "react";
import Contact from "./Contact"
import About from "./About"
import Footer from "./Footer"
import BBCPoliticsCard from "./HomeComponents/BBCPoliticsCard";
import PortfolioSiteCard from "./HomeComponents/PortfolioSiteCard";

import wave from "../Images/HomeImg/icons8-so-so-100.png";





function Home() {
  
  return (
    
    
    <div className="flex flex-col bg-base-100 gap-10 " id = "home">


  <div className="flex flex-col items-center min-h-fit bg-base-100 md:px-8  ">
    
      <div className="pt-24">
        <div className="flex flex-row flex-shrink-0">
        <img className = "motion-safe:animate-wave"src = {wave}></img><a target="_blank" rel="noreferrer" href="https://icons8.com"></a>
      <h1 className="text-5xl font-bold">Hi I'm Archie! </h1>
      </div>
      <p className="px-8 md:pr-24 py-6 text-justify">I'm a Computing Science graduate and aspiring UX designer. Have a look at some of my work and learn a bit about me, feel free to get in touch too!</p>
      </div>

      <div className ="flex md:flex-row flex-col justify-center lg:gap-24 lg:pb-52 "  >

      <BBCPoliticsCard />
      <PortfolioSiteCard />
      <div className = "absolute bottom-[9.5rem]" id = "about"></div>
    </div>
    
  </div>


      

    <div className="md:pt-16 ">
      <About />
      </div>

      <div className=" ">
      <Contact />
     
      <Footer />
      </div>
      
    </div>
  );
}

export default Home;
