import React from "react";

import "./Spinner.css";

function Spinner() {
  return (
    <div>
      
    <div class="div1" id="one"></div>
    <div class="div1" id="two"></div>
    <div class="div2" id="three"></div>
    <div class="div2" id="four"></div>
  
      <div className="lableText" style={{marginLeft:"40%",marginTop:"10rem",color:"red"}}> <h2>Receipe Loading...</h2></div>
    </div>
  );
}

export default Spinner;
