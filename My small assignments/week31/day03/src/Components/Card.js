import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Card.css";
function Card(props) {
  let { Color, Heading, MaxTransfer, Price, Storage, Users,Color2 } = props.review;
  //
  console.log(Color);
  return (
    <>
      <div id="container" className="container">
        <div id="row" className="row">
          <div className="column">
            <div
              id="center"
              style={{ backgroundColor: Color }}
              className="card"
            >
              <h2 style={{ color: Color2 }}>{Heading}</h2>
              <hr />
              <h1 style={{ color: Color2 }} className="price">{Price}</h1>
              <hr />
              <h3 style={{ color: Color2 }}>{`${Storage} Storage`}</h3>
              <hr/>
               <div style={{ color: Color2 }}>{`${Users}Users Allowed`}</div>
               <hr/>
               <div style={{ color: Color2 }}>{`Send Up to ${MaxTransfer}`}</div>
               <hr/>
               <br/>
               <button style={{ color: Color }} style={{ backgroundColor: Color2 }}  className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
