import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

class App extends Component {
  // initMap= () => {
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //   });
  // }
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
            zoom={3}
            style={style}
            // initialCenter = {{
            //   lat: 40.854885,
            //   lng: -88.081807
            // }}
            >
              {/* onMarkerClick (props, marker){
              Marker.title ="Working?"
            } */}
           
            <Marker 
              // onClick={this.onMarkerClick}
              name={'Current location'} 
              title= {'Test'}
              position= {{
                lat: 37.778519,
                lng: -122.405640
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
