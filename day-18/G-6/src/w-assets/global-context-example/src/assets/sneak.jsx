// import React, { useState, useEffect } from "react";

// const numRows = 20;
// const numCols = 20;

// const randomFoodPosition = () => {
//   return {
//     x: Math.floor(Math.random() * numCols),
//     y: Math.floor(Math.random() * numRows),
//   };
// };

// const SnakeGame = () => {
//   const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
//   const [food, setFood] = useState(randomFoodPosition());
//   const [direction, setDirection] = useState("RIGHT");

//   useEffect(() => {
//     const interval = setInterval(moveSnake, 100);
//     return () => clearInterval(interval);
//   }, [snake]);

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//           setDirection("UP");
//           break;
//         case "ArrowDown":
//           setDirection("DOWN");
//           break;
//         case "ArrowLeft":
//           setDirection("LEFT");
//           break;
//         case "ArrowRight":
//           setDirection("RIGHT");
//           break;
//         default:
//           break;
//       }
//     };

//     document.addEventListener("keydown", handleKeyPress);
//     return () => document.removeEventListener("keydown", handleKeyPress);
//   }, []);

//   const resetGame = () => {
//     setSnake([{ x: 10, y: 10 }]);
//     setFood(randomFoodPosition());
//     setDirection("RIGHT");
//   };

//   const moveSnake = () => {
//     const newSnake = [...snake];
//     let head = { ...newSnake[0] };

//     switch (direction) {
//       case "UP":
//         head.y -= 1;
//         break;
//       case "DOWN":
//         head.y += 1;
//         break;
//       case "LEFT":
//         head.x -= 1;
//         break;
//       case "RIGHT":
//         head.x += 1;
//         break;
//       default:
//         break;
//     }

//     if (head.x === food.x && head.y === food.y) {
//       setFood(randomFoodPosition());
//     } else {
//       newSnake.pop();
//     }

//     newSnake.unshift(head);
//     setSnake(newSnake);
//   };

//   const renderGrid = () => {
//     const grid = [];

//     for (let row = 0; row < numRows; row++) {
//       for (let col = 0; col < numCols; col++) {
//         const isSnake = snake.some((s) => s.x === col && s.y === row);
//         const isFood = food.x === col && food.y === row;
//         grid.push(
//           <div
//             key={`${row}-${col}`}
//             className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
//           ></div>
//         );
//       }
//     }

//     return grid;
//   };

//   return (
//     <div>
//       <div className="grid">{renderGrid()}</div>
//       <button onClick={resetGame}>Replay</button>
//     </div>
//   );
// };

// export default SnakeGame;
