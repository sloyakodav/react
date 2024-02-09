import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
import LET from "./testing/list.jsx";
import TransferMe from "./assets/tutorial/06-forms/final/02-user-challenge.jsx";
import LEt from "./testing/list.jsx";
import { List } from "./testing/list.jsx";
const App = () => {
  const [theName, setTheName] = useState("");
  const [user, setUser] = useState(data);
  // const [obj, setObj] = useState();
  const RemoveUser = (id) => {
    const newList = user.filter((RUser) => RUser.id !== id);
    setUser(newList);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(theName);
    //  setObj({ name: theName });
    setUser([...user, { name: theName }]);
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handelSubmit} action="submit">
        <label htmlFor="name">
          name
          <input
            id="name"
            value={theName}
            onChange={(e) => {
              setTheName(e.target.value);
            }}
            type="text"
          />
        </label>

        <button className="btn">submit</button>
      </form>
      <div>
        <h3>users</h3>
        {user.map((TheUser) => {
          return (
            <div key={TheUser.id}>
              {" "}
              <h5>user: {TheUser.name}</h5>{" "}
              <button
                onClick={() => {
                  RemoveUser(TheUser.id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
