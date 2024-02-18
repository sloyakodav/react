import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const trying = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
  { name: "4", id: "4" },
];
import List from "./Z-app/list.jsx";
const App = () => {
  const [list, setList] = useState(trying);
  let id = new Date().getTime();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    if (name !== null) {
      setList([...list, { name: name, id: id }]);
    }
    e.currentTarget.name.value = "";
  };
  return (
    <div>
      <List />
      <h1>------------</h1>
      <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="name">
          name
          <input type="text" id="name" />
        </label>
        <button>submit</button>
      </form>
      {list.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
};

export default App;
