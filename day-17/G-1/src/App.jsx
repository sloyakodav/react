import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
import LET from "./testing/list.jsx";
import TransferMe from "./assets/tutorial/06-forms/final/04-other-inputs.jsx";
import LEt from "./testing/list.jsx";
import { List } from "./testing/list.jsx";
const frame = ["react", "angular", "vue", "svelte"];
const App = () => {
  const [ship, setShip] = useState(false);
  const [framework, setFramework] = useState("react");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ship);
  };
  const handelCheck = (e) => {
    console.log(e.target.checked);
    setShip(e.target.checked);
  };
  const handelFramework = (e) => {
    console.log(e.target.value);
    setFramework(e.target.value);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <h4>Other Inputs</h4>
          {/* name */}
          <div className="form-row" style={{ textAlign: "left" }}>
            <label htmlFor="shipping">
              {" "}
              <input checked={ship} onChange={handelCheck} type="checkbox" />
              Free Shipping
            </label>
          </div>
          <div className="form-row" style={{ textAlign: "left" }}>
            <label htmlFor="framework" className="form-label">
              Framework
              <select
                name="frameworks"
                value={framework}
                onChange={handelFramework}
                id="frameworks"
              >
                {frame.map((frameE) => {
                  return (
                    <option key={frameE} value={frameE}>
                      {frameE}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </form>
      </div>
      <h1>----------------</h1>
    </div>
  );
};
export default App;
