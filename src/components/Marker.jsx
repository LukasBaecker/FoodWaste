import React, { useState } from "react";
import {Marker} from "react-leaflet";
import {Popup} from "react-leaflet";




const OwnMarker = (point) => {

    

    

    var greenIcon = L.icon({
        iconUrl: '../static/marker-icon.png',
        iconSize:     [25, 41], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (
        <Marker icon={greenIcon} key={"key" + point.geometry.coordinates + point.properties.id} position={[point.geometry.coordinates[1],point.geometry.coordinates[0]]}>
            <Popup>
                <div>
                    <div style= {{overflow:'hidden'}}>
                        <p style={{fontSize: 20, fontWeight:'bold', fontFamily:'Times New Roman', float:'left'}}>Recycling Type:</p><p style={{float:'right',fontSize: 20, fontFamily:'Times New Roman'}}>{point.properties.recycling_type}</p>
                    </div>
                    <br/>
                    <div style= {{overflow:'hidden'}}>
                        <p style={{fontSize: 20, fontWeight:'bold', fontFamily:'Times New Roman', float:'left'}}>Disposable Type:</p><p style={{float:'right', fontSize: 20, fontFamily:'Times New Roman'}}>{point.properties.object_type}</p>
                    </div>
                    <br/>
                    <div style= {{overflow:'hidden'}}>
                        <p style={{fontSize: 20, fontWeight:'bold', fontFamily:'Times New Roman', float:'left'}}>Address:</p><p style={{float:'right',fontSize: 20, fontFamily:'Times New Roman'}}>{point.properties.address}</p>
                    </div>
                    <br/>
                    <div style= {{overflow:'hidden'}}>
                        <p style={{fontSize: 20, fontWeight:'bold', fontFamily:'Times New Roman', float:'left'}}>Exact Location:</p><p style={{float:'right',fontSize: 20, fontFamily:'Times New Roman'}}>{point.properties.location_desc}</p>
                    </div>
                    <br/>
                </div>
            </Popup>
        </Marker>
    )
}
export default OwnMarker;