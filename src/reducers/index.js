import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js"
import pointReducer from "./pointsReducer.js";

const rootReducer = combineReducers({
    categories: categoryReducer,
    points: pointReducer

});

export default rootReducer;
