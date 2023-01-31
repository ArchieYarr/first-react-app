//React Imports
import React from "react";
import {Link} from "react-scroll"
//Image Imports
import BBC from "../../Images/BBCImg/BBCPoliticsLogo.PNG";
import BBCLogo from "../../Images/BBCImg/icons8-bbc-500.png";
import Stat1 from "../../Images/BBCImg/UntitledDesign1.svg";
import Stat2 from "../../Images/BBCImg/UntitledDesign2.svg"
import Stat3 from "../../Images/BBCImg/UntitledDesign3.svg"
import BBCBrief from "../../Images/BBCImg/BBCBriefPDF.pdf"
import hmwQ1 from "../../Images/BBCImg/hmwQ1.png"
import hmwQ2 from "../../Images/BBCImg/hmwQ2.png"
import appleNews from "../../Images/BBCImg/competitorImg/apple news.png"
import facebook from "../../Images/BBCImg/competitorImg/facebook logo.png"
import tiktok from "../../Images/BBCImg/competitorImg/TikTok logo.png"
import itv from "../../Images/BBCImg/competitorImg/icons8-itv-hub.svg"
import netflix from "../../Images/BBCImg/competitorImg/netlfix.png"
import prime from "../../Images/BBCImg/competitorImg/icons8-amazon-prime-video.svg"
import sky from "../../Images/BBCImg/competitorImg/Sky-News-Logo.png"
import snapchat from "../../Images/BBCImg/competitorImg/icons8-snapchat.svg"
import spotify from "../../Images/BBCImg/competitorImg/icons8-spotify.svg"


// Component Imports
import OnboardingSlider from "./BBCPoliticsComponents/OnboardingSlider";
import AppSlider from "./BBCPoliticsComponents/AppSlider";
import LiveSlider from "./BBCPoliticsComponents/LiveSlider"
import DemographicSlider from "./BBCPoliticsComponents/DemographicSlider";
import Contact from "../Contact"
import Footer from "../Footer"
import FigmaEmbed from 'react-figma-embed';


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
    <div className = "lg:pr-32">
    
      <div className="flex flex-row py-8">
      
      <div className = "pr-10">
      <img src={BBCLogo} className="lg:max-w-screen-sm md:min-w-screen-sm rounded-lg h-initial motion-safe:animate-fadeInLeft  " />
      </div>

      <div className="flex flex-col gap-8">

      <h1 className="text-4xl font-bold break-normal">The Specification</h1>
      <p className="text-justify">The BBC is the world's most recognized creative organisation and the state broadcaster in the United Kingdom for over 100 years. They broadcast and produce a variety of content. From drama, comedy, sports and news they broadcast across TV, digital and web platforms. The BBC User Experience and Design (UX&D) department shapes the user experience across the BBC's digital product suite. It is made up of UX designers, architects and researchers who collaborate across the organisation to create excellent digital experiences. As part of a UX module I studied in my final year of University the team set us a specification to create a new digital product to add to the suite, aimed at 18-24-year-olds.  </p>
      <h2 className="text-2xl font-bold break-normal">Project Background</h2>
      <p>Due to a drop in interest amongst younger audiences across their services, the BBC requested a new digital product that will help grow excitement of users between 18-24 years old to build trust as a credible news source and encourage them to explore, trust and use the suite of BBC products. The new digital product could be centred around a selection of themes including:
       <ul className="pl-8 py-2 list-disc">
        <li>Politics</li>
        <li>Climate</li>
        <li>Health</li>
        <li>Gaming</li>
      </ul>
      <p>I chose to focus on politics as I found interesting trends in the 18-24-year-old demographic that opened up opportunities for exciting designs. The project was broken down across 4 stages, discover, define, develop and deliver. The full specification has a detailed breakdown of what each stage involved, otherwise the important bits are all summarised below :) </p>

        

      </p>
      <a href = {BBCBrief} target ="blank" className="btn btn-primary">Full Specification</a>
      </div>
      </div>
      
    </div>
    {/* Specification content */}
    </div>
    {/* Demographic Content */}
    <div className="py-8 bg-gradient-to-b from-base-100 to-bg-base-200 drop-shadow-2xl">
      <div className="lg:p-32">
    <h1 className="text-4xl font-bold break-normal">The Demographic</h1>
    <p className="text-justify py-8 lg:pr-32">To learn more about the demographic I conducted primary and secondary research. </p>
        <div className="flex flex-col gap-2">
       
        <div className="flex items-start gap-40 py-8 ">

        <div className = "flex flex-col items-center " >
        <img src={Stat1} className="w-52  h-52  " /> 
        
        <p className="text-center font-semibold ">hold a social media account.<br/></p>
        </div>

        <div className="flex flex-col items-center">
        <img src={Stat2} className=" w-52  h-52  " />
        
        <p className="text-center font-semibold">spend most of their digital time <br/> on a mobile device.</p>
        </div>

        <div className="flex flex-col items-center">
        <img src={Stat2} className=" w-52  h-52  " />
        <p className="text-center font-semibold">garnered information on the 2020 <br/> presidential election online.</p>
        </div>

        <div className="flex flex-col items-center">
        <img src={Stat3} className=" w-52  h-52  " />
        <p className="text-center font-semibold">use image led social media over alternatives<br/></p>
        </div>

        </div>
    
        <div className = " py-8 gap-8 lg:pr-32">
          <p className="text-justify pb-8">Based on the research done about the demographic I collated the information into some more usable formats. I created an affinity diagram and empathy map to visualise their priorities, needs and wants.  </p>
        <DemographicSlider />
        <p className="text-justify">After crafting an image of the target demographic I was able to begin to address the problem area and come up with some questions and statements to attempt to solve potential problems the demographic might experience.</p>

        {/* demographic HMW questions and problem statements */}
        <div > 
        <div className="overflow-x-auto lg:overflow-x-hidden">
          
          <table className="table table-auto w-full ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User</th>
        <th>Need</th>
        <th>Insight</th>
      </tr>
    </thead>
    <tbody >
      {/* row 1  */}
      <tr >
        <th>1</th>
        <td>Politically engaged 18-24 year-old</td>
        <td>To find out about headlines without reading text-heavy content.</td>
        <td>The user does not want to get their news through traditional channels <br/>and would prefer the information they consume to be primarily in  video<br/> and audio format.</td>
      </tr>
      {/*  row 2 */}
      <tr>
        <th>2</th>
        <td>Politically engaged 18-24-year-old</td>
        <td>To look at different politics related topics in one place with no <br/>paywalls or adverstising.</td>
        <td>This demographic has lower disposable incomes and consumes large <br/>amounts of ad-saturated content. A cost and ad free environment is an<br/> important point for them.</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Politically disengaged 18-24-year-old</td>
        <td>To reach a level of understanding about a political topic in the<br/> shortest amount of time. </td>
        <td>This user does not want to give large amounts of their time and attention <br/>to politics, they want concise content that summarises an issue.</td>
      </tr>
       {/* row 4 */}
       <tr>
        <th>4</th>
        <td>tech literate 18-24 year old</td>
        <td>To watch content while doing other tasks, such as web browsing or shopping and to be <br/> able to pick up where they left off.</td>
        <td>This demographic multitasks and likes to flit from tasks within and <br/> outwith their phones frequently.</td>
      </tr>
    </tbody>
          </table>
          </div>
          <div className="flex lg:flex-row md:flex-col">
          <img className = "drop-shadow-2xl rounded-lg object-contain h-max lg:w-3/6" src = {hmwQ1}></img>
          <img className = "drop-shadow-2xl rounded-lg object-contain h-max lg:w-3/6" src = {hmwQ2}></img>
          </div>
        
        </div>
        </div>
        </div>
        </div>
    </div>

    {/* Demographic Content */}

    {/* Competitor Content */}
    
    
    <div className = "justify-center flex flex-row pb-8 w-screen h-32">
    <img src ={tiktok} className=""></img>
      <img src ={appleNews} className=""></img>
      <img src={facebook} className=""></img>
      <img src ={netflix} className=""></img>
      <img src ={prime} className=""></img>
      <img src ={itv} className=""></img>
      <img src ={sky} className=""></img> 
      <img src ={snapchat} className=""></img>
      <img src ={spotify} className=""></img>

    </div>
    <div className="lg:px-32 pb-8">
      <div className="flex flex-col gap-8 lg:pr-32"> 
      <h1 className="text-4xl font-bold break-normal">Competitors</h1>
          <p className="text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
          </div>
        
      
    </div>
    
    {/* Competitor Content */}
    
    {/* Proposed Solution */}
 
    <div className="bg-gradient-to-b from-base-100 to-bg-base-200 drop-shadow-2xl">
  
    
    <h1 className="text-4xl font-bold break-normal py-8 px-32">Proposed Solution</h1>
    
    <div className = "flex gap-8  py-8">
      
   
  <p className="pl-32 text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller</p>
 
    <div className="mockup-phone self-center flex-shrink-0">
  <div className="camera"></div> 
  <div className="display">
    <OnboardingSlider className="artboard artboard-demo phone-1">Hi.</OnboardingSlider>
  </div>
    </div>
    </div>

    <div className="flex flex-row py-8 gap-8">
     
    <div className="mockup-phone self-center flex-shrink-0">
  <div className="camera"></div> 
  <div className="display">
    <AppSlider className="artboard artboard-demo phone-1">Hi.</AppSlider>
  </div>
    </div>
    
    <p className="pr-64  text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    </div>

    <div className="flex flex-row py-8 gap-8">
    <p className="pl-32  text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    <LiveSlider className=""/>
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