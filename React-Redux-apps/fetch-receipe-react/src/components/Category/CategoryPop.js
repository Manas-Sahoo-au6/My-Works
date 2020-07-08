import React from "react";
import "./Category.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WorkIcon from "@material-ui/icons/Work";
function CategoryPop() {
  return (
    <>
      <div className="fillUp">
        <div id="interpreter" className="interpreter">
          <div>
            <AccountCircleIcon />
          </div>
          <hr style={{ border: "bold" }} />
          <div>
            <h2>I am an InterPreter</h2>
            <button
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
                style={{
                  marginLeft: "-6.5rem",
                  height: "50px",
                  marginTop: "-3.5rem",
                }}
              >
                <WorkIcon />
                <label
                  htmlFor="svg"
                  style={{ marginLeft: "7rem", fontWeight: "900" }}
                >
                  WORK
                </label>
              </div>
            </button>
          </div>
        </div>
        <div id="user" className="user">
          <div style={{ marginTop: "2rem", marginLeft: "40%" }}>
            <AccountCircleIcon />
          </div>
          <hr style={{ border: "bold" }} />
          <div>
            <div>
              <h2>I want to find an InterPreter</h2>
              <button
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
                  style={{
                    marginLeft: "5.8rem",
                    height: "50px",
                    marginTop: "0",
                  }}
                >
                  <WorkIcon />
                  <label
                    htmlFor=""
                    style={{
                      marginLeft: "1.5rem",
                      fontWeight: "900",
                      fontSize: "24px",
                    }}
                  >
                    FIND
                  </label>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPop;
