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
        // console.log("venuarray :"+venuearray);
        venuearray.map (venuename => {
            {/* console.log(venuename.venue.name); */}
            let name = venuename.venue.name;
            console.log(name);
            {name}
            // <li>
            // <h2 key={name} name={name}></h2> 
            // </li>
        })

        return(
           <div>
                    <div>
                        <h3> Search here...</h3>
                        <input id = "searchfield" type="text" name="fname" placeholder= "Search for a place..."></input>
                        {/* <h2 key={name} name={name}></h2>  */}
                        {/* <h2> {venuearray[0].venue.name}</h2> */}

                        <ol>
                            {
                                venuearray.map (venuename => {
                                    {/* console.log(venuename.venue.name); */}
                                    let name = venuename.venue.name;
                                    console.log(name);
                                    return(
                                        <li>
                                   {/* <h1>name</h1> */}
                                    <h5>{name}</h5> 
                                    </li>
                                    )

                                })
                            }  
                        </ol>      

                    </div>
           </div>
        );
    }
}

export default SideBar;
