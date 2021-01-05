export const SET_CATEGORY = "SET_CATEGORY";
export const SET_POINTS = "SET_POINTS";

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: {category: category},
  };
};

export const setPoints = (categories) => {
    return {
      type: "SET_POINTS",
      payload: {categories: categories}
    };
  };
