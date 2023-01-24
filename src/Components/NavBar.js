
import { React, useState } from "react";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "../Images/NavImg/icons8-menu.svg";


function NavBar() {

  const [isNavOpen, setIsNavOpen] = useState(false);
    
  
  return (
    
    <nav className=" lg:bg-base-100  sticky top-0 z-50 lg:bg-opacity-0 "  >
      {/* Navbar for large screens */}
      
      <div className = "DESKTOP-MENU flex items-center justify-between h-16">
        <span className=" lg:flex btn btn-ghost normal-case text-xl ">Archie Yarr</span>
      
      
        <div className="  lg:flex  space-x-4 px-1 ">
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#home" spy={true} smooth={true} offset={50} duration={500}>Home</HashLink>
            {/* <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#Study1" spy={true} smooth={true} offset={50} duration={500}>Work</HashLink> */}
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to= "/#about" spy={true} smooth={true} offset={50} duration={500} >About</HashLink>
              <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = '#contact' spy={true} smooth={true} offset={50} duration={500} >Contact</HashLink>  
        </div>
        </div>
      
{/* Flexible burger menu button to go here*/}
    
        
    </nav>
  );
}

export default NavBar;
