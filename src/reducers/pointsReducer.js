const recyclingPoints = require('../../data/recycling_points.geojson');

import {
    SET_POINTS,
  } from "../actions";

/**
 * A function to find every feature of a specific category in a property of a GeoJson file
 * In the future that should all be dynamically and has therefore be ansync
 * @param {String} cat the category for wich every point should be found 
 * @param {String} property The property in which the cat should be searched
 */
const getPoints = (cat) => {
  let array = []
  if(cat.recycling.status!=true){
    for (var prop in cat.recycling) {
        if(cat.recycling[prop] == true){
          if(prop=="clothes"){
            let current = recyclingPoints.features.filter(element => element.properties.recycling_type == prop && element.properties.object_type == "container")
            array=array.concat(current);
          }
          if(prop=="organization"){
            let current = recyclingPoints.features.filter(element => element.properties.object_type == prop)
            array=array.concat(current);
          } 
          else{ 
            let current = recyclingPoints.features.filter(element => element.properties.recycling_type == prop)
            array=array.concat(current);
          }
        }
    }  
  }
  else{
    let current = recyclingPoints.features.filter(element => element.properties.object_type=="container" ||
                                                            element.properties.object_type =="wasteBasket"||
                                                            element.properties.object_type =="givebox"||
                                                            element.properties.object_type =="publicBookshelf")
    array=array.concat(current);
  }
  if(cat.shop.status!=true){
    for (var prop in cat.shop) {
        if(cat[prop] == true){  
          if(prop=="diverse"|| prop =="clothes"){    
            let current = recyclingPoints.features.filter(element => element.properties.recycling_type == prop && element.properties.object_type == secondHandStore)
            array=array.concat(current);
          }
          else{
            let current = recyclingPoints.features.filter(element => element.properties.recycling_type == prop && element.properties.object_type == secondHandStore)
            array=array.concat(current); 
          }
        }
    }  
  }
  else{
    let current = recyclingPoints.features.filter(element => element.properties.object_type=="repairShop"||
                                                            element.properties.object_type =="secondHandStore"||
                                                            element.properties.object_type =="Store")
    array=array.concat(current);
  }
  if(cat.yard.status==true){
    console.log("yes")
    let current = recyclingPoints.features.filter(element => element.properties.object_type=="recyclingYard")
    console.log(current)
    array=array.concat(current);
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