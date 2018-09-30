import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';
import HamBurger from './hamburger'


class NavBar extends Component{
    render(){
        return(
           <div className= "NavBar">
           <div id = "navbargrid">
                <div id ="hamicon">
                    <HamBurger />
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
