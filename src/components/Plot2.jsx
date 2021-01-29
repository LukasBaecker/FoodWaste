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
// className="container-fluid" className="d-flex align-items-center" 
      
       <Container fluid>
        <Row>
          <InView triggerOnce={true} threshold={1}>
          {({ inView, ref, entry }) => (
            <>
          <Col ref={ref} xs={{span:12, order: 2}} md={{span:6, order: 1}} className={isTabletOrMobile ? (inView ? "plot-col-mobile come-in-left" : "plot-col-mobile"): (inView ? "plot-col come-in-left" : "plot-col")} >
          <div className="vertical-center-plot">
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
              style={{width: "100%", height: "100%" }}
              ref={plotRef}
              useResizeHandler
              layout={{
                        autosize: true, 
                        title: {
                          text: 'Waste of Private Households, <br>in percent and tonnes',
                          font: {
                            size: 20
                          }}, 
                        showlegend: false}}
                />
          </div>
          </Col>
          <Col ref={ref} xs={{span:12, order: 1}} md={{span:6, order: 2}} className={isTabletOrMobile ? "text-col-mobile": "text-col"} >
            <div className="vertical-center">
              <p>
                If we take a closer look at what exactly is thrown away (2019), we again observe a large amount
                of non reusable substances. The next contributors are, in that order, paper, biodegredable waste and
                packaging (also known as "yellow trash bag" or "yellow can"). <b>You can interact with the plot to
                get to know the absolute amounts of waste</b>. How many tonnes of electronics were thrown away
                in Münster in 2019?
              </p>
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
