
import { React, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "../Images/NavImg/icons8-menu.svg";
import {AiFillDelete, AiOutlineMenuUnfold} from "react-icons/ai"


function NavBar() {

  const [open, setOpen] = useState(false)
  
  return (
    
    <nav className={' lg:bg-base-100  sticky top-0 z-50 lg:bg-opacity-0'} >
      {/* Navbar for large screens */}
      
      <div className = " flex items-center justify-between h-16">
        <HashLink className=" lg:flex btn btn-ghost normal-case text-xl " to = "/#home" spy={true.toString()} smooth={true} offset={50} duration={500}>Archie Yarr</HashLink>
      
        <div onClick = {()=> setOpen(!open)} className="tesxt-3xl absolute right-8 top-5 cursor-pointer lg:hidden">

{

  open ? <AiFillDelete />: <AiOutlineMenuUnfold/>

}

</div>
        <div className={"  lg:flex  space-x-4 px-1 ${open ? 'top-18 opacity-100' : 'top-[-490] lg:opacity-100 opacity-0' } "}>
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#home" spy={true.toString()} smooth={true} offset={50} duration={500}>Home</HashLink>
            
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to= "/#about" spy={true.toString()} smooth={true} offset={50} duration={500} >About</HashLink>
            
              <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = '#contact' spy={true.toString()} smooth={true} offset={50} duration={500} >Contact</HashLink>  
        </div>
        </div>
      
{/* Flexible burger menu button to go here*/}
    

    </nav>
  );
}

export default NavBar;
