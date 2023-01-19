import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Archie Yarr</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          
            <li>
              <a href = '/'>Home</a>
            </li>
          
         
            <li>
              <a href = '/'>About</a>
            </li>
          
          
          
            <li>
              
              <a href = '#contact'>Contact</a>
            </li>
            
          
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
