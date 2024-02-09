import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
import LET from "./testing/list.jsx";
import { TransferMe } from "./testing/mainin.jsx";
import LEt from "./testing/list.jsx";
import { List } from "./testing/list.jsx";
const App = () => {
  return (
    <div>
      <LEt />
      <TransferMe />
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <List />
    </div>
  );
};

// const SomeIN = () => {
//   useEffect(() => {
//     const DoSomeT = () => {
//       console.log("im going down");
//     };
//     window.addEventListener("scroll", DoSomeT);
//     return () => window.removeEventListener("scroll", DoSomeT);
//   }, []);
//   return <h2>hi there</h2>;
// };

// const [go, setGo] = useState(false);
// const [chan, setChan] = useState(false);
// useEffect(() => {
//   console.log(go);
// }, []);
// const Button = document.getElementById("TheBTN");
// const changeC = () => {
//   setChan(!chan);
//   if (chan) {
//     Button.classList.add("btn");
//   } else {
//     Button.classList.remove("btn");
//   }
// };
// const RemoveAllCompAndJustUseMe = () => {
//   return (
//     <div>
//       <h1>im the new comp "just a function inside "</h1>
//       <button onClick={() => setGo(!go)}> bring me back</button>
//     </div>
//   );
// };
// if (go) {
//   return (
//     <div>
//       {go && <RemoveAllCompAndJustUseMe />}
//       <button onClick={() => changeC()} id="TheBTN">
//         change me
//       </button>
//       <SomeIN />
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <h1>i will study on germany</h1>
//       <button onClick={() => setGo(!go)}>change all of me</button>
//       <h1>.</h1>
//       <h1
//         onClick={() => {
//           console.log("click me daddy");
//         }}
//       ></h1>
//       <h1>.</h1>
//       <h1>.</h1>
//       <button onClick={() => changeC()} id="TheBTN">
//         change me
//       </button>
//       <UseStateObject />
//     </div>
//   );
// }
export default App;
