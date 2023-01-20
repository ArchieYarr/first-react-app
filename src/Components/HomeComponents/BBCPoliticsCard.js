import React from "react";
import {Link} from "react-scroll"
import BBCHeader from "../../Images/HomeImg/BBCPolitics.PNG";

function BBCPoliticsCard() {
  return (
    <div className = "card lg:card-side bg-base-100  shadow-xl h-auto w-auto m-8" >
        <figure className = "w-6/12 h-64"><img src={BBCHeader} alt="BBC Politics"  ></img></figure>
      <div className="card-body">
        <span className="font-bold">BBC Politics</span>
        <span className="block text-gray-500 text-sm">Designing a new BBC digital product for 18-24 year olds!</span>
      
      <div className ="card-actions justify-end">
              <div className="badge badge-outline">Research </div>
              <div className= "badge badge-outline">UX</div>
              
            </div>
            <div>
              
            <Link className="btn btn-primary" onClick={() => window.location.href = "/CaseStudies/BBCPolitics"} >Open Case Study</Link>
            
            </div>
            </div>
      </div>
  );
}

export default BBCPoliticsCard;