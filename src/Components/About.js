import { HashLink } from "react-router-hash-link";
import React from "react";
import CVImg from "../Images/AboutImg/Archie Yarr CV.png";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";

function About() {
  return (
    <div className="flex flex-col md:flex-row min-w-screen    md:px-8   py-8   md:pt-4     bg-base-200 shadow-xl" >
      <div className="bg-base-200 h-screen-md  md:max-h-screen   ">
    <HashLink className = "" to= "/#about" spy={true.toString()} smooth={true} offset={50} duration={500}><img className=" lg:hover:scale-110 md:hover:scale-105     px-1 md:px-0 top-0  lg:-mt-52 md:-mt-24 -mt-12    lg:max-w-screen-sm lg:max-h-screen-sm  max-h-sm max-w-sm  rounded-lg h-initial  " src={CVImg}></img></HashLink>
    </div>
          
    <div className=" flex flex-col  place-items-start px-8 ">
    
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  ">GCU Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
             <p className="py-8 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <a href = {CV} rel="noreferrer" target ="blank" className="btn btn-primary">Check out my CV</a>
          </div>
      
      
    </div>
    
  
  )
}

export default About;
