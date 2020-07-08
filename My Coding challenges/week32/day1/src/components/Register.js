import React, { useState } from "react";
import Axios from "axios";
function Register() {
  let [register, setRegister] = useState({
    name: " ",
    email: " ",
    password: " ",
  });
  let [mssg, setMssg] = useState();
  let registerFunc = (event) => {
    let { value, name } = event.target;

    setRegister((prev) => {
      if (name === "email") {
        return {
          name: prev.name,
          email: value,
          password: prev.password,
        };
      } else if (name === "password") {
        return {
          name: prev.name,
          email: prev.email,
          password: value,
        };
      } else if (name === "name") {
        return {
          name: value,
          email: prev.email,
          password: prev.password,
        };
      }
    });
  };
  let submitFunc = () => {
    let data = Axios({
      method: "post",
      url: "http://localhost:8080/api/user/register",
      data: {
        name: register.name,
        email: register.email,
        password: register.password,
      },
    });

    data
      .then((res) => {
        console.log(res);
        if (res) {
          setTimeout(() => {
            setMssg("Register Sucessfully");
            alert(mssg);
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
        setMssg("user already exists");
        alert(mssg);
      });
  };

  return (
    <>
      <div className="register">
       <h1> Register</h1>
          
        <input
          type="text"
          name="name"
          value={register.name}
          onChange={registerFunc}
          autoComplete="off"
          placeholder="enter your name"
        />
        <br /> <br />
        <input
          type="email"
          name="email"
          value={register.email}
          onChange={registerFunc}
          autoComplete="off"
          placeholder="enter your email"
        />
        <br /> <br />
        <input
          type="password"
          name="password"
          value={register.password}
          onChange={registerFunc}
          autoComplete="off"
          placeholder="enter your password"
        />
        <br/>
        <button onClick={submitFunc}>Register</button>
      </div>
    </>
  );
}

export default Register;
