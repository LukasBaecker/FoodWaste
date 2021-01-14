import { constant } from "underscore";
import {
  SET_CATEGORY,
  SET_WHOLE_GROUP
} from "../actions";

const recyclingPoints = require('../../data/recycling_points.geojson');

const initialState={"recycling":{
    "status": false,
    "glass": false,
    "individualWaste": false,
    "clothes": false,
    "EverydayObject": false,
    "books": false,
    "organization": false,
  },
  "shop":{
    "status": false,
    "store": false,
    "repair": false,
    "clothes": false,
    "clothes, toys": false,  
    "diverse": false,
    "multimedia": false,
    "furniture": false
  },
  "yard":{
    "status": false
  },
  }

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      let cat = action.payload.category
      let group = action.payload.group
      state[group][cat] = !state[group][cat]
      return state;
    case SET_WHOLE_GROUP:
      state[action.payload.group].status = !state[action.payload.group].status
      return state
    default:
      return state;
  }
};

export default categoryReducer;