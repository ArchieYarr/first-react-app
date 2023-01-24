import React from "react";
import BBC from "../../Images/BBCImg/BBCPoliticsLogo.PNG";
import {Link} from "react-scroll"

function BBCPolitics() {
  return(
  <div className="hero min-h-screen" >
  
  <div className="hero-content text-start text-neutral-content">
  <img src={BBC} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">BBC Politics</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
)
}

export default BBCPolitics;