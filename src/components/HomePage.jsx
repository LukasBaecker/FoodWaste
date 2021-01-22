import React from "react";
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"
import Plot1 from "./Plot1.jsx"
import Plot2 from "./Plot2.jsx"
import Plot3 from "./Plot3.jsx"
import StoryMap from "./StoryMap.jsx"
import { setScrollTop } from "../actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import ScrollamaEx from "./ScrollamaEx.jsx"
const HomePage =()=> {
  const scrollTop = useSelector((state) => state.scrollTop);
  const dispatch = useDispatch();

  const handleScroll = (event) => {
    dispatch(setScrollTop({scrollTop: window.scrollY}))
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // cleanup this component
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    

  return (
    <>
      <Jumbo />
      <StoryMap/>
      <Plot1/>
      <Plot2/>
      <Plot3/>

    </>
    );
};

export default HomePage;