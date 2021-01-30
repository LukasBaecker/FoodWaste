import React, { useState, useRef } from "react";
import Plot from 'react-plotly.js';
import {Container, Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import { InView } from 'react-intersection-observer';

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
        <InView triggerOnce={true} threshold={0}>
        {({ inView, ref, entry }) => (
          <Col xs={12} ref={ref} md={6} className={isTabletOrMobile ? "grid-col-white-mobile" : "grid-col-white"} >
          <div className="vertical-center">
          <h1 style={{"textAlign": "center"}}>This is not about doing more. It's about doing the right things.</h1>
          </div>
          </Col>
          )}
          </InView>
        <InView triggerOnce={true} threshold={0}>
         {({ inView, ref, entry }) => (
          <Col xs={12} ref={ref} md={6} className={isTabletOrMobile ? (inView ? "grid-col-prime-mobile come-in" : "grid-col-prime-mobile"): (inView ? "grid-col-prime come-in" : "grid-col-prime")} >
          <div className="vertical-center"> 
          <p>
          Waste and pollution poses a global threat to various ecosystems and communities. 
          But what part does each and everyone of us take in that threat? 
          We can not know, except we get ourselves educated.
        </p>
      </div>
          </Col>
                    )}
          </InView>
          </Row>

          <Row>
          <InView triggerOnce={true} threshold={1}>
          {({ inView, ref, entry }) => (
            <>
          <Col ref={ref} xs={{span:12, order: 2}} md={{span:6, order: 1}} className={isTabletOrMobile ? (inView ? "grid-col-prime-mobile come-in-left" : "grid-col-prime-mobile"): (inView ? "grid-col-prime come-in-left" : "grid-col-prime")} >
          <div className="vertical-center">
          <p>
            How much is thrown away, each day, on a continent like Europe? In a country like Germany? 
          In a city like Münster? What do we throw away? Questions that can be answered just by looking 
          at some data.
            </p>
          </div>
          </Col>
          <Col ref={ref} xs={{span:12, order: 1}} md={{span:6, order: 2}} className={isTabletOrMobile ? "grid-col-white": "grid-col-white"} >
            <div className="vertical-center">
            <h1 style={{"textAlign": "center"}}>Reducing waste starts with learning about waste.</h1>
            </div>
          </Col>
          </>
          )}
          </InView>
          </Row>

          </Container>


);
};

export default ExportThis;