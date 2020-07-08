import React, { Component } from 'react'
import Input from './Input'
import Row from './Row'

export default class Body extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ans:true
        }
    }
    
    render() {
        return (
                <div className="main container p-2 mt-5">
                    <Input/>
                    <Row row1='AC' row2='+/-' row3='%' row4='/'/>
                    <Row row1='7' row2='8' row3='9' row4='*'/>
                    <Row row1='4' row2='5' row3='6' row4='-'/>
                    <Row row1='1' row2='2' row3='3' row4='+'/>
                   
                    
                    <div className="col-12 row m-0 p-0 bg-light">
                        <button className="col-6 bg-secondary button text-light" id='0' onClick={this.handleClick}>0</button>
                        <button className="col-3 bg-secondary button text-light" id='.' onClick={this.handleClick}>.</button>
                        <button className="col-3 bg-warning button text-light" id='=' onClick={this.finalClick}>=</button>
                    </div>
                </div>
        )
    }
    handleClick = (e)=>{
        let val = document.querySelector(".cal_input")
        return val.value = val.value + e.target.id
    }
    
    finalClick = () =>{
        const val = document.querySelector(".cal_input")
        try{
            if (val.value !== ''){
                return val.value = eval(val.value)
            }else{
                return val.value = ''
            }
        }catch(err){
            alert("invalid syntax")
        }
    }
}
