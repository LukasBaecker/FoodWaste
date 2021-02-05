import React, { useState } from "react";
import colors from "../scss/index.scss";
import MarkerClusterGroup from "react-leaflet-markercluster";
import positionMarker from "../img/markerIcon.png";
import { MapContainer, LayersControl, TileLayer, Marker } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation.js";
import L from "leaflet";
import { useSelector } from "react-redux";
import OwnMarker from "./Marker.jsx";
import OwnMarkerWithoutPic from "./MarkerWithoutPic.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChangeView from "./ChangeView.jsx";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { useMediaQuery } from "react-responsive";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});

const positionMarkerIcon = new L.Icon({
  iconUrl: positionMarker,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const Leaflet = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const points = useSelector((state) => state.points);
  const location = useGeoLocation();
  const [currentCenter, setCurrentCenter] = useState([51.960667, 7.626135]);
  const [currentZoom, setCurrentZoom] = useState(13);

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      setCurrentCenter([location.coordinates.lat, location.coordinates.lng]);
      setCurrentZoom(13);
    } else {
      alert(location.error.message);
    }
  };

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
    <>
      <MapContainer
        center={[51.960667, 7.626135]}
        zoom={13}
        zoomControl={false}
        className='pointMap'>
        <ChangeView center={currentCenter} zoom={currentZoom} />
        <LayersControl position='topright'>
          <LayersControl.BaseLayer name='OpenStreetMap'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer checked name='OSM Reduced Colors'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        {location.loaded && !location.error && (
          <Marker
            icon={positionMarkerIcon}
            position={[
              location.coordinates.lat,
              location.coordinates.lng,
            ]}></Marker>
        )}
        <MarkerClusterGroup polygonOptions={geoJSONstyle()}>
          {isTabletOrMobile
            ? points.features.map((p) => OwnMarkerWithoutPic(p))
            : points.features.map((p) => OwnMarker(p))}
        </MarkerClusterGroup>
      </MapContainer>
      <div className='location-div'>
        <button className='btn btn-primary' onClick={showMyLocation}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ fontSize: "1.6em" }}
          />
        </button>
      </div>
    </>
  );
};

export default Leaflet;
