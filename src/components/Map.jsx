import React, { useState } from "react";
import colors from "../scss/index.scss";
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { MapContainer, TileLayer, Marker} from 'react-leaflet'

import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
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

const recyclingPoints = require('../../data/recycling_points.geojson');

const glasscontainers = recyclingPoints.features.filter(element => element.properties.recycling_type =="glass")
const individualWaste = recyclingPoints.features.filter(element => element.properties.recycling_type =="individual waste")
const clothes = recyclingPoints.features.filter(element => element.properties.recycling_type =="clothes")
const giveboxes = recyclingPoints.features.filter(element => element.properties.object_type =="Givebox")
const openBook = recyclingPoints.features.filter(element => element.properties.object_type =="Öffentliches Bücherregal")
const store = recyclingPoints.features.filter(element => element.properties.object_type =="store")
const sharing = recyclingPoints.features.filter(element => element.properties.object_type =="sharing")
const repair = recyclingPoints.features.filter(element => element.properties.object_type =="repair")
const organisation = recyclingPoints.features.filter(element => element.properties.object_type =="organisation")
const everythingElse = recyclingPoints.features.filter(element => element.properties.object_type =="")

const Leaflet = () => {
  var filteredPoints = {};
  const categories = useSelector((state) => state.categories);
  const points = useSelector((state) => state.points);
  const filterGeoJSON=(categories)=>{
    if (categories.glass == true){
      return recyclingPoints.features.filter(element => element.properties.recycling_type =="glass")
    }
    else{
      return recyclingPoints;
    }
  }

  const pointLoading = (points) => {
    return (
      <Overlay  key={JSON.stringify(recyclingPoints).length} name="filteredPoints">
        {" "}
        <GeoJSON data={points} style={geoJSONstyle()} />
      </Overlay>)
    
  }

  const setMarkers = (points) => {
      {points.features.map(m => (
       <Marker position={m.geometry.coordinates} />
      ))}
    
  }

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
