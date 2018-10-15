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

    render(){
       
        const {handlelistitems, listOfVenues, query, filterVenues} = this.props;

        return(
           <div>
                <div>
               
                    <h3> Search here...</h3>
                    <input id = "searchfield" type="text" 
                           name="fname" 
                           placeholder= "Search for a place..."
                           onChange = {e => {
                               filterVenues(e);
                            // this.handleChange(e).bind(this)
                           }}
                            // onChange = {this.handleChange.bind(this)}
                           value = {query} 

                    >
                    </input>
                    <div className ="navlistnames">
                        <ol>
                            {
                                listOfVenues.map ((venue, index) => {
                                    {/* console.log(venuename.venue.name); */}
                                    let name = venue.venue.name;
                                    {/* console.log(name); */}
                                    return(
                                        <li className="listitem" key= {index} 
                                        onClick = {(e) => {
                                            handlelistitems(e,name,venue);
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
