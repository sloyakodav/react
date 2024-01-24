import Stater from "./assets/tutorial/07-useRef/starter/01-useRef-basics";
import "./App.css";

function App() {
  return (
    <>
      <p className="counter">0</p>
      <button onClick={CONtai} className="count">
        add 1
      </button>
    </>
  );
}
let value = 0;
const counter = document.querySelector(".counter");

const counting = () => {
  counter.textContent = value++;
};
const CONtai = () => {
  counting();
};
export default App;
