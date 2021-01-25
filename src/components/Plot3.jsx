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

     <Container fluid>
     <Row className="plot-row">
     <Col xs={12} md={6} className="plot-row" >
          <p>
              Lastly, we observe the development of specific kinds of waste over the years (2013 to 2017).
              This plot is dominated by paper and plastic packaging. To get a closer look at the categories
              close to the x-axis, you can just <b>drag a rectangle on the canvas to zoom in</b>.
          </p>
          </Col>
          <Col xs={12} md={6} className="plot-row" >
          <Plot
      data={[
        {
          type: 'scatter', 
          x: [2013, 2014, 2015, 2016, 2017],
          y: [59.4, 56.3, 62, 56, 65.10],         
          name: "wood packaging"
        },
        {         
          x: [2013, 2014, 2015, 2016, 2017],
          y: [7114.2, 7043.1, 7498, 7534.6, 7524.80],
          name: "glass packaging"
        },
        {
          x: [2015, 2016, 2017],
          y: [9570.5, 9715.2, 9935.7],
          name: "plastic packaging"
        },
        {
          x: [2013, 2014, 2015, 2016, 2017],
          y: [5995, 14213.2, 6876.1, 7004.5, 7061],
          name: "bulky waste"
        },
        {
          x: [2013, 2014, 2015, 2016, 2017],
          y: [24947.9, 26272.7, 24654.6, 24510.4, 24032],
          name: "paper and carton"
        },
        {
          x: [2013, 2014, 2015, 2016, 2017],
          y: [231, 207.9, 157.1, 257.1, 269.2],
          name: "synthetics"
        },
        {
          x: [2017],
          y: [1309.2],
          name: "clothing"
        }

     ]}
     style={{ width: "100%", height: "100%" }}
    layout={{
              autosize: true
            , title: 'Waste Amount Development', 
     xaxis: {
      title: 'Year',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Waste in tonnes',
      showline: true
    },
    showlegend: true}}
      />
          </Col>
        </Row>
     </Container>


  );
};

export default ExportThis;
