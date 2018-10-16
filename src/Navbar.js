import React, { Component } from 'react';
import './App.css';

class NavBar extends Component{
    render(){
        return(
           <div className= "NavBar">
           <div id = "navbargrid">
                <div id ="hamicon">
                </div>
                <div id ="navtitle">
                    <h1> Neighborhood Map</h1>
                </div>
           </div>
           </div>
        )
    }
}

export default NavBar;
