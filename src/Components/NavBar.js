import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Archie Yarr</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/Home">
            <li>
              <a>Home</a>
            </li>
          </NavLink>
          <NavLink to="/About">
            <li>
              <a>About</a>
            </li>
          </NavLink>
          <NavLink to="/Contact">
            <li>
              <a>Contact</a>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
