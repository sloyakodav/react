import UseStateObject from "./assets/tutorial/03-conditional-rendering/final/06-toggle-challenge.jsx";
import Final from "./assets/tutorial/01-useState/final/03-useState-array.jsx";
import "./App.css";
import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
const App = () => {
  const [like, setLike] = useState(false);
  useEffect(() => {
    console.log(like);
  }, []);
  console.log(like);
  return (
    <div>
      <button onClick={() => setLike(!like)}>
        change the false to true and the true to false
      </button>
      {like && <ADDit />}
      <UseStateObject />
    </div>
  );
};
const ADDit = () => {
  return (
    <div>
      <h2>BOO</h2>
    </div>
  );
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
