import Stater from "./assets/tutorial/07-useRef/starter/01-useRef-basics";
import Final from "./assets/tutorial/01-useState/final/03-useState-array.jsx";
import "./App.css";
import { useState } from "react";
import React from "react";
import { data } from "./data.js";
const TheNames = (maVEGA) => {
  const { name, id } = maVEGA;
  return (
    <section>
      <h1 className={`${name}TXT`}>{name}</h1>
      <button
        onClick={removeAName(id)}
        className={name}
      >{` remove ${name}`}</button>
    </section>
  );
};
const removeAName = (id) => {
  const newData = data.filter((item) => item.id != id);
  console.log(newData);
};
const App = () => {
  return (
    <div className="container">
      {data.map((vega) => {
        const { name, id } = vega;
        console.log(id);
        return <TheNames {...vega} key={id} />;
      })}
    </div>
  );
};
const john = document.querySelector(".john");
const johnTXT = document.querySelector(".johnTXT");
const peter = document.querySelector(".peter");
const peterTXT = document.querySelector(".peterTXT");
const susan = document.querySelector(".susan");
const susanTXT = document.querySelector(".susanTXT");
const anna = document.querySelector(".anna");
const annaTXT = document.querySelector(".annaTXT");

// john.addEventListener("click", () => {
//   johnTXT.textContent = "";
//   john.textContent = "";
// });
// peter.addEventListener("click", () => {
//   peterTXT.textContent = "";
//   peter.textContent = "";
// });
// susan.addEventListener("click", () => {
//   susanTXT.textContent = "";
//   susan.textContent = "";
// });
// anna.addEventListener("click", () => {
//   annaTXT.textContent = "";
//   anna.textContent = "";
// });}
/////////////////////////////////////////////////
//  <h1 className="peterTXT">{data[1].name}</h1>
//       <button className="peter">remove peter</button>
//       <h1 className="susanTXT">{data[2].name}</h1>
//       <button className="susan">remove susan</button>
//       <h1 className="annaTXT">{data[3].name}</h1>
//       <button className="anna">remove anna</button>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function App() {
//   const [value, func] = useState(0);
//   const clicky = () => {
//     func(value + 1);
//   };
//   return (
//     <>
//       <p>{value}</p>
//       <button onClick={clicky} className="count">
//         useState
//       </button>
//       <button onClick={clicker} className="count">
//         vanillaJS
//       </button>
//       <p className="counter">0</p>
//     </>
//   );
// }
// let cline = 0;
// const clicker = () => {
//   const counter = document.querySelector(".counter");

//   cline++;
//   counter.textContent = cline;
//   localStorage.setItem("value", cline);
// };
// const g = 5;
// for (let i = 0; i < g; i++) {
//   console.log(" ");
//   for (let i = 0; i < 5; i++) {
//     console.log("*");
//   }
// }
export default App;
