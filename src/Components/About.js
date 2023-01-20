import ReactDOM from "react-dom/client";
import React from "react";
import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";
function About() {
  return (
    <div className = "card lg:card-side bg-base-200  my-28" id ="about">
        <figure><img src={homeHeader} alt="filler"  ></img></figure>
      <div className="card-body">
        <span className="font-bold">About ME!</span>
        <span className="block text-gray-500 text-sm">Design!</span>
      
      <div className ="card-actions justify-end">
              <div className="badge badge-outline">About </div>
              <div className= "badge badge-outline">Me!</div>
              
            </div>
            <div>
            <button className="btn btn-primary">Check out my CV!</button>
            </div>
            </div>
      </div>
  )
}

export default About;
