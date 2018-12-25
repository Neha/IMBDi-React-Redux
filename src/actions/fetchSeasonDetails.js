import BaseURL from "../API/data";

const fetchSeasonDetails = id => {
  return async dispatch => {
    const seasonResponse = await BaseURL.get(`&Season=${id}`);

    dispatch({
      type: "GET_SEASONS",
      payload: seasonResponse
    });
  };
};

export default fetchSeasonDetails;
