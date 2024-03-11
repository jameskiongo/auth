import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        Logo
      </NavLink>
      <ul className="nav-links">
        <>
          <NavLink className="nav-childs" to="/">
            Logout
          </NavLink>
        </>
        <>
          <NavLink className="nav-childs" to="/dashboard">
            Dashboard
          </NavLink>
        </>
      </ul>
    </nav>
  );
}
export default Nav;
