import React from "react";
import { Marker } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation.js";
import positionMarker from "../img/markerIcon.png";
import ChangeView from "./ChangeView.jsx";
const positionMarkerIcon = new L.Icon({
  iconUrl: positionMarker,
  iconSize: [25, 41], // size of the icon
  shadowAnchor: [4, 62], // the same for the shadow
});

const OwnMarker = () => {
  const location = useGeoLocation();

  return (
    location.loaded &&
    !location.error && (
      <>
        <Marker
          icon={positionMarkerIcon}
          position={[
            location.coordinates.lat,
            location.coordinates.lng,
          ]}></Marker>
        <ChangeView
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={13}
        />
      </>
    )
  );
};
export default OwnMarker;
