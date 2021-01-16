import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer.js"
import pointReducer from "./pointsReducer.js";
import scrollTopReducer from "./scrollTopReducer.js"

const rootReducer = combineReducers({
    categories: categoryReducer,
    points: pointReducer,
    scrollTop: scrollTopReducer,
});

export default rootReducer;
