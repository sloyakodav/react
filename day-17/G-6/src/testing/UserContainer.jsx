import { useState } from "react";
const user = { name: "brahim", password: "logInNow" };
useState;
const UserContainer = () => {
  const [Log, setLog] = useState(true);
  const [users,setUsers] = useState(user)
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
  const logOut = ()=>{
    setLog(!Log)
    setUsers({})
  }
  {/*
  const {password , name } = users
  
  const [users, setUsers] = useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    // console.log(e.currentTarget.name.value);
    setUsers(name);
    if (name === user.name) {
      console.log("logIn");
      return (
        <div>
          <h1>welcome again</h1>
          <h5>account name : {user.name}</h5>
        </div>
      );
    } else {
      console.log("try again");
    }
    e.currentTarget.name.value = "";
  };
  return (
    <form onSubmit={handelSubmit} action="submit">
      <label htmlFor="name">
        name
        <input type="text" id="name" />
      </label>
      <button>submit</button>
    </form>
  );
  if (!Log) {
    return (
      <div>
        <div style={FLex}>
          <ul>
            <li>please login</li>
          </ul>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit} action="submit">
            name
            <label htmlFor="name">
              <input  id="name" type="text" />
            </label>{" "}
            password
            <label htmlFor="password">
              <input type="password" />
            </label>
            <button >submit</button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div style={FLex}>
      <ul>
        <li>hello there , {name}</li> 
      </ul>
      <button onClick={() => setLog(!Log)} className="btn">
        log Out
      </button>
    </div>
  );
};*/}
  
  console.log(Log);
  return (
    <div style={FLex}>
      <ul>
        <li>hello there , {user.name.toUpperCase()}</li> 
      </ul>
      <button onClick={() => setLog(!Log)} className="btn">
        log Out
      </button>
    </div>
  );
};
export default UserContainer;
