import React, { useState, useRef } from "react";
import Plot from "react-plotly.js";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";

const ExportThis = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [fullWidth, setFullWidth] = useState(true);

  const plotRef = useRef(null);
  const toggleWidth = () => {
    setFullWidth(
      (state) => !state,
      () => plotRef.current.resizeHandler()
    );
  };

  return (
    <Container
      fluid
      id='plot-container-3'
      className={isTabletOrMobile ? "mobile" : ""}>
      <Row>
        <InView triggerOnce={true} threshold={0.7}>
          {({ inView, ref, entry }) => (
            <>
              <Col
                xs={12}
                ref={ref}
                md={6}
                className={isTabletOrMobile ? "text-col-mobile" : "text-col"}>
                <div className='vertical-center'>
                  <p>
                    Lastly, we observe the development of specific kinds of
                    waste over the years (2013 to 2017). This plot is dominated
                    by paper and plastic packaging. To get a closer look at the
                    categories close to the x-axis, you can just{" "}
                    <b>drag a rectangle on the canvas to zoom in</b>.
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                md={6}
                className={
                  isTabletOrMobile
                    ? inView
                      ? "plot-col-mobile-right come-in"
                      : "plot-col-mobile-right "
                    : inView
                    ? "plot-col-right come-in"
                    : "plot-col-right"
                }>
                <div className='vertical-center-plot'>
                  <Plot
                    data={[
                      {
                        type: "scatter",
                        x: [2013, 2014, 2015, 2016, 2017],
                        y: [59.4, 56.3, 62, 56, 65.1],
                        name: "wood packaging",
                      },
                      {
                        x: [2013, 2014, 2015, 2016, 2017],
                        y: [7114.2, 7043.1, 7498, 7534.6, 7524.8],
                        name: "glass packaging",
                      },
                      {
                        x: [2015, 2016, 2017],
                        y: [9570.5, 9715.2, 9935.7],
                        name: "plastic packaging",
                      },
                      {
                        x: [2013, 2014, 2015, 2016, 2017],
                        y: [5995, 14213.2, 6876.1, 7004.5, 7061],
                        name: "bulky waste",
                      },
                      {
                        x: [2013, 2014, 2015, 2016, 2017],
                        y: [24947.9, 26272.7, 24654.6, 24510.4, 24032],
                        name: "paper and carton",
                      },
                      {
                        x: [2013, 2014, 2015, 2016, 2017],
                        y: [231, 207.9, 157.1, 257.1, 269.2],
                        name: "synthetics",
                      },
                      {
                        x: [2017],
                        y: [1309.2],
                        name: "clothing",
                      },
                    ]}
                    ref={plotRef}
                    useResizeHandler
                    style={{ width: "100%", height: "100%" }}
                    layout={{
                      autosize: true,
                      title: {
                        text: "Waste Amount Development",
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
                        title: "Waste in tonnes",
                        showline: true,
                      },
                      showlegend: false,
                      legend: {
                        orientation: "h",
                      },
                    }}
                  />
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
