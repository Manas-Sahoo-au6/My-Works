import React from 'react'
import './App.css';
import {Switch,Route}  from 'react-router-dom';
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Food from './components/Food'

import NavBar from './components/NavBar'
function App() {
  return (
    <>
      <NavBar />
         <Switch>
           <Route  exact path="/" component={Home}/>
           <Route exact path="/aboutus" component={AboutUs}/>
           <Route exact path="/services" component={Services}/>
           <Route exact path="/contactus" component={ContactUs}/>
           <Route exact path="/receipe" component={Food}/>

         </Switch>
    </ >
  )
}

export default App

