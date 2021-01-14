import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import background from "../img/pexels-lisa-fotios-1933386.jpg"
//import bgimage from "../../src/img/pexels-lisa-fotios-1933386.jpg";
import bgimage from "../../src/img/pexels-emmet-128421.jpg";
import { HashLink } from 'react-router-hash-link';

const Container = () => {
  
  return (

    
    <Jumbotron
    className="jumbotron-container" style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      marginBottom: "0px"      
    }}
  >
    <div className="background">
    <div className="transbox">
        <h1> Hello Münster!</h1> <br/>
        {/*<p>
        Let's be more together.<br/>
        Let's be sustainable, environmentally conscious, clean and social.<br/>
        Let's become a better Münster together!
        </p>*/}
        <p>
          Waste is a recurring topic in the public discussion. It is often forgotten otherwise. 
          <br/>
          <br/>
          <br/>
          But what is the actual situation, in Europe, in Germany and in NRW?
          <br/>
          <Button variant="secondary"><HashLink smooth to="/#test">Explore Map Data</HashLink></Button>
          <br/>
          <br/>
          How much and what do we throw away each year?
          <br/>
          <Button variant="secondary"><HashLink smooth to="/#test">Explore Münster Waste Data</HashLink></Button>
          <br/>
          <br/>
          And how can we do better?
          <br/>
          <Button variant="secondary"><HashLink smooth to="/map">Recycle Map Münster</HashLink></Button>
        </p>
        <br/>
        {/*}
        <p > 
          How much do we actually throw away? <br/>
          <Button variant="secondary"><HashLink smooth to="/#test">Show me the facts</HashLink></Button>
        </p>
        <br/>
        <p> 
          Where can I shop without wasting plastic? <br/>
          <Button variant="secondary"><HashLink smooth to="/#test">Show me my possibilities</HashLink></Button>
        </p>
        <br/>
        <p>
          Where can I recycle near me? <br/>
          <Button variant="secondary"><HashLink smooth to="/map">Show me the map with awesome locations.</HashLink></Button>
      </p>*/}
        </div>
    </div>
      </Jumbotron>

    

  );
};

export default Container;
