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

    
    <Jumbotron className="jumbotron-container" style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      marginBottom: "0px"      
    }}>

        <h1> Waste is a recurring topic in the public discussion.<br/> It is often forgotten otherwise.</h1> <br/>
    <div className="column">
         <HashLink smooth to="/#test"><Button variant="primary">Show me the facts</Button></HashLink>
        
        </div>
        <div className="column">
         <HashLink smooth to="/#test"><Button variant="primary">Show me the facts</Button></HashLink> 
        </div>
        <div className="column">
         <HashLink smooth to="/#test"><Button variant="primary">Show me the facts</Button></HashLink>        
        </div>
        
      </Jumbotron>

    

  );
};

export default Container;
