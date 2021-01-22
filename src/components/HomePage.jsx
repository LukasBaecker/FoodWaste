import React from "react";
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"
import Plot1 from "./Plot1.jsx"
import Plot2 from "./Plot2.jsx"
import Plot3 from "./Plot3.jsx"
import StoryMap from "./StoryMap.jsx"
const HomePage =()=> {


  return (
    <>
      <Jumbo />
      <div id="test">
        <Infobox/>
      </div>
      <StoryMap/>
      <Plot1/>
      <Plot2/>
      <Plot3/>

    </>
    );
};

export default HomePage;