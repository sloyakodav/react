import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const trying = ["1", "2", "3", "4"];
const url = "https://api.github.com/users/QuincyLarson";
import List from "./Z-app/list.jsx";
const App = () => {
  return (
    <div>
      <List />
      {/* {people.map((item) => {
        const { id, name } = item;
        console.log("rerender");
        return (
          <div
            key={id}
            style={{ padding: "0rem", margin: "0", fontWeight: "800" }}
            className="container"
          >
            <p>{name}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default App;
