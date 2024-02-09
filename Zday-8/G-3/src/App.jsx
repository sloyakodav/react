import Stater from "./assets/tutorial/07-useRef/starter/01-useRef-basics";
import "./App.css";
import { useState } from "react";
import React from "react";
function App() {
  const [value, func] = useState(0);
  const clicky = () => {
    func(value + 1);
  };
  return (
    <>
      <p>{value}</p>
      <button onClick={clicky} className="count">
        useState
      </button>
      <button onClick={clicker} className="count">
        vanillaJS
      </button>
      <p className="counter">0</p>
    </>
  );
}
let cline = 0;
const clicker = () => {
  const counter = document.querySelector(".counter");

  cline++;
  counter.textContent = cline;
  localStorage.setItem("value", cline);
};
// const g = 5;
// for (let i = 0; i < g; i++) {
//   console.log(" ");
//   for (let i = 0; i < 5; i++) {
//     console.log("*");
//   }
// }
export default App;
