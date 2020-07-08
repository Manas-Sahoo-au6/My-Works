import React from "react";
import Div from "./Div";
import P from "./P";
import H2 from "./H2";

export default function Section1() {
  return (
    <Div style={{marginTop:"5rem"}}>
      <Div  className="col-12 container d-flex">
        <Div className="col-2 p-0 m-0">
          <img
            className="person_logo"
            width="100%"
            style={{borderRadius:"50%"}}
            src="https://media-exp1.licdn.com/dms/image/C5603AQF8arJJgHpPjQ/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=dczxN_2g3BCMc505Y0YSLfy-WcuagyoFKYgyQZ8sUSQ"
            alt="img"
          />
        </Div>
        <Div className="col-2 p-0 mt-5"> <form>
          <input style={{color:"purple",height:"auto",width:"6rem", backgroundColor: "#4301a6" }} className="ml-5 p-0" type="file" id="myFile" name="filename" />
          <input className="mt-3 ml-5" type="submit" style={{color:"white",backgroundColor: "#4301a6",width:"auto",height:"auto"}}  />
        </form></Div>

     
        <Div className="col-4 p-4">
          <h2>Manas ranjan </h2>
          <Div>
            <P className="m-0">I am Full stack develoepr</P>
            <P className="m-0">MERN Experience</P>
            <P className="m-0">Attainu Graduate</P>
          </Div>
        </Div>

        <Div className="text-center col-2">
          <H2>TOP 1.</H2>
          <Div>
            <P>Some text inside that section</P>
          </Div>
        </Div>
        <Div className="text-center col-2">
          <H2>TOP 1.</H2>
          <Div>
            <P>Some text inside that section</P>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
