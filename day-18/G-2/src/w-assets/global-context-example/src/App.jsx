import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useGContext } from "./context";
// import { useGlobalContext } from "./context";
import React from "react";
import { data } from "../../../data.js";
function App() {
  const [people, setPeople] = useState(data);
  const [onOff, setOnOff] = useState(false);
  const removeName = (valueToRemove) => {
    const arrayT = people.filter((item) => item.id !== valueToRemove);

    setPeople(arrayT);
  };
  const clearAll = () => {
    setPeople([]);
  };
  console.log(people);
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button
              onClick={() => {
                removeName(id);
                console.log(people);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      {onOff ? (
        <div>
          <button
            onClick={() => {
              setOnOff(!onOff);
              setPeople(data);
            }}
          >
            restart
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setOnOff(!onOff);
              setPeople([]);
            }}
          >
            clear all
          </button>
        </div>
      )}
    </div>
  );
}
export default App;
