import React from "react";
import { Link } from "react-router-dom";

import './NavBar.css'   
function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/"  > <span>Kitab-E-Keeda</span> </Link>
        <Link to="/"  >Register</Link>
         
        {localStorage.getItem("token") ? (
          <Link to="/logout"  >Logout</Link>
        ) : (
            <Link to="/login"  >Login</Link>
        )}
      </div>
    </>
  );
}

export default NavBar;
