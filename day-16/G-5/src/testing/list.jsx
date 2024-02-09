import { people } from "./../data.js";
const avatar = "https://iconape.com/wp-content/png_logo_vector/avatar-11.png";
console.log(avatar);
console.log(people);
const New = ({ y, x = "a", b }) => {
  console.log(x);
  console.log(y);
  console.log(b);
};
const myguy = { x: "one", y: "tow", b: "three", a: "forth" };
New(myguy);
const LEt = () => {
  return (
    <div>
      {people.map((Guys) => {
        const { id, name, nickName } = Guys;
        const img = Guys?.images?.[0]?.small?.url;
        return (
          <div key={id}>
            <New {...myguy} />
            <h3>{name}</h3>
            <h5>{nickName || "no nickname"}</h5>
            <img width="50px" src={img || avatar} alt="" />
          </div>
        );
      })}
    </div>
  );
};
export default LEt;

export const List = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h1>{person.nickName || "no nickname"}</h1>
          </div>
        );
      })}
    </div>
  );
};
