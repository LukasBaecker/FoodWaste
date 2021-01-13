import React, { useState } from "react";
import colors from "../scss/index.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Plot from 'react-plotly.js';

const Container = () => {
    return (
      <Plot
      data={[
        {
         type: 'pie',
         values: [37710, 20999, 15357, 9719, 7435, 3961, 2006],
         labels: ["Hausmüll ohne Wertstoffe",	"Papier",	"Bioabfälle",	"Verpackungen",	"Glas",	"Altholz", "Elektronikgeräte"],
         textinfo: 'label+percent',
         domain: {column: 0},
        },
        {
          type: 'pie', 
          values: [8475, 3828, 2930, 1269, 1014,  746,  429,  247,  368,  357,  289,  166,  103], 
          labels: ["Grünabfälle", "Altholz", "behandeltes Holz", "Papier", "Metalle", "Kabelabfälle", "Elektronikgeräte", "Verpackungsabfälle (DSD)",
          "Bauschutt", "Kühlgeräte", "Problemabfälle", "Elektronikgroßgeräte", "Hartkunststoffe", "Altreifen", "Flachglas"],
          domain: {column: 1},
        }
     ]}
     layout={{width: 1400, height: 700, title: 'Waste of private households', showlegend: false, grid: {rows: 1, columns: 2}}}
      />
      );
};

export default Container;