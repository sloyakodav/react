import { data } from "./Books.js";
const Book = () => {
  return data.map((values, index) => {
    const { id, title, author, img } = values;
    return (
      <section key={id} className="bookContainer">
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{author}</p>
        <span className={`bookNumber-${index + 1}`}>#{index + 1}</span>
      </section>
    );
  });
};
data.map((comment, index) => {
  console.log(index + 1);
  return comment;
});

export default Book;
