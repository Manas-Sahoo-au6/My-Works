import React, { Component } from 'react'
import "./App.css";
import Card from "./Components/Card";
import Toggler from "./Components/Toggler";
class App extends Component {
   state = {
    Annually:[
      {
        Color: "white",
        Heading: "Basic",
        Price:"$19.99",
        Storage:"500GB",
        Users: 2,
        MaxTransfer:3,
        Color2: "#7929cf"
       },
       {
        Color: "#7929cf",
        Heading: "Professional",
        Price:"$24.99",
        Storage:"1TB",
        Users: 5,
        MaxTransfer:10,
         Color2: "white",
       },
       {
        Color: "white",
        Heading: "Master",
        Price:"$39.99",
        Storage:"2TB",
        Users: 10,
        MaxTransfer:20,
        Color2: "#7929cf"
       }] 
  
     

 

   }

   submitFunc(){
     
     this.setState({
      Annually:[
         
        {
          Color: "white",
          Heading: "Basic",
          Price:"$199.99",
          Storage:"500GB",
          Users: 2,
          MaxTransfer:3,
          Color2: "#7929cf"
         },
         {
          Color: "#7929cf",
          Heading: "Professional",
          Price:"$249.99",
          Storage: "1TB",
          Users: 5,
          MaxTransfer:10,
           Color2: "white",
         },
         {
          Color: "white",
          Heading: "Master",
          Price:"$399.99",
          Storage:"2TB",
          Users: 10,
          MaxTransfer:20,
          Color2: "#7929cf"
         },
       
       
     ]
     })
   }

   reversFunc(){

   


    this.setState({
      Annually:[
        {
          Color: "white",
          Heading: "Basic",
          Price:"$19.99",
          Storage:"500GB",
          Users: 2,
          MaxTransfer:3,
          Color2: "#7929cf"
         },
         {
          Color: "#7929cf",
          Heading: "Professional",
          Price:"$24.99",
          Storage:"1TB",
          Users: 5,
          MaxTransfer:10,
           Color2: "white",
         },
         {
          Color: "white",
          Heading: "Master",
          Price:"$39.99",
          Storage:"2TB",
          Users: 10,
          MaxTransfer:20,
          Color2: "#7929cf"
         }] 
      
    })
   }


  render() {
    return (
      <div className="App">
      <div className="header">
          <h1>Our Pricing</h1>
          <hr />
        </div>
        <div id="Toggle" className="Toggle">
        <h2>Monthly</h2>

          <input  type="checkbox" id="switch" className="checkbox" />
          <label onClick={()=>{this.submitFunc()}} onDoubleClick={()=>{this.reversFunc()}} for="switch" className="toggle"></label>
          
          <h2>Annualy</h2>
        </div>
      <div className="carddata">
      {
          this.state.Annually.map((data,index)=>(<Card key={index} review={data} />))
        }
       
      </div>
    </div>
    )
  }
}

export default App
