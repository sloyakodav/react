import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const Title = () => {
  return <h1>Amazon Best Sellers</h1>;
};

const Img = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/51j8bRH5sDL._AC_SX184_.jpg" />
  );
};
const BookTitle = () => {
  return <h2>Fourth Wing (The Empyrean, 1)</h2>;
};
const BookWriter = () => {
  return (
    <h4>
      by<code> Rebecca Yarros </code>(Author)
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
const Book = () => {
  return (
    <div className="bookContainer">
      <BookContent />
    </div>
  );
};
const Container = () => {
  return (
    <div className="ThreeBooks">
      <Book />
      <Book />
      <Book />
      <Book />
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
