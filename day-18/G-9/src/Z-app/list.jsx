import Name from "./Name";
import People from "./people";
const List = ({ list, setList }) => {
  return (
    <div className="container">
      <Name list={list} setList={setList} />
    </div>
  );
};
export default List;
