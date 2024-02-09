import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import * as Books from "./js/Books.js";
import BookContainer from "./js/Book.js";
import img from "./images/book-1.jpg";
import { data } from "./js/Books.js";
console.log(img); //there is a problem with the pictures
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookContainer></BookContainer>);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
console.log(Books.ZaBooks);
const Kick = Books.KICK;
Kick("check this if it will console of course it will");
