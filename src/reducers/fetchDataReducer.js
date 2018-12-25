const fetchDataReducer = (state = [], action) => {
  if (action.type == "GET_DATA") {
    return [...state, action.payload];
  }
  return state;
};

export default fetchDataReducer;
