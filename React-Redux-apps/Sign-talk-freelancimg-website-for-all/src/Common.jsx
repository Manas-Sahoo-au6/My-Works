import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Common.css";
import CategoryPop from "./components/Category/CategoryPop";

import Modal from "react-modal";
import Login from "./components/Login/Login";
import "./components/Category/Category.css";
import Register from "./components/Login/Register";
function Common(props) {
  let [modelIsOpen, setModelIsOpen] = useState(false);
  
  return (
    <>
      <section id="banner">
        <div className="container">
          <div id="row" className="row">
            <div className="col-md-6">
              <div className="para">
                <h1>{props.heading}</h1>
                <p style={{color:"white"}}>Find Interpreter To Bridge Your Communication Needs</p>
              </div>
              <button
                id="btn"
                type="button"
                className="btn "
                onClick={() => {
                  setModelIsOpen(true);
                }}
              >
                Get Started
              </button>
              <Modal
                 className="Modal"
                isOpen={modelIsOpen}
                onRequestClose={() => {
                  setModelIsOpen(false);
                }}
              >
                    <CategoryPop  />


              </Modal>
              {/* <Category /> */}
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
