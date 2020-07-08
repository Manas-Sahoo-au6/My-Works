import React from 'react'
import './Form.css'

//Components
import Avatar from './Avatar/Avatar.jsx'
import InputFields from './InputFields/InputFields.jsx'
import Footer from './Footer/Footer.jsx'



const Form = () => {
    return (
        <form className="Form">
            <div className="Wrapper">
                <Avatar />
                <InputFields />
                <Footer />
            </div>
        </form>
    )
}

export default Form;