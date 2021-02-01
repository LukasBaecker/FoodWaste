import React from "react";
import Jumbo from "./Jumbo.jsx";
import Plot1 from "./Plot1.jsx";
import Plot2 from "./Plot2.jsx";
import Plot3 from "./Plot3.jsx";
import Navbar from "./Navbar.jsx";
import { useDispatch } from "react-redux";
import { setScrollTop } from "../actions";
import { InView } from "react-intersection-observer";
import InfoboxFirst from "./InfoboxFirst.jsx";
import InfoboxSecond from "./InfoboxSecond.jsx";
import InfoboxToMap from "./InfoboxToMap.jsx";
import backgroundVideo from "../video/WasteStartseiteSchnelleCod.mp4";
import HHWEurope from "./HHWEurope.jsx";
const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className='jumbotron-div'>
        <video
          id='vid'
          loop
          autoPlay
          muted
          playsInline
          className='videoLoaded'
          key='backgroundVideo'>
          <source className='videoMp4' src={backgroundVideo} type='video/mp4' />
        </video>
        <InView
          as='div'
          threshold={0.9}
          onChange={(inView, entry) => {
            dispatch(setScrollTop(inView));
          }}>
          <Jumbo />
        </InView>
      </div>
      <InfoboxFirst />
      <InfoboxSecond />
      <HHWEurope />
      <Plot1 />
      <Plot2 />
      <Plot3 />
      <InfoboxToMap />
    </>
  );
};

export default HomePage;
