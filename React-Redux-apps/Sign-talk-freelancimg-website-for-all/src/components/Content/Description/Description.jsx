import React from 'react'
import './Description.css'
import Avatar from '../../Form/Avatar/Avatar'
import InputFields from '../../Form/InputFields/InputFields'
import Footer from '../../Form/Footer/Footer'
const Description = () => {
    return (
        <div className="Description">
            <div className="Wrapper">
                <Avatar />
                <InputFields />
                <Footer />
            </div>
            
        </div>
    )
}

export default Description;



{/* <h4 style={{fontWeight:"500", letterSpacing:"1px",marginBottom:"10px"}}>We are more than just a company.</h4>
            <p style={{fontSize:"14px",marginTop:"0"}}>of type and scrambled it to make a type specimen book.</p> */}