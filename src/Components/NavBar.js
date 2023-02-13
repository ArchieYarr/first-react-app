
import { React, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "../Images/NavImg/icons8-menu.svg";


function NavBar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  
  const handleScroll = () => {
      const currentScrollPos = window.scrollY
  
      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }
  
      setPrevScrollPos(currentScrollPos)
  }
  
  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
  })
    
  console.log(visible)
  return (
    
    <nav className={' lg:bg-base-100  sticky top-0 z-50 lg:bg-opacity-0'} >
      {/* Navbar for large screens */}
      
      <div className = " flex items-center justify-between h-16">
        <HashLink className=" lg:flex btn btn-ghost normal-case text-xl " to = "/#home" spy={true.toString()} smooth={true} offset={50} duration={500}>Archie Yarr</HashLink>
      
      
        <div className="  lg:flex  space-x-4 px-1 ">
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = "/#home" spy={true.toString()} smooth={true} offset={50} duration={500}>Home</HashLink>
            
            <HashLink className = "btn btn-ghost active:bg-primary normal-case" to= "/#about" spy={true.toString()} smooth={true} offset={50} duration={500} >About</HashLink>
            
              <HashLink className = "btn btn-ghost active:bg-primary normal-case" to = '#contact' spy={true.toString()} smooth={true} offset={50} duration={500} >Contact</HashLink>  
        </div>
        </div>
      
{/* Flexible burger menu button to go here*/}
    
{/* lg:bg-base-100  sticky top-0 z-50 lg:bg-opacity-0 */}
    </nav>
  );
}

export default NavBar;
