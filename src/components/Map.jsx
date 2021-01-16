import React, { useState } from "react";
import colors from "../scss/index.scss";
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { MapContainer, TileLayer, Marker} from 'react-leaflet'

import L from "leaflet";
import {useSelector } from "react-redux";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});
import OwnMarker from "./Marker.jsx"

const Leaflet = () => {
  const points = useSelector((state) => state.points);

  //that was for polygons but may be changed to marker design
  const geoJSONstyle = () => {
    return {
      // the fillColor is adapted from a property which can be changed by the user (segment)
      fillColor: colors.primarycolor,
      //stroke-width: to have a constant width on the screen need to adapt with scale
      opacity: 1,
      color: colors.primarycolor,
      fillOpacity: 0.5,
    };
  };

  return (
    <MapContainer center={[51.960667, 7.626135]} zoom={13} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup polygonOptions= {geoJSONstyle()}>
        {points.features.map(p => OwnMarker(p))}
      </MarkerClusterGroup>

    </MapContainer>

  );
};

export default Leaflet;
