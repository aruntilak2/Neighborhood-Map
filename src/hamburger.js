import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';



class HamBurger extends Component{

    // state ={
    //      ham = {props}
    // }
     ClickBurger= (x)=> {
        x.classList.toggle("change");
    }



    // ham.addListener('click', function() {
    //     this.setState =this.ClickBurger
    // });

    render(){
        return(
           <div >
                <div className="hamburger" 
                    // onClick="ClickBurger(this)"
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
