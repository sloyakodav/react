import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
import LET from "./testing/list.jsx";
import TransferMe from "./assets/tutorial/06-forms/final/02-user-challenge.jsx";
import LEt from "./testing/list.jsx";
import { List } from "./testing/list.jsx";
const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelIt = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handelSubmit = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  return (
    <div>
      <form onSubmit={handelIt} action="submit">
        <label htmlFor="name">
          name:
          <input
            name="name"
            onChange={handelSubmit}
            value={user.name}
            type="text"
            id="name"
          />
        </label>
        <label htmlFor="email">
          email:
          <input
            name="email"
            onChange={handelSubmit}
            value={user.email}
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          email:
          <input
            name="password"
            onChange={handelSubmit}
            value={user.password}
            id="password"
            type="email"
          />
        </label>
        <button className="btn">submit</button>
      </form>
    </div>
  );
};
export default App;
