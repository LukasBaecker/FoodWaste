import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import bgimage from "../img/pexels-emmet-128421.jpg";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col } from "react-bootstrap";

const JumboContainer = () => {
  return (
    <Container fluid className='jumbotron-content'>
      <Row>
        <Col xs={12} md={12}>
          <div className='vertical-center' id='jumbo-text'>
            <h1 style={{ fontSize: "2.5rem" }}>
              How can we act <span className='underline-span'>responsibly</span>
              , if we don't know the{" "}
              <span className='underline-span'>data</span>?
            </h1>
            <br />
            <p style={{ fontSize: "1.5rem" }}>
              Reducing waste isn't hard - once you know how.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JumboContainer;
