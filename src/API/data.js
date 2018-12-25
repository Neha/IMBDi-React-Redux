import axios from "axios";
import { TitleName, APIKEY, Type } from "../constant";

export default axios.create({
  baseURL: `http://www.omdbapi.com/?t=${TitleName}&type=${Type}&apikey=${APIKEY}`
});
