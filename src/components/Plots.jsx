import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Plot from 'react-plotly.js';
import "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap';

const Example = () => {
    return (
      <>
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
        <Row>
          <Col>
          <p>Here goes the desc.</p>
          </Col>
          <Col>
          <Plot
      data={[
        {
          type: 'scatter', 
          x: [2013, 2014, 2015, 2016, 2017],
          y: [59.4, 56.3, 62, 56, 65.10],         
          name: "wood packaging"
        },
        {         
          x: [2013, 2014, 2015, 2016, 2017],
          y: [7114.2, 7043.1, 7498, 7534.6, 7524.80],
          name: "glass packaging"
        },
        {
          x: [2015, 2016, 2017],
          y: [9570.5, 9715.2, 9935.7],
          name: "plastic packaging"
        },
        {
          x: [2013, 2014, 2015, 2016, 2017],
          y: [5995, 14213.2, 6876.1, 7004.5, 7061],
          name: "bulky waste"
        },
        {
          x: [2013, 2014, 2015, 2016, 2017],
          y: [24947.9, 26272.7, 24654.6, 24510.4, 24032],
          name: "paper and carton"
        },
        {
          x: [2013, 2014, 2015, 2016, 2017],
          y: [231, 207.9, 157.1, 257.1, 269.2],
          name: "synthetics"
        },
        {
          x: [2017],
          y: [1309.2],
          name: "clothing"
        }

     ]}
     layout={{width: 700, height: 700, title: 'Waste Amount Development', 
     xaxis: {
      title: 'Year',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Waste in tonnes',
      showline: true
    },
    showlegend: false}}
      />
          </Col>
        </Row>
      </Container>
      </>
      );
};

export default Example;