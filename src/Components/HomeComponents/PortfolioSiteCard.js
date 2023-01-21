import React from "react";
import {Link} from "react-scroll"
import ThisProject from "../../Images/HomeImg/ThisProject.webp";

function PortfolioSiteCard() {
  return ( 

    <div className = "card lg:card-side bg-base-100  shadow-xl h-auto w-auto m-8">
        <figure className = "w-6/12 h-64  "><img src={ThisProject} alt="filler"  ></img></figure>
      <div className="card-body">
      <div className ="card-actions justify-start">
              <div className="badge badge-outline">Development </div>
              <div className= "badge badge-outline">Design</div>
              
            </div>
        <span className="font-bold">Portfolio Project</span>
        <span className="block text-gray-500 text-sm">Developing and designing this site!</span>
      
      
            <div>
            <Link className="btn btn-primary" onClick={() => window.location.href = "/CaseStudies/PortfolioSite"} >Open Case Study</Link>
            </div>
            </div>
      </div>
  )

}

export default PortfolioSiteCard;