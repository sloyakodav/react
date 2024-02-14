import { data } from "../data";
const People = () => {
  return (
    <div>
      {data.map((item) => {
        console.log("rerender");
        return (
          <p key={item.id} style={{ margin: "0" }}>
            {item.name}
          </p>
        );
      })}
    </div>
  );
};
export default People;
