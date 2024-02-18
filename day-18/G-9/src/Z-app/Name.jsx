import useData from "./Data";
import People from "./people";
import { useState } from "react";
const Name = ({ list, setList }) => {
  console.log(list);
  const [renderOther, setRenderOther] = useState(0);
  const handleButtonClick = () => {
    setRenderOther(!renderOther);
  };
  const handleSubmit = (e) => {
    const number = new Date().getTime();
    e.preventDefault();
    setList([...list, { name: e.currentTarget.name.value, id: number }]);
    e.currentTarget.name.value = "";
  };
  return (
    <div className="container">
      <form
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
        action="submit"
        onSubmit={handleSubmit}
      >
        name
        <label htmlFor="name">
          <input
            style={{ width: "80%", padding: " 0.5rem ", marginBottom: "1rem" }}
            type="text"
            id="name"
          />
        </label>
        <button
          onClick={handleButtonClick}
          style={{ width: "80%", marginLeft: "2.5rem" }}
          className="btn"
        >
          submit
        </button>
      </form>
      <People list={list} setList={setList} />
    </div>
  );
};
export default Name;
