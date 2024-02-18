import { useState } from "react";
import { data } from "../data";
const useData = () => {
  const [people, setPeople] = useState(data);
  return [people, setPeople];
};
export default useData;
