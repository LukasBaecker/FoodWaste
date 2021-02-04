import React, { useState, useRef, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import ChangeView from "./ChangeView.jsx";
import legendItems from "../entities/LegendItems.js";
import { useMediaQuery } from "react-responsive";
import Table from "react-bootstrap/Table";
delete L.Icon.Default.prototype._getIconUrl;
const europeCenter = [58.5, -25];
const germanyCenter = [51.8, 3.4];
const nrwCenter = [51.5, 5.2];
const muensterCenter = [52.05, 6.3];
const stadtCenter = [51.9583, 7.4];

const europeCenterMobile = [51.960667, 7.626135];
const germanyCenterMobile = [51.746079, 10.601846];
const nrwCenterMobile = [51.960667, 7.626135];
const muensterCenterMobile = [51.961869, 7.383207];
const stadtCenterMobile = [51.960667, 7.626135];

const europeLegendVal = {
  heading: "Waste in t",
  zero: "> 6.746.344",
  one: "2.591.188 - 6.746.344",
  two: "1.478.968 - 2.591.187",
  three: "408.103 - 1.478.967",
  four: "< 408.103",
};
const germanyLegendVal = {
  heading: "Waste in kg per capita",
  zero: "> 479",
  one: "458 - 479",
  two: "445 - 457",
  three: "429 - 444",
  four: "< 429",
};
const nrwLegendVal = {
  heading: "Waste in kg per capita",
  zero: "> 481",
  one: "468 - 481",
  two: "459 - 467",
  three: "449 - 458",
  four: "< 448",
};
const muensterlandLegendVal = {
  heading: "Waste in kg per capita",
  zero: "> 236",
  one: "155 - 236",
  two: "125 - 154",
  three: "112 - 125",
  four: "< 112",
};
const muensterCityLegendVal = {
  heading: "Waste in kg per capita",
  zero: "> 1327",
  one: "1080 - 1326",
  two: "846 - 1079",
  three: "529 - 845",
  four: "< 529",
};
const legendColorPerCapita = {
  zero: "#bd0026",
  one: "#f03b20",
  two: "#fd8d3c",
  three: "#fecc5c",
  four: "#ffffb2",
};
const legendColor = {
  zero: "#00441b",
  one: "#267b3a",
  two: "#06aa6e",
  three: "#caeac3",
  four: "#f7fcf5",
};

const StoryMap = ({ countries, fedStates, districts, muenster, stadt }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(
    isTabletOrMobile ? europeCenterMobile : europeCenter
  );
  const [currentLegendNumbers, setCurrentLegendNumbers] = useState(
    europeLegendVal
  );
  const [currentLegendColor, setCurrentLegendColor] = useState(legendColor);
  const [currentZoom, setCurrentZoom] = useState(3);
  const [geoData, setGeoData] = useState(countries);
  const geoJsonLayer = useRef(null);
  const legendItemsInReverse = [...legendItems].reverse();

  const getColor = (d) => {
    return d > 1000
      ? "#800026"
      : d > 500
      ? "#BD0026"
      : d > 200
      ? "#E31A1C"
      : d > 100
      ? "#FC4E2A"
      : d > 50
      ? "#FD8D3C"
      : d > 20
      ? "#FEB24C"
      : d > 10
      ? "#FED976"
      : "#FFEDA0";
  };
  const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
  let labels = [];
  let from;
  let to;

  for (let i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' +
        getColor(from + 1) +
        '"></i> ' +
        from +
        (to ? "&ndash;" + to : "+")
    );
  }

  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(geoData);
    }
  }, [geoData]);

  const onEachPolygon = (polygon, layer) => {
    if (polygon.properties.NAME_STATI != undefined) {
      layer.options.fillColor = polygon.properties.color;
      const name = polygon.properties.NAME_STATI;
      const HHW2019 = polygon.properties.confirmedText;
      const unit = "kg";
      layer.bindPopup(
        `${name.bold().fontsize(4)} <br> ${HHW2019.bold().fontsize(
          1.7
        )}<br> of Household waste <br> per inhabitant in 2019.`
      );
    } else {
      if (polygon.properties.REGIERUNG != undefined) {
        layer.options.fillColor = polygon.properties.color;
        const name = polygon.properties.REGIERUNG;
        const HHW2019 = polygon.properties.confirmedText;
        const unit = "kg";
        layer.bindPopup(
          `${name.bold().fontsize(4)}<br> ${HHW2019.bold().fontsize(
            1.7
          )} ${unit.bold()} <br> of Household waste <br> per inhabitant in 2019.`
        );
      } else {
        if (polygon.properties.BUNDESLAN != undefined) {
          layer.options.fillColor = polygon.properties.color;
          const name = polygon.properties.BUNDESLAN;
          const HHW2019 = polygon.properties.confirmedText;
          const unit = "kg";
          layer.bindPopup(
            `${name.bold().fontsize(4)}<br> ${HHW2019.bold().fontsize(
              1.7
            )} ${unit.bold()} <br> of Household waste <br> per inhabitant in 2019.`
          );
        } else {
          layer.options.fillColor = polygon.properties.color;
          const name = polygon.properties.Country;
          const HHW2018 = polygon.properties.confirmedText;
          const unit = "tonnes";
          layer.bindPopup(
            `${name.bold().fontsize(4)} <br> ${HHW2018.bold().fontsize(
              1.7
            )} ${unit.bold()} <br> of Household waste in 2018.`
          );
        }
      }
    }
  };

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const intmap = "You can interact with the map to compare each country.";

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (data === 0 || data === 1) {
      setCurrentLegendNumbers(europeLegendVal);
      setCurrentLegendColor(legendColor);
      setCurrentCenter(isTabletOrMobile ? europeCenterMobile : europeCenter);
      setCurrentZoom(isTabletOrMobile ? 3 : 3.35);
      setGeoData(countries);
    }
    if (data === 2) {
      setCurrentLegendNumbers(germanyLegendVal);
      setCurrentLegendColor(legendColorPerCapita);
      setCurrentCenter(isTabletOrMobile ? germanyCenterMobile : germanyCenter);
      setCurrentZoom(isTabletOrMobile ? 5 : 5.9);
      setGeoData(fedStates);
    }
    if (data === 3) {
      setCurrentLegendNumbers(nrwLegendVal);
      setCurrentLegendColor(legendColorPerCapita);
      setCurrentCenter(isTabletOrMobile ? nrwCenterMobile : nrwCenter);
      setCurrentZoom(isTabletOrMobile ? 7 : 7.5);
      setGeoData(districts);
    }
    if (data === 4) {
      setCurrentLegendNumbers(muensterlandLegendVal);
      setCurrentLegendColor(legendColorPerCapita);
      setCurrentCenter(
        isTabletOrMobile ? muensterCenterMobile : muensterCenter
      );
      setCurrentZoom(isTabletOrMobile ? 8 : 8.7);
      setGeoData(muenster);
    }
    if (data === 5) {
      setCurrentLegendNumbers(muensterCityLegendVal);
      setCurrentLegendColor(legendColorPerCapita);
      setCurrentCenter(isTabletOrMobile ? stadtCenterMobile : stadtCenter);
      setCurrentZoom(isTabletOrMobile ? 10.5 : 10.9);
      setGeoData(stadt);
    }
    return null;
  };

  return (
    <>
      <div className='' style={{ margin: "0 0" }}>
        <div
          className='storymap-container'
          style={{ position: "sticky", top: 0 }}>
          <MapContainer
            className='storymap'
            center={europeCenterMobile}
            zoom={3}
            scrollWheelZoom={false}
            zoomControl={false}
            dragging={false}
            tap={false}>
            <ChangeView center={currentCenter} zoom={currentZoom} />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            />
            <GeoJSON
              ref={geoJsonLayer}
              key={"theOneGEOJSON"}
              data={geoData}
              onEachFeature={onEachPolygon}
              style={mapStyle}
            />
            <div position='bottomright'>
              <button onClick={() => console.log("yes")}>Reset View</button>
            </div>
          </MapContainer>
          <div className='legend-div info'>
            <h4>{currentLegendNumbers.heading}</h4>
            <p>
              <i style={{ background: currentLegendColor.zero }}></i>
              {currentLegendNumbers.zero}
            </p>
            <p>
              <i style={{ background: currentLegendColor.one }}></i>
              {currentLegendNumbers.one}
            </p>
            <p>
              <i style={{ background: currentLegendColor.two }}></i>
              {currentLegendNumbers.two}
            </p>
            <p>
              <i style={{ background: currentLegendColor.three }}></i>
              {currentLegendNumbers.three}
            </p>
            <p>
              <i style={{ background: currentLegendColor.four }}></i>
              {currentLegendNumbers.four}
            </p>
            <p>
              <i style={{ background: "#ffffff" }}></i>
              No Data
            </p>
          </div>
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile first"
                  : "storymap-description first"
              }>
              <h2>This is about Europe</h2>
              <p>
              According to the global goals adopted by the United Nations in 2015, a social movement on <b style={{color:"#06aa6e"}}>“Zero Waste Europe”</b> was brought into limelight supporting the Sustainable Development Goal (SDG) 12 - <b style={{color:"#06aa6e"}}>“Responsible consumption and production”</b>. The directive of this movement is to curtail the plastic litter and its associated impact through <b style={{color:"#06aa6e"}}>“Transforming our world: the 2030 Agenda for Sustainable Development”</b>. In a broader picture, the term <b style={{color:"#06aa6e"}}>“waste”</b> contributes countless elements in our everyday routine. 
              </p>
              <p>
              The waste statistics displays the household waste in tonnes for Europe as of 2018, of which the top ranked country is Turkey <b>(32.3 million)</b>, followed by the United Kingdom <b>(31.9 million)</b>, France <b>(21 million)</b> and <b style={{color:"#00441b"}}>Germany (20.6 million)</b>. 
              </p>
              <p>
                <b style={{color:"red"}}>Click on any country on the map to compare each country. -></b>
              </p>
              <p style={{color:"#06aa6e"}}>Let’s go one step further to our country..!</p>
              
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>This is about Germany</h2>
              <p>
              According to the Federal Government report, a larger portion of household waste generated in Germany was increased by <b>0.8%</b> in <b>2019</b>. Ranking of states is based on waste generated per inhabitant in Kilograms (Kg/E). At a glance, states like Rheinland-Pfalz <b>(525 Kg)</b>, Niedersachsen <b>(511 Kg)</b>, Bayern <b>(479 Kg)</b>, Saarland <b>(476 Kg)</b> is  followed by <b style={{color:"#bd0026"}}>Nordrhein-Westfalen (461 Kg)</b>.
              </p>
              <p style={{color:"#06aa6e"}}>Eager to know the condition of our state..! </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>This is about North-Rhine Westphalia</h2>
              <p>
              Looking into the statistics of the five Stadts in NRW, <b style={{color:"#bd0026"}}>Münster</b> generates the highest amount of household waste per inhabitant <b>(496.71 Kg)</b>, followed by Köln <b>(477.26 Kg)</b>, Arnsberg <b>(461 Kg)</b>, Düsseldorf <b>(454.31 Kg)</b>, Detmold <b>(422.9 Kg)</b>. 
              </p>
              <p style={{color:"#06aa6e"}}>Time for action, Let’s start from our hometown..!</p>
            </div>
          </Step>

          <Step data={4} key={4}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>This is about Münsterland</h2>
              <p>
              Here is a small comparison on each category of waste from Münster generated in <b>2018</b> and <b>2019</b>, where household and bulky waste was <b>1799.8 kg/E</b>, which surged to <b>1808.8 kg/E</b> in <b>2019</b>. There was a decrease in the total amount of organic and green waste generated in <b>2019 (1374.01 kg/E)</b> when compared to <b>2018 (1381.2 kg/E)</b>. Similarly, there was a decline in the generation of glass wastes from<b> 183.7 kg/E</b> to <b>182 kg/E</b> between the years <b>2018</b> and <b>2019</b>. There was an increase in the generation of paper waste in Münster, which rose from <b>590.7 kg/E</b> in <b>2018</b> to <b>597.03 kg/E</b> in <b>2019</b> quantifying waste from each category.</p>
              <p style={{color:"#06aa6e"}}>Gain a better insight on the amount of household waste produced per inhabitant in your Stadtteil today ! 
              </p>
              <p style={{color:"#06aa6e"}}>Small steps make a big difference, Towards <b>MÜNSTAINABLE..!</b></p>
            </div>
          </Step>

          <Step data={5} key={5}>
            <div
              className={
                isTabletOrMobile
                  ? "storymap-description mobile"
                  : "storymap-description"
              }>
              <h2>This is about Münster</h2>

              <Table striped bordered hover>
                <thead>
                  <tr style={{ border: "1px solid #000000" }}>
                    <th
                      style={
                        ({ border: "1px solid #000000" },
                        { backgroundColor: "#353a40" })
                      }></th>
                    <th
                      style={
                        ({ border: "1px solid #000000" },
                        { backgroundColor: "#353a40" })
                      }>
                      <div style={{ color: "#8f9195" }}>Us</div>
                    </th>
                    <th
                      style={
                        ({ border: "1px solid #000000" },
                        { backgroundColor: "#353a40" })
                      }>
                      <div style={{ color: "#8f9195" }}>Maximum</div>
                    </th>
                    <th
                      style={
                        ({ border: "1px solid #000000" },
                        { backgroundColor: "#353a40" })
                      }>
                      <div style={{ color: "#8f9195" }}>Minimum</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <b style={{ color: "#8f9195" }}>Country</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Germany</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Turkey</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Iceland</b>
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <div style={{ color: "#8f9195" }}>
                        Total HH. Waste in 2018
                      </div>
                    </td>
                    <td style={{ backgroundColor: "#bd0026" }}>20.6M tonnes</td>
                    <td style={{ backgroundColor: "#bd0026" }}>32.3M tonnes</td>
                    <td style={{ backgroundColor: "#ffffb2" }}>147K tonnes</td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <b style={{ color: "#8f9195" }}>Federal State</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>NRW</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Rheinlad-Pfalz</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Sachsen</b>
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <div style={{ color: "#8f9195" }}>
                        HH. Waste per inh. in 2019
                      </div>
                    </td>
                    <td style={{ backgroundColor: "#f03b20" }}>461 kg</td>
                    <td style={{ backgroundColor: "#bd0026" }}>525 kg</td>
                    <td style={{ backgroundColor: "#ffffb2" }}>339 kg</td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <b style={{ color: "#8f9195" }}>Regierungsbezirke</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Münster</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Detmold</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Düsseldorf</b>
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <div style={{ color: "#8f9195" }}>
                        HH. Waste per inh. in 2019
                      </div>
                    </td>
                    <td style={{ backgroundColor: "#bd0026" }}>195 kg</td>
                    <td style={{ backgroundColor: "#bd0026" }}>138 kg</td>
                    <td style={{ backgroundColor: "#ffffb2" }}>240 kg</td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <b style={{ color: "#8f9195" }}>District</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Münster</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Bottrop</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Münster</b>
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <div style={{ color: "#8f9195" }}>
                        HH. Waste per inh. in 2019
                      </div>
                    </td>
                    <td style={{ backgroundColor: "#bd0026" }}>436 kg</td>
                    <td style={{ backgroundColor: "#bd0026" }}>608 kg</td>
                    <td style={{ backgroundColor: "#ffffb2" }}>436 kg</td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <b style={{ color: "#8f9195" }}>City district</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Yours</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Gievenbeck</b>
                    </td>
                    <td style={{ backgroundColor: "#8f9195" }}>
                      <b>Hafen</b>
                    </td>
                  </tr>
                  <tr style={{ border: "1px solid #000000" }}>
                    <td style={{ backgroundColor: "#353a40" }}>
                      <div style={{ color: "#8f9195" }}>
                        HH. Waste per inh. in 2019
                      </div>
                    </td>
                    <td>?</td>
                    <td style={{ backgroundColor: "#bd0026" }}>2921 kg</td>
                    <td style={{ backgroundColor: "#ffffb2" }}>156 kg</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Step>

          <Step data={6} key={6}>
            <div
              style={{
                marginTop: "100vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                border: "1px solid gray",
                backgroundColor: "white",
                opacity: "0.0",
                padding: "30px",
              }}>
              This is the End
            </div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
};

export default StoryMap;
