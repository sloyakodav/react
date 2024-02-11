import { useState } from "react";
const user = { name: "brahim", password: "logInNow" };
useState;
const UserContainer = () => {
  return "hello world";
  const FLex = {
    display: "flex",
    gap: "1rem",
  };
  const btn = {
    marginLeft: "1rem",
  };
  const user = HER.user;
  const setUser = HER.login;

  return (
    <div style={(FLex, btn)}>
      {" "}
      {user?.name ? (
        <div>
          {`hello again ${user.name},`}
          <button
            onClick={() => {
              setUser("");
            }}
            style={btn}
            className="btn"
          >
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
