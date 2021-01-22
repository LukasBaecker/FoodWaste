import { relative } from "path";
import React, { useState } from "react";
import {Marker} from "react-leaflet";
import {Popup} from "react-leaflet";
import { popupContent, popupHead, popupText, okText } from "./PopupStyles";
import logo from "../img/BinPoints.png";
import Image from "react-bootstrap/Image";




const OwnMarker = (point) => {

    

    var orangeIcon = L.icon({
        iconUrl: '../static/marker-icon.png',
        iconSize:     [25, 41], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    
    // make first sentences
    // use obj type and rec type
    if(point.properties.recycling_type != "store") {
        // rec type is not ALSO store
        var type_desc = <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                        This is a {point.properties.object_type} for {point.properties.recycling_type}.
                        </p>
    } else {
        // to avoid "store for store"
        var type_desc = <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                        This is a {point.properties.recycling_type}.
                        </p>
    }

    // name
    if(point.properties.name != "FALSE") {
        // name given
        var name =  <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                     It is called {point.properties.name}.
                    </p>
    } else {
        // no name given
        var name = <p></p>
    }

    // add_desc out of address and location_desc
    if(point.properties.address != "FALSE") {
        if(point.properties.location_desc != "FALSE") {
            // if address and loca_disc given
            var add_desc =  <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                            It is located at {point.properties.address} ({point.properties.location_desc}).
                            </p>
        } else {
            // if address given
            var add_desc =  <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                            It is located at {point.properties.address}.
                            </p>
        }
    } else {
        if(point.properties.location_desc != "FALSE") {
            // if loc_disc given
            var add_desc =  <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                            It is located at {point.properties.location_desc}.
                            </p>
        } else {
            // if none given
            var add_desc =  <p></p>
        }
    }      

    // hours
    if(point.properties.hours != "FALSE") {
        //hours given
        var hours_desc = <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                        It has the following opening hours: {point.properties.hours}
                        </p>
    } else {
        var hours_desc = <p></p>
    }

    // website, tel
    if(point.properties.website != "FALSE") {
        if(point.properties.telephone != "FALSE") {
            // web and phone given
            var web_desc =  <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                            The website can be reached via {point.properties.website} and there
                            is also a telephone number: {point.properties.telephone}.
                            </p>
        } else {
            // web but no phone
            var web_desc =  <p style={{fontSize: 15, fontFamily:'Arial', float:'left'}}>
                            The website can be reached via {point.properties.website}.
                            </p>
        }
    } else {
        var web_desc = <p></p>
    }



    return (

        <Marker position ={relative} icon={orangeIcon} key={"key" + point.geometry.coordinates + point.properties.id} position={[point.geometry.coordinates[1],point.geometry.coordinates[0]]}>
            
            

        <Popup className="request-popup">
            
        <img className="center"
         src="https://img.icons8.com/bubbles/100/000000/waste-separation.png"
       />
       {type_desc}
       {name}
       {add_desc}
       {hours_desc}
       {web_desc}
       
           <table>
               <tr>
                   <td><p style={{fontSize: 15, fontWeight:'bold', fontFamily:'Arial', float:'left'}}>Recycling Type:</p></td>
                   <td><p style={{float:'right',fontSize: 15, fontFamily:'Arial'}}>{point.properties.recycling_type}</p></td>
               </tr>
               <tr>
                   <td><p style={{fontSize: 15, fontWeight:'bold', fontFamily:'Arial', float:'left'}}>Disposable Type:</p></td>
                   <td><p style={{float:'right', fontSize: 15, fontFamily:'Arial'}}>{point.properties.object_type}</p></td>
               </tr>
               <tr>
                   <td><p style={{fontSize: 15, fontWeight:'bold', fontFamily:'Arial', float:'left'}}>Address:</p></td>
                   <td><p style={{float:'right',fontSize: 15, fontFamily:'Arial'}}>{point.properties.address}</p></td>
               </tr>
               <tr>
                   <td><p style={{fontSize: 15, fontWeight:'bold', fontFamily:'Arial', float:'left'}}>Exact Location:</p></td>
                   <td><p style={{float:'right',fontSize: 15, fontFamily:'Arial'}}>{point.properties.location_desc}</p></td>
               </tr>
           </table>

           </Popup>
   </Marker>

    )

    
    
    
}
export default OwnMarker;