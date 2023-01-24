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

    <div className=" p-32 " id= "summary">

    {/* Specification content */}
    <div className = "pr-32">
    <h1 className="text-4xl font-bold break-normal">Client's Specification</h1>
      <div className="flex flex-row py-2">
      
      <div className = "pr-10">
      <img src={BBC} className="lg:max-w-screen-sm md:min-w-screen-sm rounded-lg h-initial shadow-2xl " />
      </div>
      <p>FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.</p>
      </div>
      
    </div>
    {/* Specification content */}

    {/* Demographic Content */}
    <div className="py-8">
    <h1 className="text-4xl font-bold break-normal">The Demographic</h1>

        <div className="grid grid-rows-2 gap-2">
        <div className="flex flex-row pr-32 py-2 gap-2">
        <img src={BBC} className="w-screen  rounded-lg h-min shadow-2xl " />
        <img src={BBC} className=" w-screen rounded-lg h-min shadow-2xl " />
        <img src={BBC} className=" w-screen rounded-lg h-min shadow-2xl " />
        </div>
    
        <div className = "flex flex-row justify-end pr-32 py-2 gap-2">
          <p>FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
        <img src={BBC} className=" lg:max-w-screen rounded-lg h-min shadow-2xl alig" />
        </div>
        </div>

    </div>

    {/* Demographic Content */}

    {/* Competitor Content */}
    <div>

      
    </div>
    
    {/* Competitor Content */}
    
    
    
    </div>

  {/* -----------Summary End----------- */}

<Contact />
</div>
)
}

export default BBCPolitics;