import React from 'react';
import './App.css';

class SideBar extends React.Component{
    state = {
        query: '',
        searchVenues : []
    }
    componentWillReceiveProps(data){
        this.setState({
            searchVenues: data.markersProp
        });
    }
    filterVenues = (event) => {
        const {value} = event.target;
        const search = [];
        console.log(this.props.markersProp);
        this.props.markersProp.forEach(venue => {
            if(venue.name.toLowerCase().indexOf(value.toLowerCase()) >= 0){
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
                           aria-label="Search for Jewelry Stores in Bellevue,Washington. Input your Search"
                           tabIndex='0'
                    >
                    </input>
                    <div className ="navlistnames">
                        <ol>
                            {
                                this.state.searchVenues.map((venue, index) => {
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
