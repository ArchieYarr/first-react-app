//React Imports
import React from "react";
import {Link} from "react-scroll"
//Image Imports
import BBC from "../../Images/BBCImg/BBCPoliticsLogo.PNG";
import BBCLogo from "../../Images/BBCImg/icons8-bbc-500.png";
import Stat1 from "../../Images/BBCImg/UntitledDesign1.svg";
import BBCBrief from "../../Images/BBCImg/BBCBriefPDF.pdf"

// Component Imports
import OnboardingSlider from "./BBCPoliticsComponents/OnboardingSlider";
import AppSlider from "./BBCPoliticsComponents/AppSlider";
import LiveSlider from "./BBCPoliticsComponents/LiveSlider"
import Contact from "../Contact"
import Footer from "../Footer"
import FigmaEmbed from 'react-figma-embed';
import { Figma } from "grommet-icons";

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
    
  <div className=" lg:p-32 md:p-8 drop-shadow-2xl" id= "summary">

    {/* Specification content */}
    <div className = "pr-32">
    
      <div className="flex flex-row py-8">
      
      <div className = "pr-10">
      <img src={BBCLogo} className="lg:max-w-screen-sm md:min-w-screen-sm rounded-lg h-initial  " />
      </div>

      <div className="flex flex-col gap-8">

      <h1 className="text-4xl font-bold break-normal">The Specification</h1>
      <p className="text-justify">The BBC is the world's most recognized creative organisation and the state broadcaster in the United Kingdom for over 100 years. They broadcast and produce a variety of content. From drama, comedy, sports and news they broadcast across TV, digital and web platforms. The BBC User Experience and Design (UX&D) department shapes the user experience across the BBC's digital product suite. It is made up of UX designers, architects and researchers who collaborate across the organisation to create excellent digital experiences. As part of a UX module I studied the team set us a specification to create a new digital product to add to the suite, aimed at 18-24-year-olds.  </p>
      <h2 className="text-2xl font-bold break-normal">Project Background</h2>
      <p>Due to a drop in interest amongst younger audiences across their services, the BBC requested a new digital product that will help grow excitement of users between 18-24 years old to build trust as a credible news source and encourage them to explore, trust and use the suite of BBC products. The new digital product could be centred around a selection of themes including:
       <ul className="pl-8 py-2 list-disc">
        <li>Politics</li>
        <li>Climate</li>
        <li>Health</li>
        <li>Gaming</li>
      </ul>
      <p>I chose to focus on politics as I found interesting trends in the 18-24-year-old demographic that opened up opportunities for exciting designs. The project was broken down across 4 stages, discover, define, develop and deliver. </p>

        

      </p>
      <a href = {BBCBrief} target ="blank" className="btn btn-primary">Full Specification</a>
      </div>
      </div>
      
    </div>
    {/* Specification content */}

    {/* Demographic Content */}
    <div className="py-8">
    <h1 className="text-4xl font-bold break-normal">The Demographic</h1>
      <p className="text-justify py-8">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.</p>
        <div className="grid grid-rows-2 gap-2">
        <div className="flex flex-row  place-content-start py-8 gap-52">
        <img src={Stat1} className="w-52   h-52  flex-basis-1/3" />
        <img src={Stat1} className=" w-52  h-52  flex-basis-1/3" />
        <img src={Stat1} className=" w-52  h-52  flex-basis-1/3" />
        </div>
    
        <div className = "flex flex-row justify-end pr-32 py-2 gap-8">
          <p className="text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
        <img src={BBC} className=" lg:max-w-screen rounded-lg h-min shadow-2xl alig" />
        </div>
        </div>

    </div>

    {/* Demographic Content */}

    {/* Competitor Content */}
    <div className="py-8">
    
    <div className = "flex flex-row justify-end pr-32 py-8 gap-8">
    <img src={BBC} className=" lg:max-w-screen rounded-lg h-min shadow-2xl " />
      <div className="flex flex-col gap-8"> 
      <h1 className="text-4xl font-bold break-normal">Competitors</h1>
          <p className="text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
          </div>
        </div>
      
    </div>
    
    {/* Competitor Content */}
    </div>
    {/* Proposed Solution */}
 
    <div className="bg-gradient-to-b from-base-100 to-bg-base-200 drop-shadow-2xl">
  
    
    <h1 className="text-4xl font-bold break-normal py-8 px-32">Proposed Solution</h1>
    
    <div className = "flex flex-nowrap flex-row py-8 gap-8">
      
    <p className="pl-32 basis-11/12 text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    <OnboardingSlider className= "basis-1/12" />
    </div>

    <div className="flex flex-row py-8 gap-8">
    <AppSlider className="basis-1/12"/>
    <p className="pr-32 basis-11/12 text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    </div>

    <div className="flex flex-row py-8 gap-8">
    <p className="pl-32 basis-11/12 text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    <LiveSlider className="basis-1/12"/>
    </div>

    


    </div>

    {/* FIGMA Embedded feature */}
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