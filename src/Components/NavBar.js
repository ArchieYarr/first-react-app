
import { React, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "../Images/NavImg/burger menu.svg";



function NavBar() {

let [open, setOpen] = useState(false)
  
  return (
    
    <nav className={'bg-base-200 md:bg-base-100  sticky top-0 z-50 md:bg-opacity-0'} >
      {/* Navbar for large screens */}
      
      <div className = " md:flex md:items-center justify-between h-16 left-0  " >
        <div>
        <HashLink className=" lg:flex btn btn-ghost normal-case text-xl " to = "/#home" spy={true.toString()} smooth={true} offset={50} duration={500}>Archie Yarr</HashLink>
        </div>

        <div onClick = {()=>setOpen(!open)} className=" text-3xl absolute right-8 cursor-pointer md:hidden">
        <ion-icon name="{open ? 'close':'menu'}"></ion-icon>
         
        </div>

        <ul className={"bg-base-200 md:bg-base-100 md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in"}>
           <li> 
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#home" spy={true.toString()} smooth={true} offset={50} duration={500}>Home</HashLink>
           </li>
           <li>
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to= "/#about" spy={true.toString()} smooth={true} offset={50} duration={500} >About</HashLink>
            </li>
            <li>
              <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = '#contact' spy={true.toString()} smooth={true} offset={50} duration={500} >Contact</HashLink>  
              </li>
        </ul>

        </div>
      
{/* Flexible burger menu button to go here*/}
    

    </nav>
  );
}

export default NavBar;
