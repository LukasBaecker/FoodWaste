import React, { useState, useRef, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import L, { Polygon } from "leaflet";
import ChangeView from "./ChangeView.jsx";
import legendItems from "../entities/LegendItems.js";
import { useMediaQuery } from "react-responsive";
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
  zero: "< 408.103",
  one: "408.103 - 1.478.967",
  two: "1.478.968 - 2.591.187",
  three: "2.591.188 - 6.746.344",
  four: "> 6.746.344",
};
const germanyLegendVal = {
  heading: "Waste in kg per capita",
  zero: "< 429",
  one: "429 - 444",
  two: "445 - 457",
  three: "458 - 479",
  four: "> 479",
};
const nrwLegendVal = {
  heading: "Waste in kg per capita",
  zero: "< 448",
  one: "449 - 458",
  two: "459 - 467",
  three: "468 - 481",
  four: "> 481",
};
const muensterlandLegendVal = {
  heading: "Waste in kg per capita",
  zero: "< 112",
  one: "112 - 125",
  two: "125 - 154",
  three: "155 - 236",
  four: "> 236",
};
const muensterCityLegendVal = {
  heading: "Waste in kg per capita",
  zero: "< 529",
  one: "529 - 845",
  two: "846 - 1079",
  three: "1080 - 1326",
  four: "> 1327",
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
      setCurrentCenter(isTabletOrMobile ? europeCenterMobile : europeCenter);
      setCurrentZoom(isTabletOrMobile ? 3 : 3.35);
      setGeoData(countries);
    }
    if (data === 2) {
      setCurrentLegendNumbers(germanyLegendVal);
      setCurrentCenter(isTabletOrMobile ? germanyCenterMobile : germanyCenter);
      setCurrentZoom(isTabletOrMobile ? 5 : 5.9);
      setGeoData(fedStates);
    }
    if (data === 3) {
      setCurrentLegendNumbers(nrwLegendVal);
      setCurrentCenter(isTabletOrMobile ? nrwCenterMobile : nrwCenter);
      setCurrentZoom(isTabletOrMobile ? 7 : 7.5);
      setGeoData(districts);
    }
    if (data === 4) {
      setCurrentLegendNumbers(muensterlandLegendVal);
      setCurrentCenter(
        isTabletOrMobile ? muensterCenterMobile : muensterCenter
      );
      setCurrentZoom(isTabletOrMobile ? 8 : 8.7);
      setGeoData(muenster);
    }
    if (data === 5) {
      setCurrentLegendNumbers(muensterCityLegendVal);
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
              <i style={{ background: "#bd0026" }}></i>
              {currentLegendNumbers.zero}
            </p>
            <p>
              <i style={{ background: "#f03b20" }}></i>
              {currentLegendNumbers.one}
            </p>
            <p>
              <i style={{ background: "#fd8d3c" }}></i>
              {currentLegendNumbers.two}
            </p>
            <p>
              <i style={{ background: "#fecc5c" }}></i>
              {currentLegendNumbers.three}
            </p>
            <p>
              <i style={{ background: "#ffffb2" }}></i>
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
                According to the global goals adopted by the United Nations in
                2015, a social movement on “Zero Waste Europe” was brought into
                limelight supporting the Sustainable Development Goal for
                “Responsible consumption and production”. The directive of this
                movement is to curtail the plastic litter and its associated
                impact through “Transforming our world: the 2030 Agenda for
                Sustainable Development” [2]. In a broader picture, the term
                “waste” contributes countless elements in everyday routine. Some
                common wastes produced on a daily basis includes: household
                waste, organic waste, grünabfälle, packing waste (papers,
                cardboards), glass products and other waste products. This
                inturn signifies the importance of proper waste management or
                recycling measures to harmonise sustainability.
              </p>
              <p>
                The total household waste generated in the European Union
                accounts for about 202 million tonnes in 2018. As per the waste
                statistics, each inhabitant generated 5.2 tonnes of waste during
                2018. Among the EU- 27 countries, per capita waste generation of
                Finland was larger (23.2 tonnes) whereas, per capita waste
                generation for North Macedonia was the least (0.54 tonnes).
              </p>
              <p>
                <b>Interact with the map to compare each country. --------></b>
              </p>
              <p>
                It was estimated that nearly 36% of total waste was from
                construction, 26.2% waste from mining and quarrying, 10.6% of
                manufacturing waste, 9.9% from waste/water services, 8.2% from
                households and the rest 9.1% of waste included other economic
                activities. In the European Union, food waste per year per
                person accounts for between 158 - 290 kg.
              </p>
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
                The total waste generated in Germany was 37.7 million tonnes and
                the per capita waste generated was 4.8 tonnes in the year 2018
                which was increased by 0.8% in 2019. According to the Federal
                Government report, 11 million tonnes of food is wasted each
                year. Construction and demolition waste contributes a larger
                portion of the total waste produced in Germany every year. About
                12 million tonnes of recyclable wastes such as glass,
                paper/cardboards, metals, wood, plastics, textiles and 10.1
                million tonnes of organic wastes including wastes from bio-bin,
                biodegradable wastes were separately collected from total waste
                generated in the year 2019. The data of 2019 for Germany when
                compared with 2018 clearly portrays a significant rise in
                generation of waste in each category.
              </p>
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
                In 2018, the total generated household and bulky waste was
                12209.9 kg/E whereas in 2019, it was 12399.6 kg/E. Similarly,
                the generated organic and green waste also increased from 6713
                kg/E in 2018 to 6788.6 kg/E in 2019. In contrast, the amount of
                paper waste generated in 2018 was 3898.3 kg/E, that was
                decreased to 3894.8 kg/E in 2019. Amount of glass wastes was
                1185.62 kg/E in 2018 and 1192.7 kg/E in 2019. Likewise,
                generation of lightweight particle wastes arose from 1900.05
                kg/E to 1936.05 kg/E during 2018 and 2019 respectively.
              </p>
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
                The total sum of household and bulky waste generated in Münster
                during 2018 was 1799.8 kg/E, which surged to 1808.8 kg/E in
                2019. There was a decrease in the total amount of organic and
                green waste generated in 2019 (1374.01 kg/E) when compared to
                2018 (1381.2 kg/E). Similarly, there was a decline in the
                generation of glass wastes from 183.7 kg/E to 182 kg/E between
                the years 2018 and 2019, respectively. There was an increase in
                the generation of paper waste in Münster, which rose from 590.7
                kg/E in 2018 to 597.03 kg/E in 2019. The generation of
                lightweight particle waste was 308.1 kg/E in 2018 which
                escalated to 313 kg/E in 2019. Other valuable wastes and weight
                containing pollutants increased in 2019 when compared to that of
                2018.
              </p>
            </div>
          </Step>

          <Step data={5} key={5}>
            <div>
              <h2>This is about Münster</h2>
              <p>
                <table style={{ fontSize: 16 }}>
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
                </table>
              </p>
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
