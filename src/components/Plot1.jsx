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
            The following plot portrays the amount of waste generated in kg by each inhabitant per year. 
            The displayed plot shows two main categories that includes the general waste and recyclable 
            waste materials. It is observed from the trend of the graph that the general waste 
            generated per inhabitant per year had a significant decrease over the years which is 
            fairly similar to that of the trend line of waste generation from recyclable materials. 
            Both the observations have a parallel trend. They also show a peak in 2014, the year of
            the big rain events and following floods.
          </p>
          </Col>
          <Col>
          <Plot
      data={[
        {
          type: 'scatter', 
          x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
          y: [178, 180, 177, 172, 173, 170, 161, 159, 195, 160, 165, 162, 161, 162],
          name: "General waste per citizen"
        },
        {         
          x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
          y: [298, 305, 301, 303, 295, 289, 277, 272, 284, 266, 270, 266, 260, 255],
          name: "Recycable waste per citizen"
        }
     ]}
     layout={{width: 900, height: 400, title: 'Waste in Münster over the years',
     xaxis: {
      title: 'Year',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Waste in kilograms',
      showline: true
    }
    }}
      />
          </Col>
          </Row>
          </Container>

    </div>

  );
};

export default ExportThis;
