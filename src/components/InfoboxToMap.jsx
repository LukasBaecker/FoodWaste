import React from "react";
import Button from "react-bootstrap/Button";
import CountUp from "react-countup";
import {InView} from "react-intersection-observer"
import {useSelector} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import bgimage from "../img/muenster_schloss_sw.jpg";
import {Container, Row, Col} from 'react-bootstrap';

const ContainerToMap = () => {
  const pointsNumber = useSelector((state) => state.pointNumber);

  return (
    <InView triggerOnce={true} threshold={0.5}>
    {({ inView, ref, entry }) => (
    <Container ref={ref} fluid className="infoContainer-dark" style={{
      backgroundImage: `url(${bgimage})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      marginBottom: "0px",
      backgroundPosition: "50% 0",
    }}>
    <Row style={{marginTop:"50px"}}>
      <Col xs={12} md={12}  >
        <div className="vertical-center">
          <h1 style={{"font-size": "2.5rem"}}>It's a global problem, calling for local solutions</h1><br/> 
          <p style={{'fontSize':'1.5rem'}}>Each and everyone of us is represented in the numbers shown above. 
          We all take our part. That also means that none other than ourselves can work to reduce our share.
          </p>
          <br/>
          <h1 style={{"font-size": "2.5rem"}}>Let's see how:</h1>
          <br/>
          <p style={{'fontSize':'1.5rem'}}>
            We collected a number of opprotunities to reduce waste and pollution here in Münster. From 
            waste baskets for your on-the-run waste, over recycling yards for potentially hazardous 
            items and zero-waste stores that avoid all packaging to buy in bulk, 
            to shared bookshelves and give boxes to lengthen the life cycle of some old treasures.
          </p>
        </div>
      </Col>
    </Row>
    <Row style={{marginTop:"50vh"}}>
      <Col xs={12} md={12}  >
        <FontAwesomeIcon icon={faSearchLocation} style={{ fontSize: '30px' }}/><br/>
        {inView ? <CountUp start={0} end={pointsNumber} delay={1}/> : 0}
        <p style={{fontSize: "small"}}>points on our map</p>
      </Col>
    </Row>
  </Container>
      )}
  </InView>
  )
};

export default ContainerToMap;
