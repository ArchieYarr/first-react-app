import { HashLink } from "react-router-hash-link";
import React from "react";
import CVImg from "../Images/AboutImg/Archie Yarr CV v2.png";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";

function About() {
  return (
    <div className="flex flex-col md:flex-row min-w-screen  lg:px-32  md:px-8   py-12   md:pt-4     bg-base-200 shadow-xl" >
      <div className="bg-base-200 h-screen-md  md:max-h-screen   ">
    <HashLink className = "" to= "/#about" spy={true.toString()} smooth={true} offset={50} duration={500}><img className="hidden md:block lg:hover:scale-110 md:hover:scale-105     px-1 md:px-0 top-0  lg:-mt-52 md:-mt-24 -mt-12    lg:max-w-screen-sm lg:max-h-screen-sm  max-h-sm max-w-sm  rounded-lg h-initial  " src={CVImg}></img></HashLink>
    </div>
          
    <div className=" flex flex-col  place-items-start px-8 ">
    
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  ">GCU Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
            <div className="py-8">
              <p className="py-2">
              I'm a curious designer and technology geek who's committed to advocating for the user wherever I'm working. 
              I believe that effective user-centric design can have a real impact on people's lives no matter how big or small.
              </p>

              <p className="py-2 ">
              As a designer, I love tackling knotty challenges. From prototyping and wireframing to JavaScript and CSS, contributing to a team and learning from others is 
              my favourite part of the process. I've experienced the design process academically and vocationally and nothing else has got me as excited as seeing a component, 
              interaction or process being shaped by the people working on it. As a person, I love to delve into my hobbies and I take them (nearly) as seriously as I enjoy doing them.
              I love cooking, training, technology and climbing Munros. And when I have the chance reading and sketching are my go-to ways to relax. 
              </p>

              <p className="py-2">
                
              I can't wait to work in a field that needs collaboration, creative skills and a passion for technology and problem-solving. 
              </p>
            </div>
            <a href = {CV} rel="noreferrer" target ="blank" className="btn btn-primary">Check out my CV</a>
          </div>
      
      
    </div>
    
  
  )
}

export default About;
