import React from "react";
import { data, people } from "../../../../data.js";
const removeItem = (people, id, name) => {
  const newData = people.filter((item) => item.id != id);
  const NAME = document.querySelector(`.${name}CONT`);
  NAME.remove();
  console.log(newData);
  console.log(name);
};
const clearAllItems = (people) => {
  people.length = 0;
  console.log(people);
  const allContainer = document.querySelector(`.allContainer`);
  allContainer.remove();
};
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <div className="allContainer">
      <h2>the use state version</h2>
      {people.map((theP) => {
        const { name, id } = theP;
        // removeItem(people, id, name);
        return (
          <div className={`${name}CONT`} key={id}>
            {name}
            <button onClick={() => removeItem(people, id, name)}>
              clear {name}
            </button>
          </div>
        );
      })}
      <button onClick={() => clearAllItems(people)}>clear all</button>
    </div>
  );
};
export default UseStateArray;
