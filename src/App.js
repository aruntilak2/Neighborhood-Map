import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';


class App extends Component {
  
  state = {
    venues : []
  }
  componentDidMount() {
    this.getvenues()
  }
  getvenues =() =>{
    const endpoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "X0J4YMUWF4LLQ1O2IW2OWTFXEPW4HRVG4S4BGDGRAMA1ZOZU",
      client_secret : "I542O4WR20LOSGLEIUHHNM3FJU0T3J1SQUN4TY4T3A1TZBMJ",
      query: "jewelry stores",
      near: "Bellevue",
      v:'20182507'
    }
    axios.get(endpoint + new URLSearchParams(parameters))
      .then(response => {
        // console.log(response.data.response.groups[0].items);
        this.setState({
          venues: response.data.response.groups[0].items
        })
        console.log(this.state.venues);
      })
      .catch(error => {
        console.log('Error' + error);
      })

      // this.state.venues.Map(venue =>{
      
      // })

  }
  render() {
    const style ={
      height: '100%',
      width:'100%',
      margin: '0'
    }
    return (
        <div className="App">
          <h1>Neighborhood Map</h1>
          
          <Map 
            google={this.props.google} 
            zoom={13}
            style={style}
            initialCenter = {{
              lat: 47.38093,
              lng: -122.23484
            }}
            >
              {/* onMarkerClick (props, marker){
              Marker.title ="Working?"
            } */}
           
           
            <Marker 
              // onClick={this.onMarkerClick}
              name={'Current location'} 
              title= {'Test'}
              position= {{
                lat: 47.38093,
                lng: -122.23484
              }}             
               
            />
            {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1> 
                </div>
            </InfoWindow> */}
          </Map>
        </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCf3etmckSNxbM0d_htnZZGwKTpQP2TIQk")
})(App)
