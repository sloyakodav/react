import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const Title = () => {
  return <h1>Amazon Best Sellers</h1>;
};

const Img = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/51j8bRH5sDL._AC_SX184_.jpg"
      alt="ronaldo-fonmino"
    />
  );
};
const BookTitle = () => {
  return <h2>Fourth Wing (The Empyrean, 1)</h2>;
};
const BookWriter = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75",
    marginTop: "0.5rem",
  };
  return (
    <h4 style={inlineHeadingStyles}>
      Rebecca Yarros <code>(Author)</code>
    </h4>
  );
};
const BookContent = () => {
  return (
    <div className="BookContent-1">
      <Img />
      <BookTitle />
      <BookWriter />
    </div>
  );
};
// const Book = () => {
//   return (
//     <div className="bookContainer">
//       <BookContent />
//     </div>
//   );
// };

// const title = "Interesting Facts For Curious Minds";
// const author = "Jordan Moore ";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/51j8bRH5sDL._AC_SX184_.jpg";

let data = [
  {
    title: "Interesting Facts For Curious Minds",
    author: "Jordan Moore",
    img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hwUY5ZmxL._AC_UF1000,1000_QL80_.jpg",
    id: 1,
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    img: "https://m.media-amazon.com/images/I/71QKcer7jxL._AC_UF1000,1000_QL80_.jpg",
    id: 2,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71N3-FFSDxL._AC_UF1000,1000_QL80_.jpg",
    id: 3,
  },
];

// const Func = (parameter1, parameter2) => {
//   console.log(parameter1, parameter2);
// };
// Func("brahim ", "abdelmoumen");

const Book = (ATrueWDHp) => {
  const { img, title, author, children } = ATrueWDHp;
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75",
    marginTop: "0.5rem",
  };
  console.log(ATrueWDHp);
  return (
    <article className="bookContainer">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4 style={inlineHeadingStyles}> {author}</h4>
      {/* <p>{let x= "y"  return x}</p> */}
      {/* <p>{6 + 6}</p> */}
      {children}
    </article>
  );
};
const Container = () => {
  return (
    <div className="ThreeBooks">
      <Book title={data[0].title} author={data[0].author} img={data[0].img} />
      <Book title={data[1].title} author={data[1].author} img={data[1].img} />
      <Book title={data[2].title} author={data[2].author} img={data[2].img} />
      <Book title={data[2].title} author={data[2].author} img={data[2].img}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, ipsum!
        </p>
        <button>click me</button>
      </Book>
    </div>
  );
};
const BestSeller = () => {
  return (
    <div>
      <Title />
      <Container />
    </div>
  );
};
const name = [
  { theShee: "zara" },
  { theShee: "G-1", color: "#617d98" },
  { theShee: "G-2", color: "#617d98" },
  { theShee: "G-3", color: "#617d98" },
  { theShee: "G-4", color: "#617d98" },
];
const TheNames = () => {
  return (
    <div className="ThreeBooks">
      {data.map((TheName) => {
        const { title, img, author, id } = TheName;
        return <Book {...TheName} key={id} />;
      })}
    </div>
  );
};
const JustPrint = () => {
  return <TheNames />;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BestSeller></BestSeller>);
root.render(<JustPrint />);
