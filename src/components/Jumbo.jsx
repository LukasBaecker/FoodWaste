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
import { BreakpointProvider } from 'react-socks';

const Container = () => {

return (
<BreakpointProvider small>

<Jumbotron className="jumbotron-container" style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      marginBottom: "0px"      
    }}>

  <div className='container'>
    <div className='row'>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'3vw'}}>Waste is a recurring topic in the public discussion.</h1><br/> 
        <p style={{fontSize:'2vw'}}>It is often forgotten otherwise.</p>
      </div>
    </div>


    <div className='container' style={{marginTop:'200px'}}>
      <div className='row'>
        <div className='column'>
          <HashLink smooth to="/#test"><Button variant="primary" size="lg" block>Story</Button></HashLink>
        </div>
        <div className="column">
          <HashLink smooth to="/map"><Button variant="primary" size="lg" block>Map</Button></HashLink>
        </div>
        <div className="column">
          <HashLink smooth to="/#test"><Button variant="primary" size="lg" block>Story Map</Button></HashLink>
        </div>
      </div>
    </div>
  </div>

</Jumbotron>

</BreakpointProvider>

);
};

export default Container;