import React from "react";
import Jumbo from "./Jumbo.jsx"
import Plot1 from "./Plot1.jsx"
import Plot2 from "./Plot2.jsx"
import Plot3 from "./Plot3.jsx"
import StoryMap from "./StoryMap.jsx"
import Navbar from "./Navbar.jsx"
import { useDispatch, useSelector } from "react-redux";
import { setViewportWidth } from "../actions";

const HomePage =()=> {
  const viewportWidth = useSelector((state) => state.viewportWidth);
  const dispatch = useDispatch();

 
  const handleResize = (event) => {
      dispatch(setViewportWidth(window.innerWidth))
    }

  React.useEffect(() => {
    window.addEventListener('rezise', handleResize)
    // cleanup this component
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  return (
    <>
      {Navbar(false)}
      <Jumbo />
      <StoryMap/>
      
      <Plot1/>
      <Plot2/>
      <Plot3/>

    </>
    );
};

export default HomePage;