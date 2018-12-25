import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import combineReducers from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

const store = createStore(combineReducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
