import React from "react";
import Selection from "./Selection.jsx"
import Sidebar from "./Sidebar.jsx";
import Map from "./Map.jsx"

const MapPage = () => {
  
  return (
    <>
      <Sidebar/>
      <Map/>
      <Selection />
    </>
  );
};

export default MapPage;