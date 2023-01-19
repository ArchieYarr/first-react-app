import React from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-scroll"


function NavBar() {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl ">Archie Yarr</a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 ">
          
            <li>
            <a href = "/" >Home</a>
            </li>
          
         
            <li>
            <Link to = 'about' spy={true} smooth={true} offset={50} duration={500} >About</Link>
            </li>
          
          
          
            <li>
              
              <Link to = 'contact' spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
            </li>
            
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
