import React from "react";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
