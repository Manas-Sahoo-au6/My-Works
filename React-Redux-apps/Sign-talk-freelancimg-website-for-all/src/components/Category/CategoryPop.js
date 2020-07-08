import React, { useState } from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
import Register from "../Login/Register";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import "../Login/Register.css";
import RegisterUser from "../Login/RegisterUser";
// import './Model.css'

function CategoryPop() {
  let [modelIsOpen, setModelIsOpen] = useState(false);
  let [UsermodelIsOpen, setUserModelIsOpen] = useState(false);
  return (
    <>
      <div className="fillUp">
        <div id="interpreter" className="interpreter">
          <div>
            <AccountCircleIcon />
          </div>
          <hr style={{ border: "bold" }} />
          <div>
            <h2 style={{
                  marginLeft:"5rem"
                }}>I am a User</h2>
            <button
              onClick={() => {
                setUserModelIsOpen(true);
              }}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#4301a6",
                height: "50px",
                width: "100px",
                marginLeft: "100px",
                marginTop: "6rem",
              }}
            >
              <div
                className="Work"
                style={{
                  marginLeft: "-6.5rem",
                  height: "50px",
                  marginTop: "-3.5rem",
                }}
              >
                <WorkIcon />
                <label
                  htmlFor="svg"
                  style={{
                    marginLeft: "7rem",
                    fontWeight: "900",
                    color: "#4301a6",
                  }}
                >
                  WORK
                </label>
              </div>
            </button>
          </div>
        </div>
        <div id="user" className="user">
          <div style={{ marginTop: "2rem", marginLeft: "40%" }}>
            <AccountCircleIcon  style={{
                  color: "white",
                }}/>
          </div>
          <hr style={{ border: "bold" }} />
          <div>
            <div>
              <h2
                style={{
                  color: "white",
                  marginLeft:"5rem"
                }}
              >
                I am an InterPreter
              </h2>
              <button
                onClick={() => {
                  setModelIsOpen(true);
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  height: "50px",
                  width: "100px",
                  marginLeft: "100px",
                  marginTop: "6rem",
                }}
              >
                <div
                  className="Find"
                  style={{
                    marginLeft: "5.8rem",
                    height: "50px",
                    marginTop: "0",
                    color: "white",
                  }}
                >
                  <WorkIcon  style={{
                  color: "white",
                }}/>
                  <label
                    htmlFor=""
                    style={{
                      marginLeft: "1.5rem",
                      fontWeight: "900",
                      fontSize: "24px",
                      color: "white",
                    }}
                  >
                    Find
                  </label>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="some "
        isOpen={modelIsOpen}
        onRequestClose={() => {
          setModelIsOpen(false);
        }}
      >
        <Register />
      </Modal>

      <Modal
        className="some "
        isOpen={UsermodelIsOpen}
        onRequestClose={() => {
          setUserModelIsOpen(false);
        }}
      >
        <RegisterUser />
      </Modal>
    </>
  );
}

export default CategoryPop;
