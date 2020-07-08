import React from 'react'
import './Footer.css'

//Components
import Inputs from "../InputFields/Inputs/Inputs"

const Footer = () => {
    return (
        <div className="Footer">
            <span style={{fontSize:"12px"}}>Don't have an account?</span>
            <Inputs type="button" value="Create new" style={{height:'30px' ,width:"100px",cursor:"pointer", color:"#fc00ffe6",background:"white",border:'1px solid #fc00ffe6',fontSize:'12px'}} />
        </div>
    )
}

export default Footer;