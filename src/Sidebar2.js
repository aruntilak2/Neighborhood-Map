import React from 'react';
import './App.css';
// import HamBurger from './hamburger'


// Remember -----this.props.ListOfVenues = Venuesarray from App.js
//               this.props.MarkersProp = for All markers form Appjs using getvenues method
class SideBar extends React.Component{
    state = {
        query : " ",
        // bringing all the venues with props from App.js
        getStoreArray : this.props.ListOfVenues,
        // bringing all the markers with props from App.js
        getMarkerArray: this.props.MarkersProp
    }

    updateQuery = (query) => {
        this.setState({
            // query :query.trim()
            query :query

        })
    }

    // Saving them in state with function
    getStoreWithMarker = () =>{
        this.setState({getStoreArray : this.state.getStoreArray})
        this.setState({getMarkerArray: this.state.getMarkerArray})

    }
    render(){
        // for local use
        var venuearray = this.props.ListOfVenues;
        var index= []

        var markersarray = this.props.MarkersProp;
        // console.log("venuarray :"+venuearray);
        venuearray.forEach(venuename => {
            index.push(venuename);
            {/* console.log(venuename.venue.name); */}
            let name = venuename.venue.name;
            // console.log(name);
            {name}
            // venuename.addListener('click', function() {
            //     markersarray[venuename]
            // });
        })

        // showallmarkers =()=>{
        //     markersarray;
        // }
        // getmarker =(id)=>{
        //     id = markersarray[id];

        // }
        // markersarray.forEach (mymarker =>{
        //     mymarker.addListener('click', function() {
                
        //       });

        // })

// TEST
        // var markersprop = this.props.MarkersProp;
        // markersprop.map (markertitle=> {
        //     let mTitle =markertitle.title;
        //     // console.log(mTitle);
        // })
        // var markertitle = markerprop.title;
        // console.log(markerprop.title);
// TEST

        return(
           <div>
                <div>
               
                    <h3> Search here...</h3>
                    <input id = "searchfield"
                           type="text" 
                           name="fname" 
                           placeholder= "Search for a place..."
                           value = {this.state.query}
                           onChange = {(event)=> this.updateQuery(event.target.value)}
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
                                        <li key= {index}
                                            // {
                                            //     this.state.getStoreArray.map() =>                                                 
                                            // }
                                        >
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
