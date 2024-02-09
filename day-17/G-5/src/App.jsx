import { useReducer, useState, useRef } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
import TransferMe from "./assets/tutorial/06-forms/final/04-other-inputs.jsx";
import useToggle from "./testing/useToggle.js";
const trying = ["1", "2", "3", "4"];
const url = "https://api.github.com/users/QuincyLarson";
const App = () => {
  const { user, isError, loading } = useToggle(url);
  console.log(user);
  console.log(isError);
  console.log(loading);
  const { login, html_url, avatar_url, id, bio, name, company } = user;
  const picStyle = {
    borderRadius: "50%",
    border: "1px solid black",
  };
  if (loading) {
    return (
      <div className="container">
        <h1>loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="container">
        <h1>error happen</h1>
      </div>
    );
  }
  return (
    <div className="container" key={id}>
      <h3>{name}</h3>
      <img style={picStyle} width="150px" src={avatar_url} alt={login} />
      <h6>works at {company}</h6>
      <h6>{bio}</h6>
      <a href={html_url}>profile</a>
    </div>
  );
};
export default App;
