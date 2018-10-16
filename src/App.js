import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './Navbar'
import SideBar from './Sidebar2'

class App extends Component { 
  state = {
    // Empty array to store dynamic data
    venues : [],
    allMarkers : [],
    allMarkersTitles : [],
    infobox: null,
    map : null,
    // query: '',
    // searchVenues: ''
  } 
  componentDidMount() {
    this.getvenues()
  }
  // This function uses to load Google Script
  // Getting the MAps
  loadMaps =() =>{
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCf3etmckSNxbM0d_htnZZGwKTpQP2TIQk&callback=initMap')
    window.initMap = this.initMap
  }
  // Initialising the Maps
  initMap =() =>{
     const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 47.6165195,
        lng: -122.2044366
      },
      zoom : 15
    })
    var bounds = new window.google.maps.LatLngBounds();
    var infowindow = new window.google.maps.InfoWindow({ });
    this.setState({
      map:map,
      infobox: infowindow
    })
    const tempMarkers = [];
    const tempMarkerTitles = [];

    this.state.venues.forEach(myvenue => {
      // This stores the dynamic information 
      var infobox=
      `<h3>${myvenue.venue.name}</h3>
       <p>${myvenue.venue.location.address+', '+
       myvenue.venue.location.city+ ' - USA'}</p>`
    
      //  Show markers using map method uding Marker 
      var marker = new window.google.maps.Marker({
        position: {
          lat: myvenue.venue.location.lat,
          lng: myvenue.venue.location.lng
        },
        map: map,
        title: myvenue.venue.name,
        name: myvenue.venue.name,
        animation: window.google.maps.Animation.DROP
        // contentstring: contentstring
      })
      tempMarkers.push(marker);
      tempMarkerTitles.push(marker.title);

      // this.state.allMarkers.push(marker);
      // this.state.allMarkersTitles.push(marker.title);
      // console.log(markers);

      marker.addListener('click', function() {
        marker.title;
        infowindow.setContent(infobox);
        infowindow.open(map, marker);
        // infowindow.setCenter;
      });
    })
    this.setState({
      allMarkers: tempMarkers,
      allMarkersTitles : tempMarkerTitles

      // markers: this.state.allMarkers,
      // allMarkersTitles : this.state.allMarkersTitles
    });
  }
  handlelistitems = (e,name, venue) =>{
    e.preventDefault();
    console.log(e,name);
    this.analyzeListItemToMarkers(venue);
  }
  analyzeListItemToMarkers = (venue) => {
    console.log(venue);
    console.log(this.state);
    this.state.allMarkers.forEach(marker => {
      console.log(marker);
      if (venue.name === marker.name) {
        this.state.venues.map(venue =>{
          if(marker.name === venue.venue.name){
            const infoBox = this.state.infobox;
            infoBox.setContent(`<h3>${venue.venue.name}</h3>
                                <p>${venue.venue.location.formattedAddress}</p>`);
            infoBox.open(this.state.map, marker);
          }
        })
      }
    });
  }
  // Using Foursquare to get Dynamic data of stores
  getvenues =() =>{
    const endpoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "X0J4YMUWF4LLQ1O2IW2OWTFXEPW4HRVG4S4BGDGRAMA1ZOZU",
      client_secret : "I542O4WR20LOSGLEIUHHNM3FJU0T3J1SQUN4TY4T3A1TZBMJ",
      query: "jewelry stores",
      near: "Bellevue",
      v:'20182507'
    }
    //  My first time using axios instead of fetch.
    axios.get(endpoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.loadMaps())

      })
      .catch(error => {
        console.log('Error' + error);
      })
      this.state.venues.forEach(myvenue =>{   
        console.log(myvenue.venue.name)
      })
  }

  render() {
    return (
        <div className="App"
        >  
        <NavBar 
        />
            <div className ='container'>
              <div className ="sidemenu">
              <SideBar 
                listOfVenues = {this.state.venues}
                markersProp ={this.state.allMarkers}
                markerTitles = {this.state.allMarkersTitles}
                handlelistitems = {this.handlelistitems.bind(this)}
                query = {this.state.query}
              /> 
              </div>
              <div className="mapplace">
                  <div id="map"
                      role="application"
                      className="aria-label"
                      aria-label="Google Map Area for the Stores"
                      tabIndex='0'
                  >
                  </div>
              </div>
            </div>
        </div>
    );
  }
}

// Loadind scripts asynchronously
function loadScript(url) {
  var index = window.document.getElementsByTagName ('script')[0]
  var script = window.document.createElement('script')
  script.src = url
  script.async =true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
export default App;
