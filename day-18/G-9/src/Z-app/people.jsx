import useData from "./Data";
const People = ({ list, setPeople }) => {
  console.log(list);
  return (
    <div>
      {list.map((item) => {
        console.log("rerender");
        return (
          <p key={item.id} style={{ margin: "0" }}>
            {item.name}
          </p>
        );
      })}{" "}
    </div>
  );
};
export default People;
