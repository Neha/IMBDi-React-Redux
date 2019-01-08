import BaseURL from "../API/data";
import axios from "axios";

const fetchData = () => {
  try {
    return async dispatch => {
      const response = await axios.get(
        "https://www.omdbapi.com/?t=Game%20of%20Thrones&type=series&apikey=e448099d"
      );

      dispatch({
        type: "GET_DATA",
        payload: response
      });
    };
  } catch (error) {
    return error;
  }
};

export default fetchData;
