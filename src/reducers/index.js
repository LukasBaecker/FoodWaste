import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js"
import pointReducer from "./pointsReducer.js";
import pointNumberReducer from "./pointsNumberReducer"
import scrollTopReducer from "./scrollTopReducer.js"
import viewPortWidthReducer from "./viewportWidth.js"

const rootReducer = combineReducers({
    categories: categoryReducer,
    points: pointReducer,
    pointNumber: pointNumberReducer,
    scrollTop: scrollTopReducer,
    viewPortWidth: viewPortWidthReducer,

});

export default rootReducer;
