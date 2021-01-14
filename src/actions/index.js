export const SET_CATEGORY = "SET_CATEGORY";
export const SET_WHOLE_GROUP = "SET_WHOLE_GROUP";
export const SET_POINTS = "SET_POINTS";

//action for setting a category to true or false (e.g. clothes in recycling, clothes in stores)
export const setCategory = (category, group) => {
  return {
    type: "SET_CATEGORY",
    payload: {category: category,
              group: group},
  };
};

//action for setting a whole group of categories e.g. recycling, stores and yards
export const setWholeGroup = (group) => {
  return {
    type: "SET_WHOLE_GROUP",
    payload: {group: group},
  };
};

//action to update the current point pool depending on the activated groups or categories
export const setPoints = (categories) => {
    console.log("action", categories)
    return {
      type: "SET_POINTS",
      payload: {categories: categories},
    };
  };
