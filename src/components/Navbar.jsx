import React, { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/recyclingPoints.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import FAQ from "./info/FAQ.jsx";
import HowTo from "./info/HowTo.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

function navigation() {
  const dispatch = useDispatch();
  const scrollTop = useSelector((state) => state.scrollTop.scrollTop);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showFAQ, setShowFAQ] = useState(false);
  const handleCloseFAQ = () => setShowFAQ(false);
  const handleShowFAQ = () => setShowFAQ(true);


  let upperRightItems = (
      <>
        <Nav.Link onClick={handleShow}>
          <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '1em' }}/>
        </Nav.Link>
      </>
    );
  
  const renderAtPosition = (scrollTop)=>{
    if(scrollTop < 80||scrollTop==null){
      return (
        <Navbar
        collapseOnSelect
        fixed="top"
        className="transparentNav"
        style={{"backgroundColor": "rgba(255, 255, 255, 0)"}}
        id="navbar"
        expand="xl"
      >
        <Navbar.Brand href="/" id="logo-div">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navigation-collapse">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#test"> Story</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link onClick={handleShowFAQ}>FAQ</Nav.Link>
          </Nav>
          {upperRightItems}
        </Navbar.Collapse>
      </Navbar>
      )
    }
    else{
      return(
      <Navbar
        collapseOnSelect
        fixed="top"
        id="navbar"
        bg="dark"
        variant="dark"
        expand="xl"
      >
        <Navbar.Brand href="/" id="logo-div">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navigation-collapse">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#test"> Story</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link onClick={handleShowFAQ}>FAQ</Nav.Link>
          </Nav>
          {upperRightItems}
        </Navbar.Collapse>
      </Navbar>
      )
    }
  }

  return (
    <>
      {renderAtPosition(scrollTop)}
      <Modal
        show={show}
        size="xl"
        onHide={handleClose}
        className="fancymodal"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HowTo />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Thanks and close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showFAQ}
        size="xl"
        onHide={handleCloseFAQ}
        className="fancymodal"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>FAQs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <FAQ />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseFAQ}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default navigation;
