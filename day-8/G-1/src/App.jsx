import Stater from "./assets/tutorial/07-useRef/starter/01-useRef-basics";
import "./App.css";

function App() {
  return (
    <>
      <p className="counter">0</p>
      <button className="count">add 1</button>
    </>
  );
}
let value = 0;
const counter = document.querySelector(".counter");
const count = document.querySelector(".count");
console.log(count);
count.addEventListener("click", () => {
  counter.textContent = value++;
});

export default App;
