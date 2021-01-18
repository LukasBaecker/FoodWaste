import React from "react";
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"
import Plots from "./Plots.jsx"
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
      <div id="test">
        <Infobox/>
      </div>
      <StoryMap/>
      <Plots />

    </>
    );
};

export default HomePage;