import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import background from "../img/pexels-lisa-fotios-1933386.jpg"
//import bgimage from "../../src/img/pexels-lisa-fotios-1933386.jpg";
import bgimage from "../../src/img/pexels-emmet-128421.jpg";

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
        <h1> Hallo Münster!</h1> <br/>
        <p>
          Lasst uns zusammen mehr sein. <br/>
          Lasst uns nachhaltig, umweltbewusst, sauber und sozial sein. <br/>
          Lasst uns zusammen ein besseres Münster werden!
        </p>
        <br/>
        <p > 
          Wie viel schmeißen wir eigentlich weg? <br/>
          <Button variant="primary">Zeig mir die Fakten</Button>
        </p>
        <br/>
        <p> 
          Wo kann ich einkaufen, ohne Plastik zu verschwenden? <br/>
          <Button variant="primary">Zeig mir meine Möglichkeiten</Button>
        </p>
        <br/>
        <p>
          Wo kann ich in meiner Nähe recyceln? <br/>
          <Button variant="primary">Zeig mir die Karte</Button>
        </p>
      </Jumbotron>

    

  );
};

export default Container;
