import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';
import { MenuList, MenuItem } from '@material-ui/core';

// this.props.ListOfVenues 

class SideBar extends React.Component{

    render(){

        // console.log(this.props.ListOfVenues );

        // for local use
        var venuearray = this.props.ListOfVenues;
        console.log(venuearray);

        return(
           <div>
            <div>
               <h3> Search here...</h3>
               <input id = "searchfield" type="text" name="fname" placeholder= "Search for a place..."></input>
            </div>
            <div>
               <ul>
               {
                   venuearray.map (venuename => {
                    {/* console.log(venuename.venue.name); */}
                       let name = venuename.venue.name;
                       console.log(name);
                       <li>
                       <h2>{name}</h2> 
                       </li>
                   })
               }
               </ul>
               </div>
           </div>


        );
    }
}

export default SideBar;
