import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div id="container" className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
          <nav
            className="navbar navbar-expand-lg navbar-light bglight"
            id="nav-bar"
          >
            <div className="container-fluid">
              <img
                src="https://signtalk.in/learnisl/learn/logo.png"
                className="navbar-brand"
                alt="jChef"
              />
              <NavLink className="navbar-brand" to="/">
                JCHEF
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  id="navbar-toggler-icon"
                  className="navbar-toggler-icon"
                ></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      id="nav-link"
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      id="nav-link"
                      className="nav-link active"
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      id="nav-link"
                      className="nav-link active"
                      aria-current="page"
                      to="/services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      id="nav-link"
                      className="nav-link active"
                      aria-current="page"
                      to="/contactus"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      id="nav-link"
                      className="nav-link active"
                      aria-current="page"
                      to="/receipe"
                    >
                      Get Receipe
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
