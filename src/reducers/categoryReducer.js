import {
  SET_CATEGORY,
} from "../actions";

const initialState = {
    "glass": false,
    "individualWaste": false,
    "clothes": false,
    "givebox": false,
    "openBookshelf": false,
    "store": false,
    "sharing": false,
    "repair": false,
    "organisation": false,
    "mutliple": false
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      let cat = action.payload.category
      state[cat] = !state[cat]
      return state;
    default:
      return state;
  }
};

export default categoryReducer;