import React from 'react'
import './Box.css'

//Components
import Form from './Form/Form'
import Content from './Content/Content'


const Box = () => {
    return (
        <div className="Box">
            <Form/>
            <Content/>
        </div>
    )
}

export default Box;