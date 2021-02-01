import React, { useState, useRef, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import { TileLayer, MapContainer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import ChangeView from "./ChangeView.jsx";
delete L.Icon.Default.prototype._getIconUrl;
import legendItems from "../entities/LegendItems.js";

const europeCenter = [51.960667, 7.626135];
const germanyCenter = [51.746079, 10.601846];
const nrwCenter = [51.960667, 7.626135];
const muensterCenter = [51.961869, 7.383207];
//muenster city center:
//const muensterCenter = [51.960667, 7.626135];

const StoryMap = ({ countries, fedStates, districts, muenster }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentCenter, setCurrentCenter] = useState(europeCenter);
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
    if (polygon.properties.Country != undefined) {
      layer.options.fillColor = polygon.properties.color;
      const name = polygon.properties.Country;
      const unit = polygon.properties.Units;
      //const HHW2018 = polygon.properties.[2018];
      const HHW2018 = polygon.properties.confirmedText;
      layer.bindPopup(`${name}<br> ${unit} ${HHW2018}`);
    } else {
      if (polygon.properties.POP == undefined) {
        layer.options.fillColor = polygon.properties.color;
        const name = polygon.properties.BUNDESLAN;
        //const unit = fedState.properties.Units;
        //const HHW2019 = fedState.properties.[2018];
        const HHW2019 = polygon.properties.confirmedText;
        layer.bindPopup(`${name}<br> ${HHW2019}`);
      } else {
        layer.options.fillColor = polygon.properties.color;
        const name = polygon.properties.REGIERUNG;
        //const unit = fedState.properties.Units;
        //const HHW2019 = fedState.properties.[2018];
        const HHW2019 = polygon.properties.confirmedText;
        layer.bindPopup(`${name}<br> ${HHW2019}`);
      }
    }
  };

  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (data == 0 || data == 1) {
      setCurrentCenter(europeCenter);
      setCurrentZoom(3);
      setGeoData(countries);
    }
    if (data == 2) {
      setCurrentCenter(germanyCenter);
      setCurrentZoom(5);
      setGeoData(fedStates);
    }
    if (data == 3) {
      setCurrentCenter(nrwCenter);
      setCurrentZoom(7);
      setGeoData(districts);
    }
    if (data == 4) {
      setCurrentCenter(muensterCenter);
      setCurrentZoom(8);
      setGeoData(muenster);
    }
    return null;
  };

  return (
    <>
      <div style={{ margin: "0 0" }}>
        <div style={{ position: "sticky", top: 0 }}>
          <MapContainer
            className='storymap'
            center={europeCenter}
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
            <h4>Tonnes of Waste</h4>
            <p>
              <i style={{ background: "#bd0026" }}></i>
              more than 6.746.343
            </p>
            <p>
              <i style={{ background: "#f03b20" }}></i>
              2.591.187 - 6.746.343
            </p>
            <p>
              <i style={{ background: "#fd8d3c" }}></i>
              1.478.966- 2.591.187
            </p>
            <p>
              <i style={{ background: "#fecc5c" }}></i>
              408.103 - 1.478.966
            </p>
            <p>
              <i style={{ background: "#ffffb2" }}></i>0 - 408.103
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
              style={{
                marginTop: "1vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                border: "1px solid gray",
                backgroundColor: "white",
                opacity: "0.99",
                padding: "30px",
                borderRadius: "8px",
              }}>
              <h2>This is about Europe</h2>
              <p>
                Nulla aliqua voluptate nulla laborum quis ea commodo Lorem
                reprehenderit irure. Officia irure nisi nisi do id aliquip nisi
                consectetur id aute veniam ipsum. Ut in mollit consequat ullamco
                incididunt incididunt duis incididunt esse. Ea labore voluptate
                laborum voluptate consequat enim id fugiat aliqua ipsum qui
                cupidatat non. Labore in commodo deserunt cupidatat labore culpa
                elit mollit. Mollit aute cillum sunt qui adipisicing incididunt
                eiusmod exercitation voluptate commodo laborum culpa non. Non
                culpa cupidatat irure qui consectetur id officia.
              </p>
              Officia magna ea deserunt irure sunt est ea cupidatat non do.
              Proident magna sit ad occaecat nostrud. Exercitation sunt eu velit
              esse amet ut veniam incididunt velit ex exercitation aute qui. Ut
              ea irure aliqua cupidatat amet sunt nulla. Veniam laborum
              exercitation minim mollit deserunt eiusmod tempor Lorem velit elit
              consectetur do. Sunt incididunt fugiat officia cupidatat aliqua
              nisi excepteur ex voluptate qui ullamco. Nisi amet enim nisi
              laboris laboris et. Exercitation sint incididunt amet sint
              pariatur culpa eiusmod aliqua cupidatat mollit laboris laborum
              adipisicing duis. Id culpa eiusmod id et et anim occaecat magna
              quis laborum elit commodo non id. Enim est adipisicing pariatur
              consequat dolore cillum. Velit aliqua ea irure laborum cupidatat
              sit. Adipisicing reprehenderit minim velit cupidatat cupidatat
              laboris ut sunt ex et aute amet. Nostrud occaecat nostrud est
              nostrud officia culpa non. Aliquip culpa enim occaecat sint
              eiusmod. Adipisicing magna irure ipsum Lorem. Ullamco voluptate
              Lorem reprehenderit duis nisi consectetur laboris. Lorem culpa
              quis excepteur officia. Deserunt elit quis irure non consequat
              mollit aute amet pariatur pariatur consequat duis. Duis nisi nulla
              consectetur in officia magna duis deserunt dolor culpa duis
              laborum. Officia qui ullamco consequat eiusmod non excepteur amet
              do amet. Pariatur ea pariatur sit eiusmod sit est culpa. In in ex
              tempor aliquip nisi sunt reprehenderit nostrud reprehenderit.
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              style={{
                marginTop: "100vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                border: "1px solid gray",
                backgroundColor: "white",
                opacity: "0.99",
                padding: "30px",
                borderRadius: "8px",
              }}>
              <h2>This is Germany</h2>
              <p>
                Exercitation occaecat consectetur sit labore id sunt incididunt
                deserunt pariatur incididunt minim occaecat. Culpa irure commodo
                sunt sit ea ipsum magna dolore. Id consectetur ipsum fugiat in
                enim sint enim nulla occaecat nulla do. Lorem consectetur eu
                proident aliqua reprehenderit deserunt ad est laborum
                incididunt. Amet aliquip nulla sint velit sit quis laboris elit
                id. Nulla dolor cupidatat incididunt laboris commodo duis aliqua
                sunt incididunt elit esse cupidatat dolor.
              </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div
              style={{
                marginTop: "100vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                border: "1px solid gray",
                backgroundColor: "white",
                opacity: "0.99",
                padding: "30px",
                borderRadius: "8px",
              }}>
              <h2>This is about NRW</h2>
              <p>
                Non enim proident aute id veniam ea duis elit do qui esse anim
                nostrud nisi. Aliqua ullamco veniam consequat laboris proident
                eiusmod culpa cupidatat excepteur reprehenderit non consequat.
                In do consequat consequat quis mollit non pariatur ad eu
                voluptate aliquip incididunt.
              </p>
            </div>
          </Step>

          <Step data={4} key={4}>
            <div
              style={{
                marginTop: "100vh",
                marginLeft: "5vw",
                marginRight: "5vw",
                border: "1px solid gray",
                backgroundColor: "white",
                opacity: "0.99",
                padding: "30px",
                borderRadius: "8px",
              }}>
              <h2>This is about Münster</h2>
              <p>
                Mollit amet laborum consectetur consectetur sint minim. Cillum
                non duis eu occaecat est. Nisi dolore deserunt occaecat quis
                fugiat. Ullamco pariatur deserunt id ipsum laboris enim laboris
                magna. Nostrud laborum deserunt dolore Lorem excepteur dolore
                elit.
              </p>
            </div>
          </Step>
          <Step data={5} key={5}>
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
