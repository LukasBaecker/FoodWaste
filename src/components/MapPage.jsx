import React from "react";
import Selection from "./Selection.jsx"
import Sidebar from "./Sidebar.jsx";
import Map from "./Map.jsx"
import Navbar from "./Navbar.jsx"
import { useDispatch, useSelector } from "react-redux";
import { setScrollTop } from "../actions";
import { InView } from 'react-intersection-observer';
const MapPage = () => {
  
  return (
    <>
    <Navbar/>
      <Sidebar/>
      <InView as="div" threshold={0} onChange={(inView, entry) => {dispatch(setScrollTop(!inView))}}>
      <Map/>
      </InView>
      <Selection />
    </>
  );
};

export default MapPage;