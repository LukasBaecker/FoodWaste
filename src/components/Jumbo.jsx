import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import bgimage from "../img/pexels-emmet-128421.jpg";
import { HashLink } from 'react-router-hash-link';
import {Container, Row, Col} from 'react-bootstrap';

const JumboContainer = () => {

return (


  <Container fluid className="jumbotron-content">
    <Row>
      <Col xs={12} md={12}  >
        <div className="vertical-center">
          <h1 style={{"font-size": "2.5rem"}}>Waste is a recurring topic in the public discussion.</h1><br/> 
          <p style={{'fontSize':'1.5rem'}}>It is often forgotten otherwise.</p>
        </div>
      </Col>
    </Row>
  </Container>

);
};

export default JumboContainer;
/*
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
</div>*/