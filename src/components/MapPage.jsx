import React from "react";
import Selection from "./Selection.jsx"
import Sidebar from "./Sidebar.jsx";
import Map from "./Map.jsx"
import Navbar from "./Navbar.jsx"
const MapPage = () => {
  
  return (
    <>
    {Navbar(true)}
      <Sidebar/>
      <Map/>
      <Selection />
    </>
  );
};

export default MapPage;