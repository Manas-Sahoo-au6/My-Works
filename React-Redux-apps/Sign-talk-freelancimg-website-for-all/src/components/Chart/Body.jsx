import React, { Component } from 'react'
import Hr from './Hr'
import Div from './Div'
import Heading from './Heading'
import Section1 from './Section1'
import ChartRound from './ChartRound'
import ChartHorizontal from './ChartHorizontal'
import Section2 from './Section2'

export default class Body extends Component {
    render() {
        return (
            
            <Div id="container" className="container mt-4">
                <Heading heading='Social selling dashboard'/>
                <Hr/>
                <Section1/>
                <Hr/>
                <Section2/>
                <Hr/>
                <Div className="col d-flex">
                    
                    <ChartRound/>
                    <ChartHorizontal/>
                </Div>
            </Div>
        )
    }
}

