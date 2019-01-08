import axios from "axios";
import { TitleName, APIKEY, Type } from "../constant";

export default axios.create({
  baseURL: `https://www.omdbapi.com/?t=${TitleName}&type=${Type}&apikey=${APIKEY}`
});
