import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
import TransferMe from "./assets/tutorial/06-forms/final/04-other-inputs.jsx";
const trying = ["1", "2", "3", "4"];
const App = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const DATA = new FormData(e.currentTarget);
    // const email = DATA.get("email");
    // const name = DATA.get("name");
    console.log([...DATA.entries()]);
    const NewPerson = Object.fromEntries(DATA);
    const { name, password, email } = NewPerson;
    console.log(`name :${name} ,------------
    email :${email},------------
     password :${password}`);
    e.currentTarget.reset();
  };
  const Bacl = () => {
    setValue(value + 1);
  };
  const color = {
    color: "black",
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            style={color}
            type="text"
            className="form-input"
            id="name"
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            style={color}
            type="email"
            className="form-input"
            id="email"
            name="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            style={color}
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <div>
        {/* {trying.map((X) => {
          return <h3 key={value}>{useEffect(() => {Bacl()})}g</h3>;
        })} */}
      </div>
    </div>
  );
};
export default App;
