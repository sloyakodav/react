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
  console.log(go);
  const RemoveAllCompAndJustUseMe = () => {
    return (
      <div>
        <h1>im the new comp "just a function inside "</h1>
        <button onClick={() => setGo(!go)}> bring me back</button>
      </div>
    );
  };
  if (go) {
    return <div>{go && <RemoveAllCompAndJustUseMe />}</div>;
  } else {
    return (
      <div>
        <h1>i will study on germany</h1>
        <button onClick={() => setGo(!go)}>change all of me</button>

        <h1>.</h1>
        <h1>.</h1>
        <h1>.</h1>

        <UseStateObject />
      </div>
    );
  }
};

export default App;
// const [oneX, setOneX] = useState("");
//   const [oneY, setOneY] = useState("Oll");
//   const [user, setUser] = useState({ name: "alexander" });
//   const [edit, setEdit] = useState(false);
//   const ONES = oneX || "hi there im using whatsapp";
//   const BALA = () => {
//     return (
//       <div>
//         <h4>ove heya</h4>
//         <h5>{user.name}</h5>
//       </div>
//     );
//   };
//   const TOFALSE = () => {
//     if (edit) {
//       setEdit(false);
//     } else {
//       setEdit(true);
//     }
//   };
//   const changeName = (nowDay) => {
//     setUser({ name: nowDay });
//   };
//   const deleteName = () => {
//     setUser(0);
//   };

// const TRU = true;
// const FAL = "";
// console.log(!TRU);
// console.log(!FAL);
