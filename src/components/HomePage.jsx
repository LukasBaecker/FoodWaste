import React from "react";
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"

const Home = () => {
  
  return (
    <>
      <Jumbo />
      <div id="test">
        <Infobox/>
      </div>
      <Infobox />
    </>
  );
};

export default Home;