import React, { useRef } from "react";
import Plot from "react-plotly.js";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";

const ExportThis = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const plotRef = useRef(null);

  return (
    <Container
      fluid
      id='plot-container-1'
      className={isTabletOrMobile ? "mobile" : ""}>
      <Row>
        <InView triggerOnce={true} threshold={0.7}>
          {({ inView, ref, entry }) => (
            <>
              <Col
                xs={{ span: 12, order: 2 }}
                md={{ span: 6, order: 2 }}
                className={
                  isTabletOrMobile
                    ? inView
                      ? "plot-col-mobile-right come-in"
                      : "plot-col-mobile-right"
                    : inView
                    ? "plot-col-right come-in"
                    : "plot-col-right"
                }>
                <div className='vertical-center-plot'>
                  <Plot
                    data={[
                      {
                        type: "scatter",
                        x: [
                          2006,
                          2007,
                          2008,
                          2009,
                          2010,
                          2011,
                          2012,
                          2013,
                          2014,
                          2015,
                          2016,
                          2017,
                          2018,
                          2019,
                        ],
                        y: [
                          178,
                          180,
                          177,
                          172,
                          173,
                          170,
                          161,
                          159,
                          195,
                          160,
                          165,
                          162,
                          161,
                          162,
                        ],
                        name: "General waste per citizen",
                      },
                      {
                        x: [
                          2006,
                          2007,
                          2008,
                          2009,
                          2010,
                          2011,
                          2012,
                          2013,
                          2014,
                          2015,
                          2016,
                          2017,
                          2018,
                          2019,
                        ],
                        y: [
                          298,
                          305,
                          301,
                          303,
                          295,
                          289,
                          277,
                          272,
                          284,
                          266,
                          270,
                          266,
                          260,
                          255,
                        ],
                        name: "Recycable waste per citizen",
                      },
                    ]}
                    ref={plotRef}
                    useResizeHandler
                    style={{ width: "100%", height: "100%" }}
                    layout={{
                      autosize: true,
                      title: {
                        text: "Waste in Münster over the years",
                        font: {
                          size: 20,
                        },
                      },
                      xaxis: {
                        title: "Year",
                        showgrid: false,
                        zeroline: false,
                      },
                      yaxis: {
                        title: "Waste in kilograms",
                        showline: true,
                      },
                      legend: {
                        x: 1,
                        xanchor: "right",
                        y: 0.5,
                      },
                    }}
                  />
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 1 }}
                ref={ref}
                md={{ span: 6, order: 1 }}
                className={isTabletOrMobile ? "text-col-mobile" : "text-col"}>
                <div className='vertical-center'>
                  <p>
                    Even after flooring the numbers,{" "}
                    <b>400 kilograms of waste per inhabitant and year </b>
                    is produced in Münster. As we can observe, recycable
                    materials bring about 100 kilograms more to the sum than not
                    reusable trash, a kind of waste that is ultimately burned
                    after several sorting procedures.
                    <br></br>
                    In 2014, a peak can be observed. It is likely due to the
                    heavy rain events taking place in the summer of that year,
                    supposedly leading to a lot of flood damage.
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
