import React, { createContext, useState } from "react";
import NavLinks from "./navLinks";
export const NavContext = createContext();
console.log(NavContext.Provider);
const Navbar = () => {
  // const [log, setLog] = useState(true);
  const [user, setUser] = useState({ name: "brahim" });
  const Logout = () => {
    setUser(null);
  };
  return (
    <NavContext.Provider value={{ user, Logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks login={setUser} name={user} />
      </nav>
    </NavContext.Provider>
  );
};
export default Navbar;
