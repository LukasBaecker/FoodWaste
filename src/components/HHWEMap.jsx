import React, { useState, useRef, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { LayersControl, TileLayer, LayerGroup,  MapContainer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import ChangeView from './ChangeView.jsx';
import { forEach } from 'underscore';
delete L.Icon.Default.prototype._getIconUrl;
import legendItems from "../entities/LegendItems.js";
import Legend from "./Legend.jsx";

const europeCenter = [51.960667, 7.626135];
const germanyCenter = [51.960667, 7.626135];
const nrwCenter = [51.960667, 7.626135];
const muensterCenter = [51.960667, 7.626135];

 const StoryMap=({ countries , fedStates , districts, muenster})=> {
    const [currentStepIndex, setCurrentStepIndex] =useState(null);
    const [currentCenter,setCurrentCenter]=useState(europeCenter);
    const [currentZoom, setCurrentZoom]=useState(3);
    const [geoData, setGeoData]=useState(countries)
    const geoJsonLayer = useRef(null);
    const legendItemsInReverse = [...legendItems].reverse();

    useEffect(() => {
        if (geoJsonLayer.current) {
        geoJsonLayer.current.clearLayers().addData(geoData);
        }
    }, [geoData]);

    const onEachPolygon = (polygon, layer) =>{
        if (polygon.properties.Country != undefined){
        layer.options.fillColor = polygon.properties.color;
        const name = polygon.properties.Country;
        const unit = polygon.properties.Units;
        //const HHW2018 = polygon.properties.[2018];
        const HHW2018 = polygon.properties.confirmedText;
        layer.bindPopup(`${name}<br> ${unit} ${HHW2018}`);
        }
        else{
            if (polygon.properties.POP == undefined){
                layer.options.fillColor = polygon.properties.color;
                const name = polygon.properties.BUNDESLAN;
                //const unit = fedState.properties.Units;
                //const HHW2019 = fedState.properties.[2018];
                const HHW2019 = polygon.properties.confirmedText;
                layer.bindPopup(`${name}<br> ${HHW2019}`);
            }
            else{
                    layer.options.fillColor = polygon.properties.color;
                    const name = polygon.properties.REGIERUNG;
                    //const unit = fedState.properties.Units;
                    //const HHW2019 = fedState.properties.[2018];
                    const HHW2019 = polygon.properties.confirmedText;
                    layer.bindPopup(`${name}<br> ${HHW2019}`);
            }
        }
    }

    const mapStyle={
        fillColor:"white",
        weight:1,
        color:"black",
        fillOpacity:1,
    };

    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
      if(data==0||data==1){
        setCurrentCenter(europeCenter)
        setCurrentZoom(3)
        setGeoData(countries)
      }
      if(data==2){
        setCurrentCenter(germanyCenter)
        setCurrentZoom(5)
        setGeoData(fedStates)
      }
      if(data==3){
        setCurrentCenter(nrwCenter)
        setCurrentZoom(7)
        setGeoData(districts)
      }
      if(data==4){
        setCurrentCenter(muensterCenter)
        setCurrentZoom(9)
        setGeoData(muenster)
      }
      return null;
    };

      return (
          <>
            <div className="" style={{ margin: '0 0'}}>
              <div className="storymap-container" style={{ position: 'sticky', top: 0 }}>
                <MapContainer className="storymap" center={europeCenter} zoom={3} scrollWheelZoom={false} zoomControl={false} dragging={false} tap= {false}>
                  <ChangeView center={currentCenter} zoom={currentZoom} /> 
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                                />
                                <GeoJSON
                                    ref={geoJsonLayer}
                                    key={"theOneGEOJSON"}
                                    data={geoData}
                                    onEachFeature={onEachPolygon}
                                    style={mapStyle}
                                />
                                  <div position="bottomright" >
                                    <button 
                                    onClick={ () => console.log("yes") }
                                    >
                                    Reset View
                                    </button>
                                </div> 
                </MapContainer>
                <Legend legendItems={legendItemsInReverse} />
              </div>
              <Scrollama onStepEnter={onStepEnter} debug>

                  <Step data={1} key={1}>
                    <div
                      style={{
                        marginTop: '50vh',
                        marginLeft: '100px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: 0.9,
                      }}
                    >
                      I'm a Scrollama Step of index 1 and it is currently {currentStepIndex}
                    </div>
                  </Step>
                  <Step data={2} key={2}>
                    <div
                      style={{
                        marginTop: '50vh',
                        marginLeft: '100px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: 0.9,
                      }}
                    >
                      I'm a Scrollama Step of index 2 and it is currently {currentStepIndex}
                    </div>
                  </Step>
                  <Step data={3} key={3}>
                    <div
                      style={{
                        marginTop: '50vh',
                        marginLeft: '100px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: 0.9
                      }}
                    >
                      I'm a Scrollama Step of index 3 and it is currently {currentStepIndex}
                    </div>
                  </Step>
                  <Step data={4} key={4}>
                    <div
                      style={{
                        marginTop: '50vh',
                        marginLeft: '100px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: 0.9,
                      }}
                    >
                      I'm a Scrollama Step of index 4 and it is currently {currentStepIndex}
                    </div>
                  </Step>
                  <Step data={5} key={5}>
                    <div
                      style={{
                        marginTop: '50vh',
                        marginLeft: '100px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: 0.0,
                      }}
                    >
                      This is the End
                    </div>
                  </Step>      
              </Scrollama>
            </div>
        </>
      )
    }


  export default StoryMap;