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
          <h1 style={{"font-size": "2.5rem"}}>What can I do to change the world? </h1><br/> 
          <p style={{'fontSize':'1.5rem'}}>On our map of Münster we collected data etc...</p>
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
