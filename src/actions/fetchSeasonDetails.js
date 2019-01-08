import BaseURL from "../API/data";
import axios from "axios";

const fetchSeasonDetails = id => {
  try {
    return async dispatch => {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=Game%20of%20Thrones&type=series&apikey=e448099d&Season=${id}`
      );

      dispatch({
        type: "GET_SEASONS",
        payload: response // response.data
      });
    };
  } catch (error) {
    return error;
  }
};

export default fetchSeasonDetails;
