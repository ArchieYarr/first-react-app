import ReactDOM from "react-dom/client";
import React from "react";
import homeHeader from "../Images/HomeImg/HomeSampleimg1.webp";
import CV from "../Images/HomeImg/Archie Yarr CV.pdf";
function About() {
  return (
    <div className="hero min-h-screen bg-base-200" id = "about">
    <div className="hero-content flex-col lg:flex-row">
      <img src={homeHeader} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">About Me!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <a href = {CV} target ="blank" className="btn btn-primary">Check out my CV</a>
      </div>
    </div>
  </div>
  )
}

export default About;
