const fetchSeasonDetails = (state = {}, action) => {
  state.detail = false;
  if (action.type === "GET_SEASONS") {
    state.detail = true;
    return { ...state, data: [action.payload] };
  }
  return state;
};

export default fetchSeasonDetails;
