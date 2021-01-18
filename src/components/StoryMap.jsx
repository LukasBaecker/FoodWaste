import React, { useRef, useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"
import Plots from "./Plots.jsx"
import { setScrollTop } from "../actions/index.js";
import RSC from "react-scrollbars-custom";
import colors from "../scss/index.scss";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from "leaflet";
import ChangeView from './ChangeView.jsx';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
});
//this is a nice osm basemap just black
//https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png

//or just white 
//https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png

//const categories = useSelector((state) => state.categories);

const europe = [51.960667, 7.626135]
const muenster = [51.960667, 7.626135];

 const StoryMap=()=> {
    const [currentStepIndex, setCurrentStepIndex] =useState(null);
    const [currentCenter,setCurrentCenter]=useState(europe);
    const [currentZoom, setCurrentZoom]=useState(5);

    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
      if(data==2){
        setCurrentCenter(muenster)
        setCurrentZoom(13)
      }
      return null;
    };

      return (
          <>
            <div className="" style={{ margin: '0 0'}}>
              <div className="storymap-container" style={{ position: 'sticky', top: 0 }}>
                <MapContainer className="storymap" center={europe} zoom={5} scrollWheelZoom={false} zoomControl={false} >
                  <ChangeView center={currentCenter} zoom={currentZoom} /> 
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                                />
                </MapContainer> 
              </div>
              <Scrollama onStepEnter={onStepEnter} debug>

                  <Step data={1} key={1}>
                    <div
                      style={{
                        marginTop: '50vh',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: currentStepIndex === 3 ? 1 : 0.2,
                      }}
                    >
                      I'm a Scrollama Step of index 1
                    </div>
                  </Step>
                  <Step data={2} key={2}>
                    <div
                      style={{
                        marginTop: '50vh',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: currentStepIndex === 2 ? 1 : 0.2,
                      }}
                    >
                      I'm a Scrollama Step of index 2
                    </div>
                  </Step>
                  <Step data={3} key={3}>
                    <div
                      style={{
                        marginTop: '50vh',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        opacity: currentStepIndex === 3 ? 1 : 0.2,
                      }}
                    >
                      I'm a Scrollama Step of index 3
                    </div>
                  </Step>    
              </Scrollama>
            </div>
  

{/*

          <Scrollama onStepEnter={onStepEnter}>
          <Step data={1}>
            <div  >
 
            </div>
          </Step>
          <Step data={2}>
          <div className="section storymap-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?

              </div>
          </Step>
              
          </Scrollama>
*/}
        </>
      )
    }


  export default StoryMap;