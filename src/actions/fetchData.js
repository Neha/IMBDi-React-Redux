import BaseURL from "../API/data";
import axios from "axios";

const fetchData = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      "http://www.omdbapi.com/?t=Game%20of%20Thrones&type=series&apikey=e448099d"
    );

    dispatch({
      type: "GET_DATA",
      payload: response
    });
  };
};

export default fetchData;
