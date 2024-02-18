import React from "react";
import { memo } from "react";
const List = ({ people }) => {
  return (
    <div>
      {people.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      {console.log("rerender")}
    </div>
  );
};

export default memo(List);
