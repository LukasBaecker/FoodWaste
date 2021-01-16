import React from "react";
import Jumbo from "./Jumbo.jsx"
import Infobox from "./Infobox.jsx"
import Plots from "./Plots.jsx"
import { setScrollTop } from "../actions/index.js";
import RSC from "react-scrollbars-custom";
import colors from "../scss/index.scss";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from "leaflet";
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

  class StoryMap extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
      this.state = {scrollTop: 0}
    }
    
    onScroll = () => {
      const scrollTop = this.myRef.current.scrollTop
      this.setState({
        scrollTop: scrollTop
      })
    }
  
    render() {
      const {
        scrollTop
      } = this.state
      return (
          <>
          <div className="containerStoryMap" >      
              <div className="section">
                  <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore natus quisquam, dignissimos assumenda ratione magnam impedit quod delectus, voluptatum odio neque cupiditate rem porro blanditiis maxime doloribus quibusdam. Quam, officiis?
                  </div>
                  <RSC id="RSC-Example" style={{ width: "100%", height: "100%" }}
                    ref={this.myRef}
                    onScroll={this.onScroll}>
                  <div className="scrollable-content content" 
                                ref={this.myRef}
                                onScroll={this.onScroll}
                  >
                        <MapContainer className="storymap" center={[51.960667, 7.626135]} zoom={13} >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                      <p>ScrollTop is {scrollTop}</p>

                      <p>ScrollTop is {scrollTop}</p>
                  </div>
                  </RSC>
              </div>
          </div>
        </>
      )
    }
  }


  export default StoryMap;