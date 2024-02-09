import UseStateObject from "./assets/tutorial/02-useEffect/final/01-code-example.jsx";
import Final from "./assets/tutorial/01-useState/final/03-useState-array.jsx";
import "./App.css";
import { useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const App = () => {
  const [value, setValue] = useState(0);
  const update = () => {
    setValue((currentIndex) => {
      return currentIndex + 1;
    });
  };
  const Render = () => {
    console.log("im new");
  };
  const secRender = () => {
    console.log("im second ");
  };
  useEffect(() => {
    Render();
  }, []);
  useEffect(() => {
    secRender();
  });
  return (
    <div className="container">
      <h1>{value}</h1>
      <button onClick={update}>update me</button>
      <UseStateObject />
    </div>
  );
};

// const [number, catalog] = useState([
//   5, 6, 2, 3,
//   // { num1: 5, num2: 6, num3: 2, num4: 3 },
// ]);
// const [gotcha, callMe] = useState("Gotcha");
// const got = () => {
//   callMe((GOT) => {
//     const NEW = Math.floor(Math.random() * 10);

//     console.log(GOT);
//     return NEW;
//   });
// };
// const tryHard = (a, b, c, d) => {
//   catalog({ number1: a, number2: b, number3: c, number4: d });
//   console.log(number.number1);
// };
// const onigachima = (a, b, c, d) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// };

/////////////////////////////////////////////////////////////////////////////////////////////////
// const removeItem = (people, id, name, setPeople) => {
//   const newData = people.filter((item) => item.id !== id);
//   setPeople(newData);

//   // const NAME = document.querySelector(`.${name}CONT`);
//   // NAME.remove();
//   // console.log(newData);
//   // console.log(name);
// };
// const clearAllItems = (people, setPeople) => {
//   setPeople([]);
//   // console.log(people);
//   // const allContainer = document.querySelector(`.allContainer`);
//   // allContainer.remove();
// };
// const App = () => {
//   const [people, setPeople] = React.useState(data);
//   return (
//     <div className="allContainer">
//       <h2>the use state version</h2>
//       {people.map((theP) => {
//         const { name, id } = theP;
//         // removeItem(people, id, name);
//         return (
//           <div
//             style={{ marginBottom: "1rem" }}
//             className={`${name}CONT`}
//             key={id}
//           >
//             {name}
//             <button
//               style={{ marginLeft: "1rem" }}
//               onClick={() => removeItem(people, id, name, setPeople)}
//             >
//               clear {name}
//             </button>
//           </div>
//         );
//       })}
//       <button onClick={() => clearAllItems(people, setPeople)}>
//         clear all
//       </button>
//     </div>
//   );
// };
// const log = console.log;
// log("me");
// const TheNames = (maVEGA) => {
//   const { name, id } = maVEGA;
//   return (
//     <section>
//       <h1 className={`${name}TXT`}>{name}</h1>
//       <button
//         onClick={() => cons(name, id)}
//         className={name}
//       >{` remove ${name}`}</button>
//     </section>
//   );
// };
// const cons = (name, id) => {
//   check(name);
//   const nameG = document.querySelector(`.${name}TXT`);
//   const bruh = document.querySelector(`.${name}`);
//   nameG.remove();
//   bruh.remove();
//   const newData = data.filter((item) => item.id != id);
//   console.log(newData);
// };
// const check = (name) => {
//   console.log(name);
// };
// const cleary = () => {
//   data.length = 0;
//   const contai = document.querySelector(".container");
//   contai.remove();
//   console.log(data);
// };
// const App = () => {
//   return (
//     <>
//       <div className="container">
//         {data.map((vega) => {
//           const { name, id } = vega;
//           return <TheNames {...vega} key={id} />;
//         })}
//       </div>
//       <h2>CLEAR by ONE</h2>
//       <button onClick={cleary}>clear all the list </button>
//     </>
//   );
// };
// const removeItem = (people, id, name) => {
//   const newData = people.filter((item) => item.id != id);
//   const NAME = document.querySelector(`.${name}CONT`);
//   NAME.remove();
//   console.log(newData);
//   console.log(name);
// };
// const clearAllItems = (people) => {
//   people.length = 0;
//   console.log(people);
//   const allContainer = document.querySelector(`.allContainer`);
//   allContainer.remove();
// };
// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);
//   return (
//     <div className="allContainer">
//       <h2>the use state version</h2>
//       {people.map((theP) => {
//         const { name, id } = theP;
//         // removeItem(people, id, name);
//         return (
//           <div className={`${name}CONT`} key={id}>
//             {name}
//             <button onClick={() => removeItem(people, id, name)}>
//               clear {name}
//             </button>
//           </div>
//         );
//       })}
//       <button onClick={() => clearAllItems(people)}>clear all</button>
//     </div>
//   );
// };
///////////////////////////////////////////////////////////////////////
// const john = document.querySelector(".john");
// const johnTXT = document.querySelector(".johnTXT");
// const peter = document.querySelector(".peter");
// const peterTXT = document.querySelector(".peterTXT");
// const susan = document.querySelector(".susan");
// const susanTXT = document.querySelector(".susanTXT");
// const anna = document.querySelector(".anna");
// const annaTXT = document.querySelector(".annaTXT");
// const removeAName = (id) => {
//   const newData = data.filter((item) => item.id != id);
//   console.log(newData);
// };
// const container = (id) => {
//   removeAName(id);
// };
// const TRY = () => {
//   let id = 5
//   container(id);
// };
// TRY();
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
