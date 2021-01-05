const recyclingPoints = require('../../data/recycling_points.geojson');

import {
    SET_POINTS,
  } from "../actions";


const getPoints = (cat) => {
    let array = []
    for (var prop in cat) {
        if(cat[prop] == true){  
        let current = recyclingPoints.features.filter(element => element.properties.recycling_type == prop)
        array=array.concat(current);
        }
    }
    return array

}  

  const pointReducer = (state = recyclingPoints, action) => {
    switch (action.type) {
      case SET_POINTS:
        let cat = action.payload.categories
        let points =
            {
                "type":"FeatureCollection",
                "features": getPoints(cat)
            }               
        return points;
      default:
        return state;
    }
  };
  
  export default pointReducer;