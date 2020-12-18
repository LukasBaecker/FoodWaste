import React, { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../img/favicon.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FAQ from "./info/FAQ.jsx";
import HowTo from "./info/HowTo.jsx";

function navigation() {
  //const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showFAQ, setShowFAQ] = useState(false);
  const handleCloseFAQ = () => setShowFAQ(false);
  const handleShowFAQ = () => setShowFAQ(true);

  //useEffect(() => {
  //}, []);

  let logginbuttons;
  let navElements;

  const buttonLabel = () => {
      return <>{"select a project"}</>;
    }


    navElements = (
      <NavDropdown title="Admin tools" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Button
            className="buttonheader"
            variant="outline-primary"
            onClick={() => {
              console.log("something");
            }}
          >
            console.log
          </Button>
        </NavDropdown.Item>
        <NavDropdown.Item>
          {" "}
          <Button
            className="buttonheader"
            variant={"primary"}
            onClick={() => {
              console.log("somethinge else")
            }}
          >
            console.log else
          </Button>
        </NavDropdown.Item>
      </NavDropdown>
    );
    logginbuttons = (
      <>
        <NavDropdown title="Admin tools" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Button
            className="buttonheader"
            variant="outline-primary"
            onClick={() => {
              console.log("something");
            }}
          >
            console.log
          </Button>
        </NavDropdown.Item>
        <NavDropdown.Item>
          {" "}
          <Button
            className="buttonheader"
            variant={"primary"}
            onClick={() => {
              console.log("somethinge else")
            }}
          >
            console.log else
          </Button>
        </NavDropdown.Item>
      </NavDropdown>
      </>
    );
  
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        bg="dark"
        variant="dark"
        id="navbar"
        expand="xl"
      >
        <Navbar.Brand href="/" id="logo-div">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navigation-collapse">
          <Nav className="mr-auto">
            <Nav.Link href="/">Start</Nav.Link>
            <Nav.Link onClick={handleShow}>Info</Nav.Link>
            <Nav.Link onClick={handleShowFAQ}>FAQ</Nav.Link>
            {navElements}
          </Nav>
          {logginbuttons}
        </Navbar.Collapse>
      </Navbar>

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
