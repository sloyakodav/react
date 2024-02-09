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
  const [user, setUser] = useState(data);
  console.log(user);
  useEffect(() => {
    const get = () => {};
  });
};

export default App;
