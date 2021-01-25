import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "../../img/recyclingPoints.png";
import { useDispatch, useSelector } from "react-redux";
import FAQ from "../info/FAQ.jsx";
import HowTo from "../info/HowTo.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

function navigation(fixed) {
  const [scrollTop, setScrollTop] = useState(fixed ? false : true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showFAQ, setShowFAQ] = useState(false);
  const handleCloseFAQ = () => setShowFAQ(false);
  const handleShowFAQ = () => setShowFAQ(true);

  const handleScroll = (event) => {
    if (window.scrollY > 50){
      setScrollTop(false)
    }
    else{
      if(!fixed){
        setScrollTop(true)
      }
      else{
        setScrollTop(false)
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // cleanup this component
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    

  let upperRightItems = (
      <>
        <Nav.Link onClick={handleShow}>
          <FontAwesomeIcon icon={faQuestionCircle} style={{ "fontSize": '1em' }}/>
        </Nav.Link>
      </>
    );
  
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        id="navbar"
        className={scrollTop ? "transparentNav" : "darkNav"}
        bg={scrollTop ? "":"dark"}
        variant={scrollTop ? "":"dark"}
        style={scrollTop ? {"backgroundColor": "rgba(255, 255, 255, 0)"}: {}}
        expand="xl"
      >
        <Navbar.Brand href="/" className={scrollTop ? "logoDivHuge": "logoDivSmall"}>
          <img src={logo} alt="Logo" className={scrollTop ? "logoHuge": "logoSmall"}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navigation-collapse">
          <Nav className="mr-auto">
            <Nav.Link href="/FoodWaste">Home</Nav.Link>
            <Nav.Link href="/FoodWaste#test"> Story</Nav.Link>
            <Nav.Link href="/FoodWaste/#map">Map</Nav.Link>
            <Nav.Link onClick={handleShowFAQ}>FAQ</Nav.Link>
          </Nav>
          {upperRightItems}
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
