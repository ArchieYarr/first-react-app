import React from "react";
import {Link} from "react-scroll"
import ThisProject from "../../Images/HomeImg/ThisProject.webp";

function PortfolioSiteCard() {
  return ( 

    <div className = "card lg:card-side bg-base-100  shadow-xl h-auto w-auto m-8">
        <figure className = "w-6/12 h-96  "><img src={ThisProject} alt="filler"  ></img></figure>
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
  )

}

export default PortfolioSiteCard;