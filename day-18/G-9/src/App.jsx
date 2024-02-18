import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
import List from "./Z-app/gbt/list.jsx";
const trying = [
  { name: "1", id: "1" },
  { name: "2", id: "2" },
  { name: "3", id: "3" },
  { name: "4", id: "4" },
];
const App = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} />
    </section>
  );
  // const handleSubmit = (name) => {
  //   if (name.trim() !== "") {
  //     const id = new Date().getTime();
  //     setList([...list, { name: name, id: id }]);
  //   }
  // };

  // return (
  //   <div>
  //     <h1>List Items:</h1>
  //     <List list={list} /> {/* Pass list as prop */}
  //     <hr />
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         handleSubmit(e.currentTarget.elements.name.value);
  //         e.currentTarget.elements.name.value = "";
  //       }}
  //     >
  //       <label htmlFor="name">
  //         Name:
  //         <input type="text" id="name" />
  //       </label>
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );
  // const [list, setList] = useState(trying);
  // let id = new Date().getTime();
  // const handleSubmits = (e) => {
  //   e.preventDefault();
  //   const name = e.currentTarget.name.value;
  //   if (name !== null) {
  //     setList([...list, { name: name, id: id }]);
  //   }
  //   e.currentTarget.name.value = "";
  // };
  return (
    <div>
      <h1>------------</h1>
      {/* <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="name">
          name
          <input type="text" id="name" />
        </label>
        <button>submit</button>
      </form>
      {list.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })} */}
    </div>
  );
};

export default App;
