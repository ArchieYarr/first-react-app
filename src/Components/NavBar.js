import React from "react";
import { NavLink } from 'react-router-dom';



function NavBar() {
  
  return (
   

    <div className="nav-Bar">

      <NavLink to = "/Home">
      <button class="btn"> Home </button>
      </NavLink>

      <NavLink to = "/About">
      <button class="btn"> About </button>
      </NavLink>

      <NavLink to = "/Contact">
      <button class="btn"> Contact </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
