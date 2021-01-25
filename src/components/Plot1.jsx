import React, { useState, useRef } from "react";
import Plot from 'react-plotly.js';
import {Container, Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
 

const ExportThis = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [fullWidth, setFullWidth] = useState(true);

  const plotRef = useRef(null);
  const toggleWidth = () => {
    setFullWidth(state => !state, () => plotRef.current.resizeHandler());
  };

  return (

  

     <Container fluid>
        <Row>
          <Col xs={12} md={6} className={isTabletOrMobile ? "plot-col-mobile text-col" : "plot-col text-col"} >
          <div className="vertical-center">
          <p>
              Let's have a look at some waste numbers from Münster. Here, the waste produced 
              by an average citizen is depicted for the last 13 years. Even after flooring the numbers, 
              they add up to <b>400 kilograms of waste per inhabitant and year</b>. As we can observe, recycable materials 
              outweigh the not reusable trash by about 100 kilograms. The promising downwards trend
              is however missing for the general waste, a kind of waste that is burned after several sorting
              procedures.
              <br></br>
              In 2014, a peak can be observed. It is likely due to the heavy rain events taking place
              in the summer of that year, supposedly leading to a lot of flood damage.
          </p>
          </div>
          </Col>
          <Col xs={12} md={6} className={isTabletOrMobile ? "plot-col-mobile" : "plot-col"} >
          <div className="vertical-center-plot"> 
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
     ref={plotRef}
     useResizeHandler
    style={{ width: "100%", height: "100%" }}
    layout={{
              autosize: true
            ,  title: 'Waste in Münster over the years',
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
      </div>
          </Col>
          </Row>
          </Container>


);
};

export default ExportThis;