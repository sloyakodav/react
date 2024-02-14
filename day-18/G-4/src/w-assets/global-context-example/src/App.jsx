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
  if (action.type === "CLEAR_LIST") {
    return { ...state, people: [{ name: "brahim", id: "1" }] };
  } else if (action.type === "RESET_ALL") {
    return { ...state, people: data };
  }
  return state;
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
    dispatch({ type: "CLEAR_LIST", payload: { name: "brahim" } });
    // setPeople([]);
  };
  const resetAll = () => {
    dispatch({ type: "RESET_ALL", payload: data });
  };

  console.log(state);
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
              resetAll();
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
