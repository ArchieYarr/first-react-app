import React from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-scroll"


function NavBar() {

  
    
  
  return (
    <nav className=" bg-base-100 sticky top-0 z-50 bg-opacity-0"  >
      <div className = "max-w-51 mx-auto px-4">
      <div className = "flex items-center justify-between h-16">
        <span className="btn btn-ghost normal-case text-xl ">Archie Yarr</span>
      
      
        <div className="flex space-x-4 px-1 ">
          
            
            <a className = "btn btn-ghost normal-case" href = "/" >Home</a>
            
            <Link className = "btn btn-ghost normal-case" to= "about" spy={true} smooth={true} offset={50} duration={500} >About</Link>

              <Link className = "btn btn-ghost normal-case" to = 'contact' spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
            
            
          
        </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
