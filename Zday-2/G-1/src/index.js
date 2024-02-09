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
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    img: "https://m.media-amazon.com/images/I/71QKcer7jxL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71N3-FFSDxL._AC_UF1000,1000_QL80_.jpg",
  },
];

// const Func = (parameter1, parameter2) => {
//   console.log(parameter1, parameter2);
// };
// Func("brahim ", "abdelmoumen");

const Book = (ATrueWDHp) => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75",
    marginTop: "0.5rem",
  };
  return (
    <article className="bookContainer">
      <img src={ATrueWDHp.img} alt={ATrueWDHp.title} />
      <h2>{ATrueWDHp.title}</h2>
      <h4 style={inlineHeadingStyles}> {ATrueWDHp.author}</h4>
      {/* <p>{let x= "y"  return x}</p> */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};
const Container = () => {
  return (
    <div className="ThreeBooks">
      <Book title={data[0].title} author={data[0].author} img={data[0].img} />
      <Book title={data[1].title} author={data[1].author} img={data[1].img} />
      <Book title={data[2].title} author={data[2].author} img={data[2].img} />
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BestSeller></BestSeller>);
