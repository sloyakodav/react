import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
import TransferMe from "./assets/tutorial/06-forms/final/04-other-inputs.jsx";
import useToggle from "./testing/useToggle.js";
const trying = ["1", "2", "3", "4"];
const App = () => {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default App;
