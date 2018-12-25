import BaseURL from "../API/data";

const fetchSeasonDetails = id => {
  return async dispatch => {
    const response = await BaseURL.get(`&Season=${id}`);

    dispatch({
      type: "GET_SEASONS",
      payload: response // response.data
    });
  };
};

export default fetchSeasonDetails;
