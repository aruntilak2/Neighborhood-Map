import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import axios from 'axios';
// import SearchAppBar from './sidebar'
import { MenuList, MenuItem } from '@material-ui/core';
// import SimpleMenu from './Menu'
import NavBar from './Navbar'
import SideBar from './Sidebar2'

class App extends Component { 
  state = {
    // Empty array to store dynamic data
    venues : []
  } 
  componentDidMount() {
    this.getvenues()
    this.loadMaps()
  }
  // This function uses to load Google Script
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

    // This infowindow gets the content using "setContent" in the marker event listener
  var infowindow = new window.google.maps.InfoWindow()
  this.state.venues.map(myvenue => {

    // This stores the dynamic information 
    var contentstring= myvenue.venue.location.address+', '+
     myvenue.venue.location.city+ ' - USA'

    //  Show markers using map method
    var marker = new window.google.maps.Marker({
      position: {
        lat: myvenue.venue.location.lat,
        lng: myvenue.venue.location.lng
      },
      map: map,
      title: myvenue.venue.name
    })

    marker.addListener('click', function() {
      infowindow.setContent(contentstring)
      infowindow.open(map, marker);
    });
  })
  }

  // Using Foursquare to get Dynamic data
  getvenues =() =>{
    const endpoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "X0J4YMUWF4LLQ1O2IW2OWTFXEPW4HRVG4S4BGDGRAMA1ZOZU",
      client_secret : "I542O4WR20LOSGLEIUHHNM3FJU0T3J1SQUN4TY4T3A1TZBMJ",
      query: "jewelry stores",
      near: "Bellevue",
      v:'20182507'
    }

    //  My first timeUsing axios instead of fetch.
    axios.get(endpoint + new URLSearchParams(parameters))
      .then(response => {
        // console.log(response.data.response.groups[0].items);
        this.setState({
          venues: response.data.response.groups[0].items
        })
        // export var venues;
        // console.log(this.state.venues);
        // console.log(this.state.venues.venue.name)

      })
      .catch(error => {
        console.log('Error' + error);
      })
      this.state.venues.map(myvenue =>{   
        console.log(myvenue.venue.name)
 
        var marker = new window.google.Marker({
          position: {
            lat: myvenue.venue.location.lat , 
            lng: myvenue.venue.location.lng
          },
        map: Map,
        title: myvenue.venue.title
        }) 
        // return <SideBar name={this.state.myvenue.venue.name} />

      })


  }
  render() {
    // console.log(this.state.venues[2].venue.name)

    return (
        <div className="App">
        <NavBar />
            <div className ='container'>
              <div className ="sidemenu">
              <SideBar 
                ListOfVenues = {this.state.venues}
              /> 

              {/* working fine */}
              {/* <MenuList className ="menulist">
                  <MenuItem>
                  {this.state.venues.map(myvenue =>{
                   return <MenuItem key = {myvenue.venue.name}>
                          {myvenue.venue.name}
                        </MenuItem>
                   } )} 
                  </MenuItem>
                </MenuList> */}

                {/* Test 1 */}
                {/* <MenuList className ="menulist">
                  <MenuItem>
                  {this.state.venues.map(myvenue =>{
                   return <MenuItem key = {myvenue.venue.name}>
                          {myvenue.venue.name}
                        </MenuItem>
                   } )} 
                  </MenuItem>
                </MenuList> */}

                {/* </SideBar> */}
              </div>
              <div className="mapplace">
                  <div id="map">
                  </div>
              </div>
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
