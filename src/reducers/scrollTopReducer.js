import {SET_SCROLL_TOP} from "../actions";

let initialState = 0

const scrollTopReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SCROLL_TOP:
        let scrollTop = action.payload.scrollTop
        return scrollTop
      default:
        return state;
    }
  };
  
  export default scrollTopReducer;