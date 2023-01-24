import React from "react";
import BBC from "../../Images/BBCImg/BBCPoliticsLogo.PNG";
import {Link} from "react-scroll"
import Contact from "../Contact"

function BBCPolitics() {
  return(
  
    <div>
{/* -----------Title Hero----------- */}
  <div className="hero min-h-screen bg-base-100" >
  
  <div className="hero-content  text-start text-neutral-content motion-safe:animate-fadeIn">
  <img src={BBC} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">BBC Politics</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className ="flex p-2">
      <button className="btn btn-primary ">Get started</button>
      <p className = "p-2 px-8 font-bold text-2x1 text-center">OR </p>
      <Link to = 'summary' spy={true} smooth={true} offset={50} duration={500}><button className="btn btn-primary">Summary</button></Link>
      </div>
    </div>
  </div>
</div>
{/* -----------Title Hero END----------- */}


{/* -----------Summary Start----------- */}

<div className="grid grid-cols-1" id = "summary">


</div>

{/* -----------Summary End----------- */}

<Contact />
</div>
)
}

export default BBCPolitics;