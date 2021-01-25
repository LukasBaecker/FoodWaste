import React, {useState} from "react";
import Plot from 'react-plotly.js';
import {Container, Row, Col} from 'react-bootstrap';
import { useSelector } from "react-redux";


const ExportThis = () => {
  const viewportWidth = useSelector((state) => state.viewportWidth);



  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  
  const handleResize = (event) => {
      setViewWidth(window.innerWidth)
  };

  React.useEffect(() => {
    window.addEventListener('rezise', handleResize)
    // cleanup this component
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const plotSize = (viewportWidth)=>{
      if (viewportWidth>=768){
        var width = viewportWidth/2-30
      }
      else{
        var width = viewportWidth - 30
      }
      return width
    }
  return (
// className="container-fluid" className="d-flex align-items-center" 
      
       <Container fluid>
        <Row className="plot-row" >
          <Col xs={12} md={6} className="plot-row" >
          <p>
            If we take a closer look at what exactly is thrown away (2019), we again observe a large amount
            of non reusable substances. The next contributors are, in that order, paper, biodegredable waste and
            packaging (also known as "yellow trash bag" or "yellow can"). <b>You can interact with the plot to
            get to know the absolute amounts of waste</b>. How many tonnes of electronics were thrown away
            in Münster in 2019?
          </p>
        
          </Col>

          <Col xs={12} md={6} className="plot-row" >
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
     style={{ width: "100%", height: "100%" }}
    layout={{
              autosize: true, title: 'Waste of Private Households, in percent and tonnes', showlegend: false}}
      />
          </Col>
          </Row>
          </Container>



  );
};

export default ExportThis;
