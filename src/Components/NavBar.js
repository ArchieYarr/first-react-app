import React from "react";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "../Images/Icons8-menu";


function NavBar() {

 
    
  
  return (
    
    <nav className=" bg-base-100 md:bg-base-200 sm:bg-base-200 sticky top-0 z-50 lg:bg-opacity-0 "  >
      {/* Navbar for large screens */}
      <div className = "g:flex max-w-51 mx-auto px-4">
      <div className = "flex items-center justify-between h-16">
        <span className="hidden lg:flex btn btn-ghost normal-case text-xl ">Archie Yarr</span>
      
      
        <div className=" hidden lg:flex  space-x-4 px-1 ">
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#home" spy={true} smooth={true} offset={50} duration={500}>Home</HashLink>
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to= "/#about" spy={true} smooth={true} offset={50} duration={500} >About</HashLink>
              <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = '/#contact' spy={true} smooth={true} offset={50} duration={500} >Contact</HashLink>  
        </div>
        </div>
      </div>
{/* Flexible burger menu button */}
      <div className = "lg:hidden flex items-center">
        <button className = "outline-none mobile-menu-button"> 
          <img src = {BurgerMenu}></img>
        </button>
      </div>
      <div className=" hidden mobile-menu ">
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#home" spy={true} smooth={true} offset={50} duration={500}>Home</HashLink>
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to= "/#about" spy={true} smooth={true} offset={50} duration={500} >About</HashLink>
              <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = '/#contact' spy={true} smooth={true} offset={50} duration={500} >Contact</HashLink>  
        </div>
    </nav>
  );
}

export default NavBar;
