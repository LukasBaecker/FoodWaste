const recyclingPoints = require('../../data/recycling_points.geojson');

const pointNumberReducer = (state = recyclingPoints.features.length, action) => {
      return state;
};

  export default pointNumberReducer;