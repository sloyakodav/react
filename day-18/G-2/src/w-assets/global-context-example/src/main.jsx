import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContext from "./context";
import "./index.css";
import Fainal from "../../../assets/tutorial/10-useReducer/final/01-useReducer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Fainal></Fainal>
    <h1>-------------------------------------</h1>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
