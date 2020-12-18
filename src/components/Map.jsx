import React, { useState } from "react";
import colors from "../scss/index.scss";
import {
  MapContainer,
  Map,
  Marker,
  TileLayer,
  Popup,
  LayersControl,
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


const Leaflet = () => {
  
  return (


    <Map center={[51.960667, 7.626135]} zoom={13}>
      <LayersControl>          
        <BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        </LayersControl>
    </Map>

  );
};

export default Leaflet;
