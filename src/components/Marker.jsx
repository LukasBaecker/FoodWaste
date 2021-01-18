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

    
    
    return (
        
        <Marker position ={relative} icon={orangeIcon} key={"key" + point.geometry.coordinates + point.properties.id} position={[point.geometry.coordinates[1],point.geometry.coordinates[0]]}>
            
            

             <Popup className="request-popup">
                 
             <img className="center"
              src="https://img.icons8.com/bubbles/100/000000/waste-separation.png"
            />
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