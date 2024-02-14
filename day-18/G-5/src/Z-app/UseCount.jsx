import { useState } from "react";
const useCounter = () => {
  const [value, setValue] = useState(0);
  return [value, setValue];
};

export default useCounter;
