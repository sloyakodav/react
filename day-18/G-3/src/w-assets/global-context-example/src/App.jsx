import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useGContext } from "./context";
// import { useGlobalContext } from "./context";
import React from "react";
import { data } from "../../../data.js";
const defaultState = {
  people: data,
};
const reducerFunc = (state, action) => {
  console.log(action);
};
function App() {
  const [state, dispatch] = useReducer(reducerFunc, defaultState);
  // dispatch({
  //   type: "SOME_ACTION_TYPE",
  //   payload: { name: "brahim" },
  // });

  // console.log(state);
  // const [people, setPeople] = useState(data);
  const [onOff, setOnOff] = useState(false);
  const removeName = (valueToRemove) => {
    // const arrayT = people.filter((item) => item.id !== valueToRemove);
    // setPeople(arrayT);
  };
  const clearAll = () => {
    dispatch({ type: "CLEAR_LIST" });
    // setPeople([]);
  };
  // console.log(people);
  return (
    <div>
      {state.people.map((person) => {
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
              clearAll();
            }}
          >
            clear all
          </button>
        </div>
      )}
      {/* {people.length < 1 ? (
        <div>
          <button
            onClick={() => {
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
              setPeople([]);
            }}
          >
            clear all
          </button>
        </div>
      )} */}
    </div>
  );
}
export default App;
