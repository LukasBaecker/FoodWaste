import React from "react";
import Jumbo from "./Jumbo.jsx"
import Plot1 from "./Plot1.jsx"
import Plot2 from "./Plot2.jsx"
import Plot3 from "./Plot3.jsx"
import StoryMap from "./StoryMap.jsx"
import Navbar from "./Navbar.jsx"
import { useDispatch, useSelector } from "react-redux";
import { setScrollTop } from "../actions";
import { InView } from 'react-intersection-observer';
import Infobox from "./Infobox.jsx"
import InfoboxToMap from "./InfoboxToMap.jsx"
import backgroundVideo from "../video/WasteStartseiteSchnelleCod.mp4"

const HomePage =()=> {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar/>
      <div className="jumbotron-div">
        <video id="vid" loop autoPlay muted playsInline className="videoLoaded" key="backgroundVideo">
          <source className="videoMp4" src={backgroundVideo} type="video/mp4" />
        </video>   
        <InView as="div" threshold={0.9} onChange={(inView, entry) => {dispatch(setScrollTop(inView))}}>
          <Jumbo />
        </InView>
      </div>
      <Infobox/>
      <StoryMap/>
      <Plot1/>
      <Plot2/>
      <Plot3/>
      <InfoboxToMap/>

    </>
    );
};

export default HomePage;