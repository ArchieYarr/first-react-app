import ReactDOM from "react-dom/client";
import React from "react";
import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";
function About() {
  return (
    <div className=" mt-8 grid-cols-1 grid-flow-col gap-10 px-96 bg-base-200 pb-52  " id = "about">
    
      
      
      <div class=" flex py-5 items-center pr-96 ">
    
    <span class="flex-shrink mx-4 ">About me</span>
    <div class="flex-1 border-t border-accent w-24 "></div>
    
</div>
        <h1 className="text-5xl font-bold">Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <a href = {CV} target ="blank" className="btn btn-primary">Check out my CV</a>
      </div>
    
  
  )
}

export default About;
