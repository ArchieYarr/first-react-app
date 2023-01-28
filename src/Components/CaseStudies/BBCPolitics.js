import React from "react";
import BBC from "../../Images/BBCImg/BBCPoliticsLogo.PNG";
import BBCLogo from "../../Images/BBCImg/icons8-bbc-500.png";
import Stat1 from "../../Images/BBCImg/UntitledDesign1.svg";
import {Link} from "react-scroll"
import Contact from "../Contact"
import Footer from "../Footer"
import FigmaEmbed from 'react-figma-embed';
import { Figma } from "grommet-icons";
import OnboardingSlider from "./BBCPoliticsComponents/OnboardingSlider";
import AppSlider from "./BBCPoliticsComponents/AppSlider";
import LiveSlider from "./BBCPoliticsComponents/LiveSlider"

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
    
  <div className=" lg:p-32 md:p-8 " id= "summary">

    {/* Specification content */}
    <div className = "pr-32">
    
      <div className="flex flex-row py-8">
      
      <div className = "pr-10">
      <img src={BBCLogo} className="lg:max-w-screen-sm md:min-w-screen-sm rounded-lg h-initial  " />
      </div>

      <div className="flex flex-col gap-8">

      <h1 className="text-4xl font-bold break-normal">The Challenge</h1>
      <h2>The Title is</h2>
      <p className="text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.</p>
      </div>
      </div>
      
    </div>
    {/* Specification content */}

    {/* Demographic Content */}
    <div className="py-8">
    <h1 className="text-4xl font-bold break-normal">The Demographic</h1>
      <p>FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.</p>
        <div className="grid grid-rows-2 gap-2">
        <div className="flex flex-row  place-content-start py-2 gap-40">
        <img src={Stat1} className="w-96   h-96  flex-basis-1/3" />
        <img src={Stat1} className=" w-96  h-96  flex-basis-1/3" />
        <img src={Stat1} className=" w-96  h-96  flex-basis-1/3" />
        </div>
    
        <div className = "flex flex-row justify-end pr-32 py-2 gap-8">
          <p>FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
        <img src={BBC} className=" lg:max-w-screen rounded-lg h-min shadow-2xl alig" />
        </div>
        </div>

    </div>

    {/* Demographic Content */}

    {/* Competitor Content */}
    <div className="py-8">
    
    <div className = "flex flex-row justify-end pr-32 py-2 gap-8">
    <img src={BBC} className=" lg:max-w-screen rounded-lg h-min shadow-2xl " />
      <div className="flex flex-col gap-8"> 
      <h1 className="text-4xl font-bold break-normal">Competitors</h1>
          <p>FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
          </div>
        </div>
      
    </div>
    
    {/* Competitor Content */}
    </div>
    {/* Proposed Solution */}
 
    <div className="bg-gradient-to-b from-base-100 to-bg-base-200 drop-shadow-2xl">
  
    
    <h1 className="text-4xl font-bold break-normal py-8 px-32">Proposed Solution</h1>
    
    <div className = "flex flex-nowrap flex-row py-8 gap-8">
      
    <p className="pl-32 basis-11/12">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    <OnboardingSlider className= "basis-1/12" />
    </div>

    <div className="flex flex-row py-8 gap-8">
    <AppSlider className="basis-1/12"/>
    <p className="pr-32 basis-11/12">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    </div>

    <div className="flex flex-row py-8 gap-8">
    <p className="pl-32 basis-11/12">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    <LiveSlider className="basis-1/12"/>
    </div>

    


    </div>
    <div className="flex flex-row place-content-center  ">
      <FigmaEmbed className = " w-screen h-screen" url = "https://www.figma.com/proto/BgMsPUqHRIAdcq1XldosgI/BBC-Politics?page-id=0%3A1&node-id=2%3A2&viewport=667%2C307%2C0.09&scaling=contain&starting-point-node-id=2%3A2"/>
    </div>
    {/* Proposed Solution */}
    
    
    
    

  {/* -----------Summary End----------- */}

<Contact />
<Footer />
</div>
)
}

export default BBCPolitics;