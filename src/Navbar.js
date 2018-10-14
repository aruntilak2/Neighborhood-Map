import React, { Component } from 'react';
import './App.css';
import HamBurger from './hamburger'

class NavBar extends Component{

// state ={
//     status: true
// }
    hamOpenClose= (x)=> {
        // x.classList.toggle("change");
        // this.setState = false
    }
    render(){
        return(
           <div className= "NavBar">
           <div id = "navbargrid">
                <div id ="hamicon">
                    {/* <HamBurger 
                        hamiconwork ={this.props.hamOpenClose}

                    /> */}
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
