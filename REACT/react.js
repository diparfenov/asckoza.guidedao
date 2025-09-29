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
// function Button(props) {
//   return <button>{props.children}</button>;
// }

// const root = document.querySelector("#root");

// createRoot(root).render(<Button>Login</Button>);
// function Button({ children, className }) {
//   return <button className={className}>{children}</button>;
// }

// const root = document.querySelector("#root");

// createRoot(root).render(<Button className="primary">Login</Button>);
// import {createRoot} from "react-dom";

// function Order(props) {
//   const name = `${props.item.brand} ${props.item.model}`;

// return (<div>
//   Кроссовки {name}.<br />
//   Осталось {props.item.quantity - 1} пар.
// </div>);
// }

// const item = {
//   brand: "adidas YEEZY",
//   model: "Boost 700 V2",
//   quantity: 3
// }

// createRoot(document.querySelector("#root")).render(<>
//   <Order item={item} />
//   <Order item={item} />
// </>);
// function Raffle(props) {
//   const newObj = { ...props, c: 3 };
//   console.log(newObj.c);

//   if (props.item) {
//     return <h1>Цвет: {newObj.item.c}</h1>;
//   }
//   return null;
// }

// const item = {
//   brand: "adidas YEEZY",
//   model: "Boost 700 V2",
//   color: "Tephra",
// };

// createRoot(document.querySelector("#root")).render(
//   <>
//     <Raffle item={item} />
//     <Raffle />
//   </>
// );
// function Header(props) {
//   const result = props.theme == "day" ? "light" : "dark";
//   return <h1 className={result}>Maison Martin Margiela</h1>;
// }

// createRoot(document.querySelector("#root")).render(
//   <>
//     <Header theme="day" />
//     <Header theme="night" />
//   </>
// );
// function Header(props) {
//   const className = clsx({
//     light: props.theme === "day",
//     dark: props.theme === "night",
//     header: true,
//   });
//   return <h1 className={className}>{className}Maison Martin Margiela</h1>;
// }

// createRoot(document.querySelector("#root")).render(
//   <>
//     <Header theme="day" />
//     <Header theme="night" />
//   </>
// );
// Разобрался с  rest = { c: 3, d: 4 } в <div c={3} d={4}></div>
// Разобрался с clxs
// const profile = [
//   "Michael Jordan",
//   1963,
//   {
//     team: "Chicago Bulls",
//     number: 23,
//   },
// ];

// const [name, born, nba] = profile;

// console.log(name); //Michael Jordan
// console.log(born); //1963
// console.log(nba); //{ team: 'Chicago Bulls', number: 23 }
// const getFullName = ([first, last]) => `${first} ${last}`;
// function playVanga(boomer) {
//   const [name, age] = boomer;
//   return `${name} скоро стукнет ${age + 1} лет`;
// }
