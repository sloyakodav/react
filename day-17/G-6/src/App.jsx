import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const trying = ["1", "2", "3", "4"];
const url = "https://api.github.com/users/QuincyLarson";
import Navbar from "./testing/navBar.jsx";
const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};
export default App;
