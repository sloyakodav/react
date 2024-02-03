// 8:30 fin ghadi thbs lioma!!!!!
import UseStateObject from "./assets/tutorial/04-project-structure/final/Example/FirstComponent.jsx";
import Final from "./assets/tutorial/01-useState/final/03-useState-array.jsx";
import "./App.css";
import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
const App = () => {
  const [go, setGo] = useState(false);
  const [chan, setChan] = useState(false);
  useEffect(() => {
    console.log(go);
  }, []);
  const Button = document.getElementById("TheBTN");
  const changeC = () => {
    setChan(!chan);
    if (chan) {
      Button.classList.add("btn");
    } else {
      Button.classList.remove("btn");
    }
  };
  const RemoveAllCompAndJustUseMe = () => {
    return (
      <div>
        <h1>im the new comp "just a function inside "</h1>
        <button onClick={() => setGo(!go)}> bring me back</button>
      </div>
    );
  };
  if (go) {
    return (
      <div>
        {go && <RemoveAllCompAndJustUseMe />}
        <button onClick={() => changeC()} id="TheBTN">
          change me
        </button>
        <SomeIN />
      </div>
    );
  } else {
    return (
      <div>
        <h1>i will study on germany</h1>
        <button onClick={() => setGo(!go)}>change all of me</button>
        <h1>.</h1>
        <h1
          onClick={() => {
            console.log("click me daddy");
          }}
        ></h1>
        <h1>.</h1>
        <h1>.</h1>
        <button onClick={() => changeC()} id="TheBTN">
          change me
        </button>
        <UseStateObject />
      </div>
    );
  }
};
const SomeIN = () => {
  useEffect(() => {
    console.log("hi im first");
    const IDEo = setInterval(() => {
      console.log("hi i don't know who i am");
    }, 1000);
    return () => {
      clearInterval(IDEo);
    };
  }, []);
  return <h2>hi there</h2>;
};
export default App;
