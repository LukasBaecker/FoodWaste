import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Plot from 'react-plotly.js';
import "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap';

const ExportThis = () => {
  
  return (

    <div className="infoContainer"       
      style={{
        backgroundColor: '#223344'
    }}>
     <Container fluid>
          <Row>
          <Col>
          <p>
          The pie-chart describes the types of wastes generated from private households 
          with a percentage of values representing each category of waste in tonnes. 
          Types of waste materials such as household waste without recyclables (general waste) 
          quantifies the maximum, comprising 38.8% among the total waste generated. 
          Subsequently paper waste accounts for about 21.6%, followed by biodegredable 
          waste constituting 15.8% from the total waste. Other waste products include 
          materials like packaging waste, glass, wood and electronics that covers 
          about 10%, 8%, 4% and 2% respectively. 
          </p>
          </Col>
          <Col>
          <Plot
      data={[
        {
         type: 'pie',
         values: [37710, 20999, 15357, 9719, 7435, 3961, 2006],
         labels: ["general waste without recycable",	"paper",	"biodegredable",	"packaging",	"glass",	"wood", "electronics"],
         textinfo: 'label+percent',
         domain: {column: 0},
        }
     ]}
     layout={{width: 700, height: 700, title: 'Waste of Private Households', showlegend: false}}
      />
          </Col>
        </Row>
          </Container>

    </div>

  );
};

export default ExportThis;
