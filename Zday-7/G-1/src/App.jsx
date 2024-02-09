import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num, Chala] = useState(0);

  return (
    <>
      <img src={reactLogo} className="logo React" alt="" />
      <h1>DoBeLikeThat</h1>
    </>
  );
}
export default App;
