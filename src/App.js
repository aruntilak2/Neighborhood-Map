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
    query: '',
    searchVenues: ''
  } 
  componentDidMount() {
    this.getvenues()
    // using this loadmaps as callback function in line 89.
    // Callback helps to render maps, save venues in array 
    // and then render maps 
    // this.loadMaps()
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
    var bounds = new window.google.maps.LatLngBounds();
    // This infowindow gets the content using "setContent" in the marker event listener
    var infowindow = new window.google.maps.InfoWindow({ });
    this.setState({
      map:map,
      infobox: infowindow
    })
    
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
      this.state.allMarkers.push(marker);
      this.state.allMarkersTitles.push(marker.title);
      // console.log(markers);

      marker.addListener('click', function() {
        marker.title;
        infowindow.setContent(infobox);
        infowindow.open(map, marker);
        // infowindow.setCenter;
      });
    })
    this.setState({
      markers: this.state.allMarkers,
      allMarkersTitles : this.state.allMarkersTitles
    });
  }
  handlelistitems = (e,name, venue) =>{
    e.preventDefault();
    console.log(e,name);
    this.analyzeListItemToMarkers(name, venue);
  }
  analyzeListItemToMarkers = (name, venue) => {
    console.log(this.state.venues);
    console.log(this.state);
    this.state.allMarkers.forEach(marker => {
      if (name === marker.name) {
        const infoBox = this.state.infobox;
        infoBox.setContent(`<h3>${venue.venue.name}</h3>
                            <p>${venue.venue.location.formattedAddress}</p>`);
        infoBox.open(this.state.map, marker);
      }
    });
  }
  filterVenues = (event) => {
    const {value} = event.target;
    let searchVenues = [];
    this.state.venues.forEach(venue =>{
      if(venue.venue.name.toLowercase().indexOf(value.toLowercase()) >= 0){
        venue.marker.setVisible(true);
        searchVenues.push(venue);
      } else {
        venue.marker.setVisible(false);
      }
    })
    this.setState ({
      searchVenues: searchVenues,
      query : value
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
        }, this.loadMaps())
        // export var venues;
        console.log(this.state.venues);
        // console.log(this.state.venues.venue.name)
      })
      .catch(error => {
        console.log('Error' + error);
      })
      this.state.venues.forEach(myvenue =>{   
        console.log(myvenue.venue.name)
      })
  }

  render() {
    // console.log(this.state.venues[2].venue.name)

    return (
        <div className="App">
        <NavBar 
        />
            <div className ='container'>
              <div className ="sidemenu">
              <SideBar 
                listOfVenues = {this.state.venues}
                markersProp ={this.state.allMarkers}
                markerTitles = {this.state.allMarkersTitles}
                handlelistitems = {this.handlelistitems.bind(this)}
                filterVenues = {this.filterVenues}
                query = {this.state.query}
              /> 
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
