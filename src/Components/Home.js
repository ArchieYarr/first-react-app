import ReactDOM from "react-dom/client";
import React from "react";
import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";

function Home() {
  return (
    <div className="grid grid-cols-1  gap-10">
      <div className = "card">
        <img className=" " src={homeHeader}></img>
      </div>

      <div className ="mt-8 grid grid-cols-1 px-60" >

      <div className = "card lg:card-side bg-base-100 shadow-xl">
        <img src={homeHeader} alt="filler" class="w-full h-32 sm:h-48 object-cover " ></img>
      <div className="card-body">
        <span className="font-bold">BBC Politics</span>
        <span className="block text-gray-500 text-sm">BBC Case Study</span>
      
      <div className ="card-actions justify-end">
              <div className="badge badge-outline">Research </div>
              <div className= "badge badge-outline">and other things</div>
            </div>

            </div>
      </div>

      <div className = "card lg:card-side bg-base-100 shadow-xl">
        <img src={homeHeader} alt="filler" class="w-full h-32 sm:h-48 object-cover " ></img>
      <div className="card-body">
        <span className="font-bold">Portfolio Project</span>
        <span className="block text-gray-500 text-sm">Developing and designing this site!</span>
      
      <div className ="card-actions justify-end">
              <div className="badge badge-outline">Development </div>
              <div className= "badge badge-outline">Design</div>
            </div>

            </div>
      </div>

    </div>
    </div>
  );
}

export default Home;
