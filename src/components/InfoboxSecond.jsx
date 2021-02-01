import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";
import picture from "../img/pexels-anna-shvets-3962288.jpg";
import background_image from "../img/pexels-anna-shvets-4587828.jpg";

const ExportThis = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Container fluid style={{ backgroundImage: background_image }}>
      <Row className='info-container'>
        <InView triggerOnce={true} threshold={0}>
          {({ inView, ref, entry }) => (
            <>
              <Col
                xs={{ span: 12, order: 1 }}
                ref={ref}
                md={{ span: 12, order: 1 }}>
                <div
                  className={
                    isTabletOrMobile
                      ? "image-stack-bottom mobile secondary-cite"
                      : "image-stack-bottom second"
                  }>
                  <h1 style={{ textAlign: "left", fontSize: "2rem" }}>
                    "Reducing waste starts with learning about waste."
                  </h1>
                  <p style={{ textAlign: "justify" }}>
                    How much is thrown away, each day, on a continent like
                    Europe? In a country like Germany? In a city like Münster?
                    What do we throw away? Questions that can be answered just
                    by looking at some data.
                  </p>
                </div>
                <div
                  className={
                    isTabletOrMobile
                      ? "image-stack-top mobile"
                      : "image-stack-top second"
                  }>
                  <img src={picture} alt='' className='story-img' />
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
