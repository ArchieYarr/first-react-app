
import React from "react";
import linkedin from "../Images/ContactImg/icons8-linkedin.svg";
import git from "../Images/ContactImg/icons8-github.svg";

function Contact() {
return(
  <div className="bg-base-200 text-center py-52 " id = "contact">
  
    
      <h1 className="text-5xl  font-bold">archieyarr@outlook.com</h1>
      <p className="font-semibold py-6">I am always interested to hear from new people so feel free to get in touch! <br/>Drop me an email, message me on LinkedIn or check out more of my stuff on my github :)</p>
      
     <div className ="">
      <a target = "blank" href = "https://www.linkedin.com/in/archieyarr"><img className = "btn btn-ghost" src={linkedin}></img></a> <a target="_blank" href="https://icons8.com"></a>
      
      <a target = "blank" href = "https://github.com/ArchieYarr"><img className = "btn btn-ghost"src={git}></img></a> <a target="_blank" href="https://icons8.com"></a>
      </div>
    </div>
  

)
  
}

export default Contact;

