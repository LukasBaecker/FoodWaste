import React from "react";
import Plot from 'react-plotly.js';

const ExportThis = () => {
  
  return (

    <div className="infoContainerDark">

      <div className="d-flex align-items-center">
     <div className="container-fluid">
          <div className="row">
          
          <div className="col">
          <p>
            If we take a closer look at what exactly is thrown away (2019), we again observe a large amount
            of non reusable substances. The next contributors are, in that order, paper, biodegredable waste and
            packaging (also known as "yellow trash bag" or "yellow can"). <b>You can interact with the plot to
            get to know the absolute amounts of waste</b>. How many tonnes of electronics were thrown away
            in Münster in 2019?
          </p>
          </div>
          <div className="col">
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
