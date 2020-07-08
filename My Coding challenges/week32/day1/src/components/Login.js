import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function Login() {
  let [login, setLogin] = useState({
    email: " ",
    password: " ",
  });
  let [mssg, setMssg] = useState();
  let [post, setPost] = useState();

  let loginFunc = (event) => {
    let { value, name } = event.target;

    setLogin((prev) => {
      if (name === "email") {
        return {
          email: value,
          password: prev.password,
        };
      } else if (name === "password") {
        return {
          email: prev.email,
          password: value,
        };
      }
    });
  };
  let submitFunc = () => {
    console.log(login);

    let data = Axios({
      method: "post",
      url: "http://localhost:8080/api/user/login",
      data: {
        email: login.email,
        password: login.password,
      },
    });

    data
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        if (res.data.message) {
          setTimeout(() => {
            setMssg(res.data.message);
            alert(mssg);
          }, 500);
        }
      })
      .catch((err) => {
        console.log(err);
        setMssg("incorrect email or password");
        alert(mssg);
      });
  };

  let submitPost = () => {
    let data = Axios({
      method: "get",
      url: "http://localhost:8080/auth",
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Access-Control-Allow-Origin": true,
      },
    });

    data
      .then((res) => {
        setPost((prev) => {
          return res.data.user;
        });
      })
      .catch((err) => {
        alert("Logged in first");
      });
  };

  return (
    <div className="register">
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        value={login.email}
        onChange={loginFunc}
        autoComplete="off"
      />
      <br /> <br />
      <input
        type="password"
        name="password"
        value={login.password}
        onChange={loginFunc}
        autoComplete="off"
      />
      <br /> <br />
      <button onClick={submitFunc}>Login</button>
      <br />
      <button onClick={submitPost}>Post</button>
      <br />
      <br />
      <h2>{post}</h2>
    </div>
  );
}

export default Login;
