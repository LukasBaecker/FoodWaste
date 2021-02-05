import React, { useState } from "react";
import colors from "../scss/index.scss";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer, LayersControl, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import OwnMarker from "./Marker.jsx";
import OwnMarkerWithoutPic from "./MarkerWithoutPic.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import LocationMarker from "./LocationMarker.jsx";
import { useMediaQuery } from "react-responsive";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});

const Leaflet = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const points = useSelector((state) => state.points);
  const [locationActivate, setLocationActivate] = useState(false);

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
        {locationActivate ? <LocationMarker /> : ""}
        <MarkerClusterGroup polygonOptions={geoJSONstyle()}>
          {isTabletOrMobile
            ? points.features.map((p) => OwnMarkerWithoutPic(p))
            : points.features.map((p) => OwnMarker(p))}
        </MarkerClusterGroup>
      </MapContainer>
      <div className='location-div'>
        <button
          className={
            locationActivate ? "btn btn-primary" : "btn btn-primary grey"
          }
          onClick={() => {
            setLocationActivate(!locationActivate);
          }}>
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
