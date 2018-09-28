import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';
import SearchAppBar from './sidebar'

class App extends Component { 
  state = {
     venues : []
  } 
  componentDidMount() {
    this.getvenues()
    this.loadMaps()
  }
  loadMaps =() =>{
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCf3etmckSNxbM0d_htnZZGwKTpQP2TIQk&callback=initMap')
    window.initMap = this.initMap
  }

  initMap =() =>{
     const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 47.6165195,
        lng: -122.2044366
      },
      zoom : 15
    })

  this.state.venues.map(myvenue => {


    var marker = new window.google.maps.Marker({
      position: {
        lat: myvenue.venue.location.lat,
        lng: myvenue.venue.location.lng
      },
      map: map,
      title: myvenue.venue.name
    })
  })
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
      this.state.venues.map(myvenue =>{    
        var marker = new window.google.Marker({
          position: {
            lat: myvenue.venue.location.lat , 
            lng: myvenue.venue.location.lng
          },
          map: Map,
        title: myvenue.venue.title
        }) 
      })
  }
  render() {
    
    return (
        <div className="App">
          <h1>Neighborhood Map</h1>  
          <SearchAppBar />        
          <div id="map">
          </div>
        </div>
    );
  }
}
function loadScript(url) {
  var index = window.document.getElementsByTagName ('script')[0]
  var script = window.document.createElement('script')
  script.src = url
  script.async =true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
export default App;
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCf3etmckSNxbM0d_htnZZGwKTpQP2TIQk")
// })(App)
