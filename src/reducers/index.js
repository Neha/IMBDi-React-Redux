import fetchDataReducer from "./fetchDataReducer";
import fetchSeasonDetails from "./fetchSeasonDetailsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  data: fetchDataReducer,
  seasonsData: fetchSeasonDetails
});
