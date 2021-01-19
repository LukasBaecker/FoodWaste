import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Plot from 'react-plotly.js';
import "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const ExportThis = () => {
  
  return (

    <div className="infoContainerDark">

      <div class="d-flex align-items-center">
     <div class="container-fluid">
          <div class="row">
          
          <div class="col">
          <p>
            If we take a closer look at what exactly is thrown away (2019), we again observe a large amount
            of non reusable substances. The next contributors are, in that order, paper, biodegredable waste and
            packaging (also known as "yellow trash bag" or "yellow can"). <b>You can interact with the plot to
            get to know the absolute amounts of waste</b>. How many tonnes of electronics were thrown away
            in Münster in 2019?
          </p>
          </div>
          <div class="col">
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
     layout={{height: 700, width: 900, font: {size: 18}, title: 'Waste of Private Households, in percent and tonnes', showlegend: false}}
      />
          </div>
        </div>
          </div>
</div>
    </div>

  );
};

export default ExportThis;
