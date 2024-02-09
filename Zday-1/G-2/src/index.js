import React from "react";
import ReactDOM from "react-dom/client";
import Testing from "./testing.js";
import Test from "./Test.js";
// function Greetings() {
//   return (
//     <h2 className="forBrahim" id="forBrahim">
//       <div className="getTheGuy">brahim's first component</div>
//     </h2>
//   );
// }
function NameH() {
  return <h2>hody jons</h2>;
}
function Message() {
  return <p>this is a message from hody jons</p>;
}
function Greetings() {
  return (
    <div>
      <NameH />
      <Message />
    </div>
  );
}
// function Greetings() {
//   return (
//     <div>
//       <h2>hody jons</h2>
//       <p>this is a message from hody jons</p>
//     </div>
//   );
// }
// const Brahim = () => {
//   return (
//     <div>
//       <div> brahim create his first component the real one without copy</div>
//     </div>
//   );
// };
// const Brahim = () => {
//   return React.createElement("h1", {}, "hello from react");
// };
// const Brahim = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("p", {}, "lisgo lisgo lisgo lisgo")
//   );
// };
// const Brahim = () => {
//   return (
//     <React.Fragment>
//       <div className="Aclass">
//         <h3>hello master</h3>
//         <ul>
//           <li>
//             <a href="#">hi there im using whatsapp</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hi there im using whatsapp</h2>
//     </React.Fragment>
//   );
// };
const Brahim = () => {
  return (
    <div tabIndex={1}>
      <button>click here</button>
      <label htmlFor="name"></label>
      <input readOnly={false} id="name" />
    </div>
  );
};
const brahimN = ReactDOM.createRoot(document.getElementById("forBrahim"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greetings />);
brahimN.render(<Test />);
brahimN.render(<Testing></Testing>);
brahimN.render(<Brahim />);
