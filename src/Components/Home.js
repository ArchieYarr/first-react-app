import ReactDOM from "react-dom/client";
import React from "react";
import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";
import BBCHeader from "../Images/HomeImg/BBCPolitics.PNG";
import ThisProject from "../Images/HomeImg/ThisProject.webp";
import {Link} from "react-scroll"

function Home() {
  return (
    
    //Grid Containing the Home Page Content
    // div 1 = Heading Image, second nested grid contains the case study cards 
    <div className="grid grid-cols-1  gap-10">

<div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
  <img className=" max-w-sm rounded-lg shadow-2xl" src={homeHeader}/> 
    <div>
      <h1 className="text-5xl font-bold">Hi! I'm Archie thanks for taking a look.</h1>
      <p className="py-6">Welcome to my portfolio page, theres a selection of work that I have done and some information about me and how to get in touch!</p>
      <Link to = 'Study1' spy={true} smooth={true} offset={50} duration={500}><button className="btn btn-primary">Check out my work!</button></Link>
    </div>
  </div>
</div>

      <div className ="mt-8 grid grid-cols-1 px-80 gap-10" id ="Study1">

      <div className = "card lg:card-side bg-base-100  shadow-xl h-auto" >
        <figure className = "w-6/12"><img src={BBCHeader} alt="BBC Politics"  ></img></figure>
      <div className="card-body">
        <span className="font-bold">BBC Politics</span>
        <span className="block text-gray-500 text-sm">Designing a new BBC digital product for 18-24 year olds!</span>
      
      <div className ="card-actions justify-end">
              <div className="badge badge-outline">Research </div>
              <div className= "badge badge-outline">UX</div>
              
            </div>
            <div>
            <button className="btn btn-primary">Open Case Study</button>
            </div>
            </div>
      </div>

      <div className = "card lg:card-side bg-base-100  shadow-xl h-auto">
        <figure className = "w-6/12"><img src={ThisProject} alt="filler"  ></img></figure>
      <div className="card-body">
        <span className="font-bold">Portfolio Project</span>
        <span className="block text-gray-500 text-sm">Developing and designing this site!</span>
      
      <div className ="card-actions justify-end">
              <div className="badge badge-outline">Development </div>
              <div className= "badge badge-outline">Design</div>
              
            </div>
            <div>
            <button className="btn btn-primary">Open Case Study</button>
            </div>
            </div>
      </div>

    </div>


    
    </div>
  );
}

export default Home;
