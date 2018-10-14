import React, { Component } from 'react';
import './App.css';
//  this.props.hamiconwork-- From Navbar.js

class HamBurger extends Component{
    render(){
        return(
           <div >
                <div className="hamburger" 
                    onClick={this.props.hamiconwork}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
           </div>
        )
    }
}

export default HamBurger;
