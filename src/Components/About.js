import { HashLink } from "react-router-hash-link";
import React from "react";
import CVImg from "../Images/AboutImg/Archie Yarr CV.png";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";

function About() {
  return (
    <div className="relative  md:px-8 lg:pl-52 lg:pr-96 h-screen pt-8 md:pt-4 " >
    <HashLink className = "" to= "/#about" spy={true} smooth={true} offset={50} duration={500}><img className=" lg:hover:scale-110 md:hover:scale-105 absolute  top-0 lg:left-32  lg:-mt-52 md:-mt-24 lg:max-w-screen-sm lg:max-h-screen-sm md:max-w-md md:max-h-md rounded-lg h-initial shadow-2xl " src={CVImg}></img></HashLink>
    
          
    <div className="lg:ml-[42rem] md:ml-[30rem]  flex flex-col place-items-start">
    
            <h1 className="text-5xl font-bold  break-normal">GCU Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
             <p className="py-8 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <a href = {CV} rel="noreferrer" target ="blank" className="btn btn-primary">Check out my CV</a>
          </div>
      
      
    </div>
    
  
  )
}

export default About;
