
import React from "react";
import linkedin from "../Images/ContactImg/icons8-linkedin.svg";
import git from "../Images/ContactImg/icons8-github.svg";

function Contact() {
return(
  <div className="bg-base-100 text-center " id = "contact">
  
    
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold px-2">archieyarr@outlook.com</h1>
      <p className="font-semibold py-6 px-2">I am always interested to hear from new people so feel free to get in touch! <br/>Drop me an email, message me on LinkedIn or check out more of my stuff on my github :)</p>
      
     <div className ="">
      <a rel="noreferrer" target = "blank" href = "https://www.linkedin.com/in/archieyarr"><img className = "btn btn-ghost" src={linkedin}></img></a> <a target="_blank" rel="noreferrer" href="https://icons8.com"></a>
      
      <a rel="noreferrer" target = "blank" href = "https://github.com/ArchieYarr"><img className = "btn btn-ghost"src={git}></img></a> <a target="_blank" rel="noreferrer" href="https://icons8.com"></a>
      </div>
    </div>
  

)
  
}

export default Contact;

