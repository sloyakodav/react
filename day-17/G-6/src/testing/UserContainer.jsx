import { useState } from "react";
const user = { name: "brahim", password: "logInNow" };
useState;
const UserContainer = () => {
  const [Log, setLog] = useState(true);
  const FLex = {
    display: "flex",
    gap: "1rem",
    marginLeft: "1rem",
  };
  if (!Log) {
    return (
      <div>
        <div style={FLex}>
          <ul>
            <li>please login</li>
          </ul>
        </div>
      </div>
    );
  }
  console.log(Log);
  return (
    <div style={FLex}>
      <ul>
        <li>hello there , {user.name}</li>
      </ul>
      <button onClick={() => setLog(!Log)} className="btn">
        log Out
      </button>
    </div>
  );
};
export default UserContainer;
