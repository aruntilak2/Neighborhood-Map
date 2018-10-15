import React from 'react';
import './App.css';
// Remember -----this.props.ListOfVenues = Venuesarray from App.js
//               this.props.MarkersProp = for All markers form Appjs using getvenues method
//               this.props.MarkerTitles = for all marker Titles
//               this.props.HandleListItems = function from App.js

class SideBar extends React.Component{
    // handleChange = (e)=>{
    //     const evalue = e.target.value;
    //     this.props.filterVenues(evalue);
    // }
    state = {
        query: '',
        searchVenues : []
    }
    componentWillReceiveProps(data){
        this.setState({
            searchVenues: data.markersProp
        });
        console.log(this.state);
    }
    filterVenues = (event) => {
        const {value} = event.target;
        const search = [];
        console.log(this.props.markersProp);
        this.props.markersProp.forEach(venue => {
            if(venue.name.toLowerCase().indexOf(value.toLowerCase()) >= 0){
                // console.log(value);
                venue.setVisible(true);
                search.push(venue);
              } else {
                venue.setVisible(false);
              }
            })
            this.setState ({
              searchVenues: search,
              query : value
            })
        }          
    render(){
        console.log(this.state.seachVenues);
        // const {handlelistitems, listOfVenues, query, filterVenues} = this.props;
        return(
           <div>
                <div>               
                    <h3> Search here...</h3>
                    <input id = "searchfield" type="text" 
                           name="fname" 
                           placeholder= "Search for a place..."
                           onChange = {e => {
                            this.filterVenues(e);
                           }}
                           value = {this.state.query}
                           aria-label="Input your search for Jewelry Stores in Bellevue, Washington"
                           tabIndex='0'
                    >
                    </input>
                    <div className ="navlistnames">
                        <ol>
                            {
                                this.state.searchVenues.map((venue, index) => {
                                    console.log(venue);
                                    let name = venue.name;
                                    {/* console.log(name); */}
                                    return(
                                        <li className="listitem" key= {index} 
                                        onClick = {(e) => {
                                            this.props.handlelistitems(e,name,venue);
                                        }}>
                                            <h4>{name}
                                            </h4>
                                        </li>
                                    )
                                })
                            }  
                        </ol>    
                    </div>
                </div>
           </div>
        );
    }
}

export default SideBar;
