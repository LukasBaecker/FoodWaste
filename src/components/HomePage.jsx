import React from "react";
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"
import Plots from "./Plots.jsx"

const Home = () => {
  
  return (
    <>
      <Jumbo />
      <div id="test">
        <Infobox/>
      </div>
      <Plots />
    </>
  );
};

export default Home;