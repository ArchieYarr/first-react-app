import React from "react";
import {Link} from "react-scroll"
import BBCHeader from "../../Images/HomeImg/BBCPolitics.PNG";

function BBCPoliticsCard() {
  return (
    <div className = "card lg:card-side bg-base-100  shadow-xl h-auto w-auto m-8" >
        <figure className = " h-64 max-w-screen-sm md:h-[18.5rem]"><img src={BBCHeader} alt="BBC Politics"  ></img></figure>
      <div className="card-body">
      <div className ="card-actions justify-start">
              <div className="badge badge-outline">Research </div>
              <div className= "badge badge-outline">UX</div>
              
            </div>
        <span className="font-bold">BBC Politics</span>
        <span className="block text-gray-500 text-sm">Designing a digital product.</span>
      
      
            <div>
              
            <Link className="btn btn-primary" onClick={() => window.location.href = "/CaseStudies/BBCPolitics"} >Open Case Study</Link>
            
            </div>
            </div>
      </div>
  );
}

export default BBCPoliticsCard;
