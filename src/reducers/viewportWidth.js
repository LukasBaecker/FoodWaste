import {SET_VIEWPORT_WIDTH} from "../actions";

let initialState = window.innerWidth

const scrollTopReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VIEWPORT_WIDTH:
        let viewportWidth = action.payload.viewportWidth
        return viewportWidth
      default:
        return state;
    }
  };
  
  export default scrollTopReducer;