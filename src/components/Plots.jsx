import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Plot from 'react-plotly.js';

const Container = () => {
    return (
      <>
      <div>
      <Plot
      data={[
        {
          type: 'scatter', 
          x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
          y: [178, 180, 177, 172, 173, 170, 161, 159, 195, 160, 165, 162, 161, 162],
          name: "General waste per citizen"
        },
        {         
          x: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
          y: [298, 305, 301, 303, 295, 289, 277, 272, 284, 266, 270, 266, 260, 255],
          name: "Recycable waste per citizen"
        }
     ]}
     layout={{width: 900, height: 400, title: 'Waste in Münster over the years',
     xaxis: {
      title: 'Year',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Waste in kilograms',
      showline: true
    }
    }}
      />
      </div>
      <div>
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
     layout={{width: 700, height: 700, title: 'Waste of Private Households', showlegend: false}}
      />
      </div>
      <div>
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
     layout={{width: 700, height: 700, title: 'Waste Amount Development', showlegend: false}}
      />
      
      </div>
      </>
      );
};

export default Container;