import ReactDOM from "react-dom/client";
import React from "react";
import CVImg from "../Images/AboutImg/Archie Yarr CV.png";
import CVSvg from "../Images/AboutImg/Archie Yarr CV For website.svg";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";

function About() {
  return (
    <div className=" lg:pl-52 lg:pr-96 h-screen    " id = "about">
    <div className = "grid grid-cols-2  md:grid-cols-2 md:grid-rows-2 grid-rows-2 gap-10">
          
          <div>
            
          <img className=" lg:max-w-screen-sm md:min-w-screen-sm rounded-lg h-initial shadow-2xl " src={CVImg}></img>
         
          </div>
          <div>
          <h1 className="text-5xl font-bold break-normal">Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
          <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <a href = {CV} target ="blank" className="btn btn-primary">Check out my CV</a>
        </div>
      </div>
      
    </div>
    
  
  )
}

export default About;
