import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
