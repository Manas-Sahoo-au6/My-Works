import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-md" id="app-navbar">
        <div className="container-fluid">
            <a className="navbar-brand" href="#brand">
                <i className="icon ion-ios-pulse-strong" id="brand-logo"></i></a>
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div
                className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation"><a className="nav-link active" href="#item1">First Item</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#item2">Second Item</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" href="#item3">Third Item</a></li>
                </ul>
        </div>
        </div>
    </nav></div>
        )
    }
}
