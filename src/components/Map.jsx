import React, { useState } from "react";
import colors from "../scss/index.scss";
import {
  MapContainer,
  Map,
  Marker,
  TileLayer,
  Popup,
  LayersControl,
  GeoJSON
} from "react-leaflet";
const { BaseLayer, Overlay } = LayersControl;
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
import Button from "react-bootstrap/Button";
const recyclingPoints = require('../../data/recycling_points.geojson');

const Leaflet = () => {
  
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


    <Map center={[51.960667, 7.626135]} zoom={13}>
      <LayersControl>          
        <BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <Overlay checked key={JSON.stringify(recyclingPoints)} name="recycling-points">
          {" "}
          <GeoJSON data={recyclingPoints} style={geoJSONstyle()} />
        </Overlay>
        </LayersControl>
    </Map>

  );
};

export default Leaflet;
