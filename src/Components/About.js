
import React from "react";
import CVImg from "../Images/AboutImg/Archie Yarr CV.png";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";

function About() {
  return (
    <div className="md:px-8 lg:pl-52 lg:pr-96 h-screen pt-8  " id = "about">
    <div className = " flex flex-row gap-10">
          
          <div>
            
          <img className=" lg:max-w-screen-sm md:min-w-screen-sm rounded-lg h-initial shadow-2xl " src={CVImg}></img>
         
          </div>
          <div>
          <h1 className="text-5xl font-bold  break-normal">GCU Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
          <p className="py-8 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <a href = {CV} rel="noreferrer" target ="blank" className="btn btn-primary">Check out my CV</a>
        </div>
      </div>
      
    </div>
    
  
  )
}

export default About;
