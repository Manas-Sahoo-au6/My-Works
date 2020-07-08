import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Common.css";
import Food from './components/Food'
import {Redirect,Route,Switch,NavLink} from 'react-router-dom'



function Common(props) {


  return (
    <>
      <section id="banner">
        <div className="container">
          <div id="row" className="row">
            <div className="col-md-6">
              <div className="para">
                <h1>{props.heading}</h1>
                <p>Taste Your Choice With Jchef</p>
              </div>
              <button
                id="btn"
                type="button"
                className="btn "
               
              >
                <NavLink to="/receipe">Get Started</NavLink>
              </button>
                
            </div>
            <div id="loghome" className="col-md-6 text-center">
              <img src={props.image} alt="logo" />
            </div>
          </div>
        </div>
        <img
          src="https://i0.wp.com/crftshodigital.com/wp-content/uploads/revslider/info-graphic/bottom-wave.png?fit=1920%2C673&ssl=1"
          className="bottom-img"
          alt="img"
        />
      </section>
    </>
  );
}

export default Common;
