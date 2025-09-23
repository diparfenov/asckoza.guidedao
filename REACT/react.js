// console.log("hello word");
// const numbers1 = [4, 11, -5, 17, -10, 8, 56, 0];
// const numbers2 = [
//   {
//     id: 1,
//     number: 10,
//   },
//   {
//     id: 2,
//     number: -6,
//   },
//   {
//     id: 3,
//     number: 22,
//   },
// ];

// const onlyPositive1 = (mass) => mass.filter((mass) => mass > 0);
// const onlyPositive2 = (mass) =>
//   mass.map((mass) => mass.number).filter((n) => n > 0);

// console.log(onlyPositive1(numbers1));
// console.log(onlyPositive2(numbers2));

// function createCard() {
//   const card = document.createElement("div");
//   card.className = "card";
//   return card;
// }
// console.log(createCard());

// import "./styles.css";
// import React from "react";

// export default function App() {
//   const cactusDiv = () => React.createElement("div", null, "Cactus Jack");
//   const astroGreeting = () =>
//     React.createElement("h1", { className: "first" }, "Welcome to Astroworld");
//   return cactusDiv(), astroGreeting();
// }
// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";
// const root = document.querySelector("#root");

// const element = React.createElement("h1", { className: "zag" }, "Yo!");

// const banner = React.createElement("h1", {}, "Welcome to Astroworld");

// // Рендерим оба элемента через React Fragment
// const app = React.createElement(React.Fragment, null, element, banner);

// createRoot(root).render(app);
// import { createRoot } from "react-dom/client";

// const element = (
//   <p>
//     <b>I saw the tiger, and the tiger saw a man</b>
//   </p>
// );
// const root = document.querySelector("#root");
// createRoot(root).render(element);
