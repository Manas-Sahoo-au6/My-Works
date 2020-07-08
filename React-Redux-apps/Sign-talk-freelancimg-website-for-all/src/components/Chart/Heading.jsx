import React from 'react'
import Div from './Div'
export default function Heading({heading}) {
    return (
        <Div className="col">
            <h1>{heading}</h1>
        </Div>
    )
}
