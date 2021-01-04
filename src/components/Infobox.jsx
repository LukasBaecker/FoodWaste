import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";


const Container = () => {
  
  return (

    <div className="infoContainer"       
      style={{
        backgroundColor: '#223344'
    }}>
        <h1>Hello, world! Infobox 1 </h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
    </div>

  );
};

export default Container;
