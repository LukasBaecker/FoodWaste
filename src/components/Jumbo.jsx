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

    <div className="transbox">
        <h1> Hello Münster!</h1> <br/>
      <div>
        <h1 style={{fontSize: 30, fontWeight:'bold', fontFamily:'Arial', float:'center', color:'black'}}> Hello Münster!</h1><br/>
        <p style={{fontSize: 25, fontFamily:'Arial', float:'center', color:'black'}}>
        Let's be more together.<br/>
        Let's be sustainable, environmentally conscious, clean and social.<br/>
        Let's become a better Münster together!
        </p> <br/>
        <p style={{fontSize: 25, fontFamily:'Arial', float:'center', color:'black'}}> 
          How much do we actually throw away? <br/>{/*Story*/}
          <button className='button button1'>Show me the facts</button>
        </p> <br/>
        <p style={{fontSize: 25, fontFamily:'Arial', float:'center', color:'black'}}> 
          Where can I shop without wasting plastic? <br/>{/*Map Unverpackt läden*/}
          <button className='button button1'>Show me my possibilities</button>
        </p> <br/>
        <p style={{fontSize: 25, fontFamily:'Arial', float:'center', color:'black'}}>
          Where can I recycle near me? <br/> {/*Map with containers*/}
          <button className='button button1'>Show me the map</button>
        </p>
        <br/>
        <p > 
          How much do we actually throw away? <br/>
          <HashLink smooth to="/#test"><Button variant="primary">Show me the facts</Button></HashLink>
        </p>
        <br/>
        <p> 
          Where can I shop without wasting plastic? <br/>
          <HashLink smooth to="/#test"><Button variant="primary">Show me my possibilities</Button></HashLink>
        </p>
        <br/>
        <p>
          Where can I recycle near me? <br/>
          <HashLink smooth to="/map"><Button variant="primary">Show me the map with awesome locations.</Button></HashLink>
        </p>
        </div>
        </div>
        
      </Jumbotron>

    

  );
};

export default Container;
