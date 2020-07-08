import React from 'react'
import'./InputFields.css'

//Components
import Inputs from './Inputs/Inputs.jsx'


const InputFields = () => {
    return (
        <div className="InputFields">
            <Inputs type="email" name="email" placeholder="Enter your email id" />
            <Inputs type="password" name="password" placeholder="Enter your password" />
            <Inputs type="button" value="Log In" style={{height:'30px',marginTop:"25px" ,width:'80px',padding:'3px 20px',cursor:"pointer",background:'linear-gradient(to right, #00dbdef0, #fc00ffe6)',color:"white",border:"none"}} />
            <a href="#" style={{fontSize:'12px'}} >Forgot Password?</a>
        </div>
    )
}

export default InputFields;