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
          <h1 style={{"fontSize": "2.5rem"}}>Waste is a recurring topic in the public discussion.</h1><br/> 
          <p style={{'fontSize':'1.5rem'}}>It is often forgotten otherwise.</p>
        </div>
      </Col>
    </Row>
  </Container>

);
};

export default JumboContainer;
