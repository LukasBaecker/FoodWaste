import React, { useState } from "react";
import {Marker} from "react-leaflet";

const OwnMarker = (point) => {
    return (
        <Marker key={"key" + point.geometry.coordinates + point.properties.id} position={[point.geometry.coordinates[1],point.geometry.coordinates[0]]} />
    )
}
export default OwnMarker;