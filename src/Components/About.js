import { HashLink } from "react-router-hash-link";
import React from "react";
import CVImg from "../Images/AboutImg/Archie Yarr CV.png";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";

function About() {
  return (
    <div className="flex flex-col md:flex-row min-w-screen    md:px-8   py-8   md:pt-4     bg-base-200 shadow-xl" >
      <div className="bg-base-200 h-screen-md  md:max-h-screen   ">
    <HashLink className = "" to= "/#about" spy={true.toString()} smooth={true} offset={50} duration={500}><img className="hidden md:block lg:hover:scale-110 md:hover:scale-105     px-1 md:px-0 top-0  lg:-mt-52 md:-mt-24 -mt-12    lg:max-w-screen-sm lg:max-h-screen-sm  max-h-sm max-w-sm  rounded-lg h-initial  " src={CVImg}></img></HashLink>
    </div>
          
    <div className=" flex flex-col  place-items-start px-8 ">
    
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  ">GCU Computing graduate from St Andrews, Scotland. Currently based in Glasgow.</h1>
            <div className="text-justify">
              <p className="pt-8 pb-2">I'm a curios designer and technology geek who's committed to advocating for the user wherever I'm working. I believe that effective user centric design can have real impact on peoples lives no matter how big or small. </p>
              <p className="py-2 ">
              As a designer, I love tackling knotty challenges. From prototyping and wireframing to JavaScript and CSS, contributing to a team and learning from others is my favourite part of the process.  I've experienced the design 
              process academically and vocationally and nothing else has got me as excited as seeing a component, interaction or process being shaped by the people working on it.
              As a person, I enjoy cooking, training, technology and walking with friends. And when I have the chance reading and sketching are my go-to ways to relax. </p>
              <p className="py-2">
                A goal of mine is to combine what I do for fun with my career opportunities. So joining a field that works creatively, collaboratively and with technology 
                aligns with my goals and is an area that I can't wait to contribute to.
                </p>
            </div>
            <a href = {CV} rel="noreferrer" target ="blank" className="btn btn-primary">Check out my CV</a>
          </div>
      
      
    </div>
    
  
  )
}

export default About;
