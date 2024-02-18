import useData from "./Data";
const People = () => {
  const [people, setPeople] = useData();
  console.log(people);
  return (
    <div>
      {people.map((item) => {
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
