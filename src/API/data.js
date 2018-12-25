import axios from "axios";

export default axios.create({
  baseURL:
    "http://www.omdbapi.com/?t=Game%20of%20Thrones&type=series&apikey=e448099d&"
});
