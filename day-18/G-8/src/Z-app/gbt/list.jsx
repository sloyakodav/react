import React from "react";

const List = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default List;
