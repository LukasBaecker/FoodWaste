import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import picture from "../img/pexels-anna-shvets-3746333.jpg";
import iconBook from "../img/book.png";
import iconExchange from "../img/exchange.png";
import iconBin from "../img/bin.png";
import iconFood from "../img/food.png";
import iconMoney from "../img/money.png";
import iconRepair from "../img/repair.png";
import iconTrash from "../img/trash.png";
const icons = [
  iconBook,
  iconExchange,
  iconBin,
  iconFood,
  iconMoney,
  iconRepair,
  iconTrash,
];
const ContainerToMap = () => {
  const pointsNumber = useSelector((state) => state.pointNumber);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref, entry }) => (
          <>
            <Container ref={ref} fluid className='infoContainer-dark'>
              <Row style={{ height: "100%" }}>
                <Col xs={12} md={12}>
                  <div
                    className={
                      isTabletOrMobile ? "toMap-text mobile" : "toMap-text"
                    }>
                    <h1 style={{ fontSize: "2rem" }}>
                      A global problem, calling for local solutions
                    </h1>
                  </div>
                  <div
                    className={
                      isTabletOrMobile ? "toMap-image mobile" : "toMap-image"
                    }>
                    <img
                      src={picture}
                      alt=''
                      className={
                        isTabletOrMobile ? "toMap-img mobile" : "toMap-img"
                      }
                    />
                  </div>
                </Col>
                <Col
                  xs={12}
                  lg={{ span: 8, offset: 4 }}
                  md={{ span: 7, offset: 5 }}
                  className={
                    isTabletOrMobile ? "textMessage mobile" : "textMessage"
                  }>
                  <div>
                    <p>
                      "Each and everyone of us is represented in the numbers
                      shown above. We all take our part. That also means that
                      none other than ourselves can work to reduce our share."
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </InView>
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref, entry }) => (
          <Container fluid>
            <Row>
              {isTabletOrMobile ? (
                <>
                  <Col xs={12} md={4}>
                    {" "}
                    <div
                      ref={ref}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }
                      id='bubblePointCounter'>
                      <FontAwesomeIcon
                        icon={faSearchLocation}
                        style={{ fontSize: "40px" }}
                      />
                      <br />
                      {inView ? (
                        <CountUp start={0} end={pointsNumber} delay={1} />
                      ) : (
                        0
                      )}
                      <p style={{ fontSize: "1.5rem" }}>points</p>
                    </div>
                    <div
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }
                      id='bubbleShow'>
                      <h1 style={{ fontSize: "2.5rem" }}>Show me how!</h1>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={1}></Col>
                  <Col md={1}>
                    {" "}
                    <div
                      key={"bubble0"}
                      id={"bubble0"}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }>
                      <img
                        src={icons[0]}
                        alt='an icon from our map'
                        className='bubble-img'
                      />
                    </div>
                  </Col>
                  <Col md={1}>
                    <div
                      key={"bubble1"}
                      id={"bubble1"}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }>
                      <img
                        src={icons[1]}
                        alt='an icon from our map'
                        className='bubble-img'
                      />
                    </div>
                  </Col>
                  <Col md={1}>
                    {" "}
                    <div
                      key={"bubble2"}
                      id={"bubble2"}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }>
                      <img
                        src={icons[2]}
                        alt='an icon from our map'
                        className='bubble-img'
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    {" "}
                    <div
                      ref={ref}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }
                      id='bubblePointCounter'>
                      <FontAwesomeIcon
                        icon={faSearchLocation}
                        style={{ fontSize: "40px" }}
                      />
                      <br />
                      {inView ? (
                        <CountUp start={0} end={pointsNumber} delay={1} />
                      ) : (
                        0
                      )}
                      <p style={{ fontSize: "1.5rem" }}>points</p>
                    </div>
                    <div
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }
                      id='bubbleShow'>
                      <h1 style={{ fontSize: "2.5rem" }}>Show me how!</h1>
                    </div>
                  </Col>
                  <Col className='hidden-xs' xs={0} md={1}>
                    <div
                      key={"bubble3"}
                      id={"bubble3"}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }>
                      <img
                        src={icons[3]}
                        alt='an icon from our map'
                        className='bubble-img'
                      />
                    </div>
                  </Col>
                  <Col md={1}>
                    <div
                      key={"bubble4"}
                      id={"bubble4"}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }>
                      <img
                        src={icons[4]}
                        alt='an icon from our map'
                        className='bubble-img'
                      />
                    </div>
                  </Col>
                  <Col md={1}>
                    {" "}
                    <div
                      key={"bubble5"}
                      id={"bubble5"}
                      className={
                        isTabletOrMobile ? "iconsBubble mobile" : "iconsBubble"
                      }>
                      <img
                        src={icons[5]}
                        alt='an icon from our map'
                        className='bubble-img'
                      />
                    </div>{" "}
                  </Col>
                  <Col md={1}></Col>
                </>
              )}
            </Row>
          </Container>
        )}
      </InView>
    </>
  );
};

export default ContainerToMap;
