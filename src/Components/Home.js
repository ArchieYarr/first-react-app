import ReactDOM from "react-dom/client";
import React from "react";
import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";

function Home() {
  return (
    <div className="grid grid-cols-1 bg-neutral gap-10">
      <div className = "card">
        <img class=" " src={homeHeader}></img>
      </div>

      <div className ="grid grid-cols-2 bg-neutral gap-10" >

      <div className = "card">
        <img class="w-full h-32 sm:h-48 object-cover" src={homeHeader}></img>
      </div>
      <div class="m-4">
        <span class="block text-gray-500 text-sm">BBC Case Study</span>
      </div>

      <div className = "card">
        <img class="w-full h-32 sm:h-48 object-cover" src={homeHeader}></img>
      </div>
      <div class="m-4">
        <span class="block text-gray-500 text-sm">Portfolio Website</span>
      </div>

    </div>
    </div>
  );
}

export default Home;
