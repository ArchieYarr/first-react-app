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
import facebook from "../../Images/BBCImg/competitorImg/icons8-facebook.svg"
import tiktok from "../../Images/BBCImg/competitorImg/icons8-tiktok.svg"
import itv from "../../Images/BBCImg/competitorImg/icons8-itv-hub.svg"
import netflix from "../../Images/BBCImg/competitorImg/icons8-netflix-desktop-app.svg"
import prime from "../../Images/BBCImg/competitorImg/icons8-amazon-prime-video.svg"
import sky from "../../Images/BBCImg/competitorImg/icons8-news.svg"
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
  
    <div id = "BBCPolitics" className="">
  {/* -----------Title Hero----------- */}
    <div className=" hero bg-base-100" >
  
  <div className="flex md:flex-row flex-col min-h-screen max-w-screen hero-content px-2 py-4 md:px-0 md:py-0   motion-safe:animate-fadeIn">
  <img src={BBC} className=" max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
    <div className="text-center md:text-left md:pl-8 md:max-w-md">
      
      <h1 className="mb-5 text-xl md:text-2xl lg:text-3xl font-semibold">Creating an engaging way to interact with politics for 18-24-year-olds. </h1>
      <p className="mb-5 ">As part of my final year of study, I worked with the BBC UX design team to create a new experience for their digital suite.</p>
      
      <Link to = 'summary' spy={true} smooth={true} offset={50} duration={500}><button className="btn btn-primary">Get Started</button></Link>
      
    </div>
  </div>
    </div>
  {/* -----------Title Hero END----------- */}


  {/* -----------Summary Start----------- */}
    
  <div className=" lg:py-16 lg:px-32 md:p-8 drop-shadow-2xl" id= "summary">

    {/* Specification content */}
    <div className = "lg:pr-32 px-2 md:px-0 py-8 md:py-0">
    
      <div className="flex md:flex-row flex-col gap-8 pb-8">
      
      <div className = "pr-10">
      <img src={BBCLogo} className="max-w-xs max-h-xs md:max-w-screen-xs md:min-w-xs rounded-lg md:h-initial motion-safe:animate-fadeInLeft  " />
      </div>
      <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold break-normal">The Specification</h1>
      <p className="pt-8">The BBC is the world's most recognized creative organisation and the state broadcaster in the United Kingdom for over 100 years. 
                      They broadcast and produce a variety of content. From drama, comedy, sports and news they broadcast across TV, digital and web platforms. 
                      The BBC User Experience and Design (UX&D) department shapes the user experience across the BBC's digital product suite. 
                      It is made up of UX designers, architects and researchers who collaborate across the organisation to create excellent digital experiences. 
                      As part of a UX module I studied in my final year of University the team set us a specification to create a new digital product to add to the suite, 
                      aimed at 18-24-year-olds.  </p>
      </div>
      </div>
      <div className="flex flex-col gap-8">
      <h2 className="text-xl md:text-2xl font-bold break-normal">Project Background</h2>
      <p className=" ">Due to a drop in interest amongst younger audiences across their services, 
      the BBC requested a new digital product that will help grow excitement of users between 18-24 years old to build trust as a credible news source and encourage them to explore,
       trust and use the suite of BBC products. The new digital product could be centred around a selection of themes including:</p>
       <ul className="pl-8 py-2 list-disc">
        <li>Politics</li>
        <li>Climate</li>
        <li>Health</li>
        <li>Gaming</li>
      </ul>
      <p>I chose to focus on politics as I found interesting trends in the 18-24-year-old demographic that opened up opportunities for exciting designs. 
        The project was broken down across 4 stages, discover, define, develop and deliver. The full specification has a detailed breakdown of what each stage involved, 
        and the resutlts of each phase are summarised on this page. </p>

        

     
           <a href = {BBCBrief} rel="noreferrer" target ="blank" className="btn btn-primary">Full Specification</a>
      </div>
      
      
    </div>
    {/* Specification content */}
    </div>
    {/* Demographic Content */}
    <div className="p-1 md:p-8 bg-gradient-to-b from-base-100 to-bg-base-200 drop-shadow-2xl">
      <div className="lg:px-32">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold break-normal">The Demographic</h1>
    <p className="text-justify py-8 lg:pr-32">To build a picture of the demographic I conducted primary and secondary research. I started by gaining insights into their technology habits and day-to-day lives according to large research institutes. </p>
        <div className="flex flex-col gap-8">
       
        <div className="grid lg:grid-cols-4 grid-cols-2 md:pr-32 gap-8">

        <div className = " flex flex-col items-center" >
        <img src={Stat1} className=" md:h-56 md:w-56" /> 
        
        <p className="text-center font-semibold ">hold a social media account.<br/></p>
        </div>

        <div className="flex flex-col items-center">
        <img src={Stat2} className="md:h-56 md:w-56 " />
        
        <p className="text-center font-semibold">spend most of their digital time <br/> on a mobile device.</p>
        </div>

        <div className="flex flex-col items-center">
        <img src={Stat2} className="md:h-56 md:w-56" />
        <p className="text-center font-semibold">garnered information on the 2020 <br/> presidential election online.</p>
        </div>

        <div className="flex flex-col items-center">
        <img src={Stat3} className="md:h-56 md:w-56 " />
        <p className="text-center font-semibold">use image led social media over alternatives<br/></p>
        </div>

        </div>
        </div>
        </div>
          <p className="text-justify lg:px-32 pb-8">Based on the research done about the demographic I collated the information into some more usable formats. I created an affinity diagram and empathy map to visualise their priorities, needs and wants.  </p>
        
        <DemographicSlider className = "" />
        
        <div className="lg:px-32">
        <p className="text-justify">After crafting an image of the target demographic I was able to begin to address the problem area and come up with some questions and statements to attempt to solve potential problems the demographic might experience.</p>
        <div className = " py-8 gap-8 lg:pr-32">
        {/* demographic HMW questions and problem statements */}
        <div > 
        <div className="overflow-x-auto ">
          
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
        <td>To watch content while doing other tasks, such as web <br/> browsing or shopping and to be  able to pick up where they left off.</td>
        <td>This demographic multitasks and likes to flit from tasks within and <br/> outwith their phones frequently.</td>
      </tr>
    </tbody>
          </table>
          </div>
          <div className="flex lg:flex-row flex-col">
          <img className = "drop-shadow-2xl rounded-lg object-contain md:h-max lg:w-3/6" src = {hmwQ1}></img>
          <img className = "drop-shadow-2xl rounded-lg object-contain md:h-max lg:w-3/6" src = {hmwQ2}></img>
          </div>
          </div>
        </div>
        </div>
        
        
    </div>

    {/* Demographic Content */}

    {/* Competitor Content */}
    
    
    <div className = "flex justify-center  flex-row  max-w-screen  ">
      
      <img src ={tiktok} className=""></img>
      <img src={facebook} className=" "></img>
      
     
      <img src ={netflix} className=""></img>
      <img src ={prime} className=""></img>
      
      
      <img src ={itv} className="max-h-12 md:max-h-32 max-w-12 md:max-w-32"></img>
      <img src ={sky} className="max-h-12 md:max-h-32 max-w-12 md:max-w-32"></img> 
      
      
      <img src ={snapchat} className=""></img>
      <img src ={spotify} className=""></img>
      
    </div>
    <div className="flex flex-col  gap-8  lg:px-32 lg:pr-32 px-8 pb-8 ">
      
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold break-normal">Competitors</h1>
      <p>Having built an image of the BBC and the demographic it is now important to consider the environment that a new product will exist within. 
        This requires looking at the direct and indirect competition for the attention of the user demographic. </p>
      <div className="flex flex-col md:flex-row gap-8 justify-between "> 
      <div> 
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Direct Competitors</h1>
      <p>A BBC Politics would have an array of competitors in the mobile app landscape. 
        Competing over different formats including audio, text and video. </p>
      </div>
      <div>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Indirect Competitors</h1>
      <p className="">Talk about the indirect competitors here </p>
      </div>
          </div>
        
      
    </div>
    
    {/* Competitor Content */}
    
    {/* Proposed Solution */}
 
    <div className="bg-gradient-to-b from-base-100 to-bg-base-200 drop-shadow-2xl">
  
    
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold break-normal p-2 md:p-8 lg:px-32">Proposed Solution</h1>
    
    <div className = "flex flex-col md:flex-row gap-8 p-2 py-2 md:p-8 md:py-8">
      
   
  <p className="md:pl-32 text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller</p>
 
    <div className="mockup-phone self-center flex-shrink-0 max-w-full md:motion-safe:animate-fadeInRight">
  <div className="camera"></div> 
  <div className="display">
    <OnboardingSlider className="artboard artboard-demo phone-1">Hi.</OnboardingSlider>
  </div>
    </div>
    </div>

    <div className="flex flex-col md:flex-row p-2 py-2 md:p-8 md:py-8">
     
  
    <div className="mockup-phone self-center flex-shrink-0  max-w-full  md:motion-safe:animate-fadeInLeft">
  <div className="camera"></div> 
  <div className="display">
    <AppSlider className="artboard artboard-demo phone-1">Hi.</AppSlider>
  </div>
    </div>
    
    <p className="lg:pr-64  text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    </div>

    <div className="flex flex-col md:flex-row p-2  py-2 md:p-8 md:py-8">
    <p className="lg:pl-32  text-justify">FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest. FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller Text goes here for the BBC brief. I will probably put a button here for the full brief to a pdf of some kind. The bit there should have a brief summary and maybe even just bullet points to be honest.FIller </p>
    <div className="mockup-phone self-center max-w-full flex-shrink-0 md:motion-safe:animate-fadeInRight">
  <div className="camera"></div> 
  <div className="display">
    <LiveSlider className="artboard artboard-demo phone-1">Hi.</LiveSlider>
  </div>
    </div>
    </div>

   


    


    </div>

    
    
    
    
    

  {/* -----------Summary End----------- */}

<Contact />
<Footer />
</div>
)
}

export default BBCPolitics;