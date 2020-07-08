import React, { Component } from 'react'
import Axios from 'axios'
import Joke from './Joke'
import Button from './Button'


export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             joke:""
        }
    }
    
    render() {
        return (
            <div className='container bg-success pt-4 pb-4 mt-4' style={{minHeight:'300px',height:"auto"}}>
                <h2>Read new Jokes on pressing Reload Button</h2>
                <Joke joke={this.state.joke}/>
                <Button onClick={()=>this.componentDidMount()}></Button>
                
            </div>
        )
    }
    async componentDidMount(){
        this.setState({joke:""})
        const data = await Axios.get("https://api.chucknorris.io/jokes/random")
        this.setState({joke:data.data.value})
        console.log(data.data)
    }
}
