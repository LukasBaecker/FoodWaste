import React, { useState } from "react";
import {Marker} from "react-leaflet";
import {Popup} from "react-leaflet";



const OwnMarker = (point) => {

    const textFunction = (point) => {
        return (<><p>Recycling type: {point.properties.recycling_type}</p> <br/><p>Otype: {point.properties.object_type}</p></>);
    }

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
                {textFunction(point)}
            </Popup>
        </Marker>
    )
}
export default OwnMarker;