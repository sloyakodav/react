import React, { createContext, useState } from "react";
import NavLinks from "./navLinks";
export const NavContext = createContext();
console.log(NavContext);
const Navbar = () => {
  // const [log, setLog] = useState(true);
  const [user, setUser] = useState({ name: "brahim" });
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks login={setUser} name={user} />
    </nav>
  );
};
export default Navbar;
