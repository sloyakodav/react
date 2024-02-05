import { useReducer, useState } from "react";
import React from "react";
import { data } from "./data.js";
import { useEffect } from "react";
import { render } from "react-dom";
const url = "https://api.github.com/users/QuincyLarson";
import LET from "./testing/list.jsx";
import TransferMe from "./assets/tutorial/06-forms/final/01-controlled-inputs.jsx";
import LEt from "./testing/list.jsx";
import { List } from "./testing/list.jsx";
const App = () => {
  const toCent = {
    justifyContent: "center",
    padding: "1rem",
    margin: "1rem",
    backgroundColor: "gray",
    borderRadius: "15px",
  };
  const borderRadius = {
    marginTop: "1rem",
    padding: " 0.5rem 1rem ",
    borderRadius: "15px",
  };
  return (
    <div>
      <div style={toCent}>
        <form action="submit">
          name: -
          <input className="Name" style={borderRadius} required type="text" />
          email: -
          <input required className="Email" style={borderRadius} type="email" />
        </form>
        <h2>.</h2>
        <button onClick={MoreWork} type="submit">
          submit
        </button>
      </div>
      <TransferMe />
    </div>
  );
};
const MoreWork = () => {
  const Email = document.querySelector(".Email");
  const Name = document.querySelector(".Name");
  console.log(`the name:${Name.value} the email:${Email.value}`);
};
{
  /* <LEt />
      <TransferMe />
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <List /> */
}
// const SomeIN = () => {
//   useEffect(() => {
//     const DoSomeT = () => {
//       console.log("im going down");
//     };
//     window.addEventListener("scroll", DoSomeT);
//     return () => window.removeEventListener("scroll", DoSomeT);
//   }, []);
//   return <h2>hi there</h2>;
// };

// const [go, setGo] = useState(false);
// const [chan, setChan] = useState(false);
// useEffect(() => {
//   console.log(go);
// }, []);
// const Button = document.getElementById("TheBTN");
// const changeC = () => {
//   setChan(!chan);
//   if (chan) {
//     Button.classList.add("btn");
//   } else {
//     Button.classList.remove("btn");
//   }
// };
// const RemoveAllCompAndJustUseMe = () => {
//   return (
//     <div>
//       <h1>im the new comp "just a function inside "</h1>
//       <button onClick={() => setGo(!go)}> bring me back</button>
//     </div>
//   );
// };
// if (go) {
//   return (
//     <div>
//       {go && <RemoveAllCompAndJustUseMe />}
//       <button onClick={() => changeC()} id="TheBTN">
//         change me
//       </button>
//       <SomeIN />
//     </div>
//   );
// } else {
//   return (
//     <div>
//       <h1>i will study on germany</h1>
//       <button onClick={() => setGo(!go)}>change all of me</button>
//       <h1>.</h1>
//       <h1
//         onClick={() => {
//           console.log("click me daddy");
//         }}
//       ></h1>
//       <h1>.</h1>
//       <h1>.</h1>
//       <button onClick={() => changeC()} id="TheBTN">
//         change me
//       </button>
//       <UseStateObject />
//     </div>
//   );
// }
export default App;
