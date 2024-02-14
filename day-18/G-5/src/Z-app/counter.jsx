import { useState } from "react";
import useCounter from "./UseCount";
const Counter = () => {
  const [x, setValue] = useCounter();
  return (
    <button
      onClick={() => {
        setValue(x + 1);
      }}
    >
      {" "}
      count {x}
    </button>
  );
};
export default Counter;
