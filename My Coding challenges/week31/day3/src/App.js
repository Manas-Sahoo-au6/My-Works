import React, { Component } from "react";
import ReviewUser from "./Components/ReviewUser";
import Header from "./Components/header/Header";

class App extends Component {
  state = {
       Users:[
         
          {
            Name: "Manas",
            Email: "rmanas000@gamil.com",
            ProfilePicUrl:"https://i.pravatar.cc/400?img=59",
            Review:"Great Personality person",
            Rating: 5
           },
           {
            Name: "Smita",
            Email: "smita@gmai.com",
            ProfilePicUrl:"https://i.pravatar.cc/400?img=36",
            Review:"Cool & always ready to lead ",
            Rating: 5
           },
           {
            Name: "Suvinay",
            Email: "suvinay@gmail.com",
            ProfilePicUrl:"https://i.pravatar.cc/400?img=33",
            Review:"greate attitude \nmotivated",
            Rating: 4.5 
           },
         
       ]
       

  };
       

  render() {
    return (
      <>
       <div className="main">
          <div className="item1">
          <Header />
          </div>
        <div className="item">
        {
          this.state.Users.map((user,index)=>(<ReviewUser key={index} review={user} />))
        }
        </div>
        
       </div>
      </> 
    );
  }
}

export default App;
