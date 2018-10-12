import React from 'react';
import './App.css';
// import HamBurger from './hamburger'


// Remember -----this.props.ListOfVenues = Venuesarray from App.js
//               this.props.MarkersProp = for All markers form Appjs using getvenues method
class SideBar extends React.Component{
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
                                        <li key= {index}>
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
