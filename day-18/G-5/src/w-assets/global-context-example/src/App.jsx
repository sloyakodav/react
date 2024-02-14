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
import reducerFunc from "./js/useReducer.js";
function App() {
  const [state, dispatch] = useReducer(reducerFunc, defaultState);
  // dispatch({
  //   type: "SOME_ACTION_TYPE",
  //   payload: { name: "brahim" },
  // });

  // console.log(state);
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
  const removePerson = (id) => {
    const newData = state.people.filter((item) => item.id != id);
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
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
                removePerson(id);
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
