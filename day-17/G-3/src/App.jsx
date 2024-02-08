import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
import TransferMe from "./assets/tutorial/06-forms/final/04-other-inputs.jsx";
const trying = ["1", "2", "3", "4"];
const App = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const chakn = useRef(false);
  useEffect(() => {
    console.log(chakn.current);
    if (!chakn.current) {
      chakn.current = true;
      return;
    } else {
      chakn.current = false;
      return;
    }
  }, [value]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer);
    console.log(refContainer.current.value);
    e.currentTarget.reset();
    // refContainer.current.reset();
  };
  const color = {
    color: "black",
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            style={color}
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};
export default App;
