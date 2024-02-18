import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [name, setName] = useState("brahim");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGContext = () => useContext(GlobalContext);
export default AppContext;
