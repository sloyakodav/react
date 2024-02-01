import UseStateObject from "./assets/tutorial/03-conditional-rendering/final/05-short-circuit-examples.jsx";
import Final from "./assets/tutorial/01-useState/final/03-useState-array.jsx";
import "./App.css";
import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
const App = () => {
  const [oneX, setOneX] = useState("");
  const [oneY, setOneY] = useState("Oll");
  const [user, setUser] = useState({ name: "alexander" });
  const [edit, setEdit] = useState(false);
  const ONES = oneX || "hi there im using whatsapp";
  const BALA = () => {
    return (
      <div>
        <h4>ove heya</h4>
        <h5>{user.name}</h5>
      </div>
    );
  };
  const TOFALSE = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const changeName = (nowDay) => {
    setUser({ name: nowDay });
  };
  const deleteName = () => {
    setUser(0);
  };

  // const TRU = true;
  // const FAL = "";
  // console.log(!TRU);
  // console.log(!FAL);
  return (
    <div>
      {/* <h2>{oneX || "oneX"}</h2>
      <h2>{oneY || "oneY"}</h2>
      <h2>{oneX && oneY}</h2>
      <h2>{oneY && "oneX"}</h2>
      <h2>{ONES}</h2> */}
      <h2>{user.name || oneY}</h2>
      <h2>{oneX && BALA()}</h2>
      <h2>{!oneX && BALA()}</h2>
      <h2>{oneY && BALA()}</h2>
      <h6>{oneX || "no value!"}</h6>
      <button onClick={TOFALSE}>{edit ? "edit" : "add"}</button>
      {user ? (
        <div>yo name is {user.name}</div>
      ) : (
        <div>yo name dose not exist</div>
      )}
      <button onClick={() => changeName("alexuse")}> change name</button>
      <p>relax</p>
      <button onClick={deleteName}> deleteName</button>
      <UseStateObject />
    </div>
  );
};

export default App;
