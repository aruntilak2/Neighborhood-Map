import React from 'react';
import './App.css';
// import HamBurger from './hamburger'
// Remember -----this.props.ListOfVenues = Venuesarray from App.js
//               this.props.MarkersProp = for All markers form Appjs using getvenues method
//               this.props.MarkerTitles = for all marker Titles
//               this.props.HandleListItems = function from App.js
class SideBar extends React.Component{

    render(){
        // for local use
        var venuearray = this.props.ListOfVenues;
        var index= []
        var markersarray = this.props.MarkersProp;
        var markertitlesarray = this.props.MarkerTitles;
        // console.log("venuarray :"+venuearray);
        // console.log("markersarray :"+ markersarray[0].title);
        // console.log(markertitlesarray);


        venuearray.forEach(venuename => {
            // index.push(venuename);
            {/* console.log(venuename.venue.name); */}
            let name = venuename.venue.name;
            // markertitlesarray.push(name);
            // console.log(name);
            // {name}
            // venuename.addListener('click', function() {
            //     markersarray[venuename]
            // });
        })
        // console.log(markertitlesarray);

        return(
           <div>
                <div>
               
                    <h3> Search here...</h3>
                    <input id = "searchfield" type="text" 
                           name="fname" 
                           placeholder= "Search for a place..."
                    >
                    </input>
                    <div className ="navlistnames">
                        <ol>
                            {
                                venuearray.map ((venuename, index) => {
                                    {/* console.log(venuename.venue.name); */}
                                    let name = venuename.venue.name;
                                    {/* console.log(name); */}
                                    return(
                                        <li key= {index} onClick = {this.props.HandleListItems}>
                                            <h5><a href="/">{name}</a>
                                            </h5>

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
