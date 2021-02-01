import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { InView } from "react-intersection-observer";
import picture from "../img/pexels-anna-shvets-3746330_sliced.jpg";

const ExportThis = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Container fluid>
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
                      ? "image-stack-bottom mobile primary-cite"
                      : "image-stack-bottom first"
                  }>
                  <h1 style={{ textAlign: "left", fontSize: "2rem" }}>
                    "This is not about doing more. It's about doing the right
                    things."
                  </h1>
                  <p style={{ textAlign: "justify" }}>
                    Waste and pollution poses a global threat to various
                    ecosystems and communities. But what part does each and
                    everyone of us take in that threat? We can not know, except
                    we get ourselves educated.
                  </p>
                </div>
                <div
                  className={
                    isTabletOrMobile
                      ? "image-stack-top mobile"
                      : "image-stack-top first"
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
