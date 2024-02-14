import { useState } from "react";
const user = { name: "brahim", password: "logInNow" };
useState;
import { useContext } from "react";
import { NavContext } from "./navBar";
const UserContainer = () => {
  const OBJECT = useContext(NavContext);
  console.log();
  // console.log(NavContext.Consumer);
  const Logout = useContext(NavContext).Logout;
  const FLex = {
    display: "flex",
    gap: "1rem",
  };
  const btn = {
    marginLeft: "1rem",
  };
  // const user = HER.user;
  // const setUser = HER.login;

  return (
    <div style={(FLex, btn)}>
      {" "}
      {OBJECT?.user?.name ? (
        <div>
          {`hello again ${OBJECT.user.name},`}
          <button onClick={Logout} style={btn} className="btn">
            logOut
          </button>
        </div>
      ) : (
        "please login"
      )}
    </div>
  );
};
export default UserContainer;
