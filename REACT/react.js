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
// import { createRoot } from "react-dom/client";

// const element = (
//   <p className="exotic" tabindex="2">
//     People don't come to see the tigers, they come to see me.
//   </p>
// );
// const root = document.querySelector("#root");
// createRoot(root).render(element);
// const userStatus = (login) =>
//   login ? `<span>Вы залогинены</span>` : `<a href="/auth">Войти</a>`;

// console.log(userStatus(false));
// console.log(userStatus(!false));

// import { createRoot } from "react-dom/client";

// const greetUser = (user = {name: "Джо", age: 57}) => <div>Привет, {user.name}!</div>;

// const root = document.querySelector("#root");
// createRoot(root).render(greetUser());
// import { createRoot } from "react-dom/client";

// const showAlerts = (
//   user = [
//     { id: 1, text: "Оплата получена" },
//     { id: 2, text: "Заказ отправлен" },
//   ]
// ) => <p>Уведомлений: {user.length}</p>;

// const root = document.querySelector("#root");
// createRoot(root).render(showAlerts());
// import { createRoot } from "react-dom/client";

// const payNow = (user = { id: 1, login: true }) => {
//     let name = "disabled";
//     if (user.login) {
//       name = "active";
//     }

//     return <button className={name}>Оплатить</button>;
//   }
// const root = document.querySelector("#root");
// createRoot(root).render(payNow());
// function paymentMethod(method) {
//   return <li className={`payment-method option-${method}`}>{method}</li>;
// }
// console.log(paymentMethod("visa"));
// const getList = () => {
//   return (
//     <ul>
//       <li>One</li>
//       <li>Two</li>
//     </ul>
//   );
// };
// console.log(getList());
// const DropdownMenu = () => (
//   <ul className="payment-methods">
//     <li className="dropdown" id="user-menu">
//       Профиль
//     </li>
//     <li className="dropdown" id="user-menu" children="Заказы" />
//     <li className="logout" id="user-menu">
//       Выйти
//     </li>
//   </ul>
// );

// const root = document.querySelector("#root");
// createRoot(root).render(<DropdownMenu />);
// const DropdownMenu = () => (
//   <ul className="payment-methods">
//     <li className="dropdown" id="user-menu">
//       Профиль
//     </li>
//     <li className="dropdown" id="user-menu" children="Заказы" />
//     <li className="logout" id="user-menu">
//       Выйти
//     </li>
//   </ul>
// );
// const SiteFooter = () => (
//   <>
//     <h3>Официальный магазин Джо Экзотика</h3>
//     <ul>
//       <li>Написать Джо</li>
//       <li>Условия доставки</li>
//       <li>Поддержка</li>
//     </ul>
//     <p>ООО «Джо Экзотик»</p>
//   </>
// );

// const root = document.querySelector("#root");
// createRoot(root).render(<SiteFooter />);
// const CustomerBasket = (props) => (
//   <div>Товаров в корзине: {props.quantity}</div>
// );

// const root = document.querySelector("#root");
// createRoot(root).render(<CustomerBasket quantity="3" />);
// const Navbar = (props) => (
//   <>
//     <div>
//       Привет, {props.user.first_name} {user.last_name}
//     </div>
//     <p>У вас {props.alerts.length} уведомлений</p>
//   </>
// );

// let a = [
//   {
//     id: 1,
//     text: "Оплата получена",
//   },
//   {
//     id: 2,
//     text: "Заказ отправлен",
//   },
// ];

// const user = {
//   first_name: "Павел",
//   last_name: "Топский",
// };

// const root = document.querySelector("#root");

// createRoot(root).render(<Navbar alerts={a} user={user} />);
