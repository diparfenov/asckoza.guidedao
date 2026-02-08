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
// function offWhite() {
//   const item = "SCULPTURE";
//   function inQuotes() {
//     return `"${item}"`;
//   }
//   return [item, inQuotes];
// }

// function destructureIt() {
//   const [item, inQuotes] = offWhite();
//   return [item, inQuotes()];
// }

// console.log(destructureIt());
// function Item() {
//   [quanity, setQuanity] = useState(0);
//   return <div>Количество товаров: {quanity}</div>;
// }

// createRoot(document.querySelector("#root")).render(<Item />);
// function Pomodoro() {
//   const [mins, setMins] = useState(25);
//   return (
//     <>
//       <h2>Продолжительность сессии: {mins}</h2>
//       <button onClick={() => setMins(mins + 1)}>Добавить минуту</button>
//     </>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Pomodoro />);
// function Paccbet() {
//   return <button onClick={() => console.log("АЛО")}>Click Clack</button>;
// }

// createRoot(document.querySelector("#root")).render(<Paccbet />);
// function Counter() {
//   let [count, setCount] = useState(0);
//   return (
//     <>
//       <div>Кликов: {count}</div>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//     </>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Counter />);
// function getDeity() {
//   const name = "Omon Ra";

//   function getMantra() {
//     return `Sa Ta Na Ma ${name}`;
//   }

//   return {
//     name: name,
//     mantra: getMantra(),
//   };
// }
// console.log(getDeity());
// function getDeity(first, last) {
//   function getFull() {
//     return `${first + " " + last}`;
//   }

//   return {
//     first: first,
//     last: last,
//     full: getFull(),
//   };
// }

// console.log(getDeity("Omon", "Ra"));
// function getUser(age) {
//   function isOld() {
//     return age >= 30;
//   }
//   return {
//     old: isOld(),
//   };
// }

// console.log(getUser(32));
// function Coffee() {
//   return (
//     <select onChange={() => console.log("Он или оно")} className="brands">
//       <option>Illy</option>
//       <option>Lavazza</option>
//       <option>Danesi</option>
//     </select>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Coffee />);
// // function Profile({ courses }) {
//   return (
//     <>
//       <h2>Хороший день для учебы!</h2>

//       {courses.length > 1 && <p>Вам доступно {courses.length} курсов</p>}
//     </>
//   );
// }

// const courses = [
//   {
//     id: 1,
//     text: "HTML/CSS",
//   },
//   {
//     id: 2,
//     text: "JavaScript",
//   },
//   {
//     id: 3,
//     text: "React",
//   },
// ];

// createRoot(document.querySelector("#root")).render(
//   <>
//     <Profile courses={[]} />
//     <Profile courses={courses} />{" "}
//   </>
// );
//react 36% new practice
// export default function App() {
//   const [login, setLogin] = useState(false);
//   const handleSetLogin = () => {
//     setLogin(login ? false : true);
//   };

//   return (
//     <>
//       <h2 className="ui-title">
//         {login ? "Добро пожаловать!" : "Нужно залогиниться!"}
//       </h2>
//       <button className="ui-button" onClick={handleSetLogin}>
//         {login ? "Выйти" : "Войти"}
//       </button>
//     </>
//   );
// }
// export const Shop = () => {
//   const items = [
//     {
//       name: "Респиратор 3M",
//       desc: "Степень защиты FFP2, есть клапан выдоха",
//       image: "https://source.unsplash.com/400x300/?3M,mask"
//     },
//     {
//       name: "Перчатки латексные",
//       desc: "Одноразовые перчатки повышенной прочности",
//       image: "https://source.unsplash.com/400x300/?latex,gloves"
//     }
//   ];
//   return (
//     <div className="shop">
//       {items.map((el) => (
//         <Item key={el.name} {...el} />
//       ))}
//     </div>
//   );
// };
//сделал проект 3
//начинаю дальше реакт 36%
// function Blaster() {
//   const [ammo, setAmmo] = useState(10);
//   const [magazine, setMagazine] = useState(3);
//   const [disabled, setDisabled] = useState(false);

//   const magazinePull = () => {
//     if (magazine === 0) {
//       setDisabled(!disabled);
//     } else {
//       setMagazine(magazine - 1);
//     }
//   };

//   function handleShootClick() {
//     setAmmo(ammo - 1);
//     if (ammo === 1) {
//       setAmmo(10);
//       magazinePull();
//     }
//   }

//   return (
//     <>
//       <h2>Зарядов: {ammo}</h2>
//       <h2>Обойм: {magazine}</h2>
//       <button disabled={disabled} onClick={handleShootClick}>
//         Выстрелить
//       </button>
//     </>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Blaster />);
// function clone() {
//   const cell = ["Лизосома", "Рибосома", "Аппарат Гольджи"];
//   const copy = cell;
//   console.log(copy);
//   console.log(cell);
//   cell.push("Митохондрия");
//   console.log(copy);
//   console.log(cell);
//   return cell === copy;
// }
// console.log(clone());

// function sideEffects() {
//   const metformin = {
//     diarrhea: "common",
//     drowsiness: "rare",
//   };
//   const glucophage = metformin;
//   glucophage.cramping = "common";
//   const siofor = glucophage;
//   return siofor;
// }

// console.log(sideEffects());
// const addBull = (bulls, bull) => [...bulls, bull];

// const bulls = ["Jordan", "Pippen", "Rodman"];
// const newBulls = addBull(bulls, "Kukoc");

// console.log(newBulls);
// const addBase = (bases, base) => [base, ...bases];

// const bases = ["Гуанин", "Цитозин", "Тимин"];
// const dna = addBase(bases, "Аденин");
// console.log(dna);
// const change = (players, starter, bench) => {
//   return players.map((player) => {
//     if (starter === player) {
//       return bench;
//     }
//     return player;
//   });
// };

// const change2 = (players, starter, bench) =>
//   players.map((player) => (starter === player ? bench : player));

// //пример использования
// const firstHalf = ["Jordan", "Pippen", "Rodman", "Kukoc"];
// const secondHalf = change(firstHalf, "Jordan", "Harper");
// console.log(secondHalf);
// const removeDj = (lineup, out) => lineup.filter((line) => line !== out);

// //пример использования
// const oldLineup = ["Jaar", "Villalobos", "Hawtin", "Allien"];
// const newLineup = removeDj(oldLineup, "Villalobos");
// console.log(newLineup);
// const Pharmas = ({ names }) => (
//   <ul>
//     {names.map((name) => (
//       <li key={name}>{name}</li>
//     ))}
//   </ul>
// );

// //пример использования
// const pharmas = ["AstraZeneca", "Novartis", "Pfizer", "Abbott"];
// createRoot(document.querySelector("#root")).render(<Pharmas names={pharmas} />);
// function Standards() {
//   const [gens, setGens] = useState(["GSM", "3G", "LTE", "5G"]);

//   return (
//     <ul>
//       {gens.map((gen) => (
//         <li key={gen}>{gen}</li>
//       ))}
//     </ul>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Standards />);

// function Pomodoro() {
//   const [sessions, setSessions] = useState([]);

//   const handleWorkClick = () => setSessions([...sessions, 25]);

//   const handleBreakClick = () => setSessions([...sessions, 5]);

//   const handleResetClick = () => setSessions([]);

//   const value = sessions.reduce((acc, value) => acc + value, 0);

//   const list = sessions.map((session, index) => <li key={index}>{session}</li>);

//   return (
//     <>
//       <button onClick={handleWorkClick}>Поработать</button>
//       <button onClick={handleBreakClick}>Отдохнуть</button>
//       <h2>Всего: {value}</h2>
//       <button onClick={handleResetClick}>Сброс</button>
//       <ol>{list}</ol>
//     </>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Pomodoro />);
// const checkFake = (item, fake) => ({ ...item, fake });
// //пример использования
// const cap = {
//   brand: "Supreme",
//   condition: "like new",
// };
// const forSale = checkFake(cap, false);
// console.log(forSale);
// const addTimestamp = (cargo) => ({ ...cargo, timestamp: Date.now() });

// //пример использования
// const cargo = {
//   from: "Bogota, Colombia",
//   weight: "20kg",
// };
// const received = addTimestamp(cargo);
// console.log(received);
// function giftSub(user) {
//   return { ...user, role: "subscriber" };
// }

// //пример использования
// const user = {
//   name: "Sharishaxd",
//   role: "follower",
// };
// const sub = giftSub(user);
// console.log(sub);

// function goVegan(dish) {
//   const { meat, ...womeat } = dish;
//   return womeat;
// }

// //пример использования
// const burger = {
//   bun: "Чиабатта",
//   toppings: "Экстра",
//   meat: "Говядина",
// };
// const nomeat = goVegan(burger);
// console.log(nomeat);
// const user = {
//   mode: "dark",
//   role: "admin",
// };

// const list = Object.entries(user).map((i) => {
//   return (
//     <li key={i[0]}>
//       {i[0]}: {i[1]}
//     </li>
//   );
// });

// console.log(list);
//function Checkout(props) {
//   return (
//     <form>
//       <input
//         defaultValue={props.x}
//         onChange={(event) => console.log(event.target.value)}
//         name="name"
//         type="number"
//       />
//     </form>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Checkout x={123} />);
//function App() {
//   const [city, setCity] = useState("Kaliningrad");
//   return (
//     <>
//       <input
//         type="text"
//         name="city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <p>{city}</p>
//     </>
//   );
// }

// createRoot(document.querySelector("#root")).render(<App />);
//делал практику
//доделал пракитку
// export default function Shop() {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault(); // предотвращаем перезагрузку страницы
//     addItem(); // вызываем функцию добавления
//     setName(""); // очищаем поля
//     setDesc(""); // очищаем поля
//   };
//   const isInvalid = name === "" || desc === "";
//   const addItem = () => setItems([...items, { id: items.length, name, desc }]);
//   const delItem = (id) => setItems(items.filter((item) => item.id !== id));

//   return (
//     <>
//       <form onSubmit={handleFormSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Название товара"
//             className="ui-textfield"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Описание товара"
//             className="ui-textfield"
//             onChange={(e) => setDesc(e.target.value)}
//             value={desc}
//           />
//         </div>
//         <div className="form-footer">
//           {isInvalid && <div className="validation">Заполните все поля</div>}
//           <input
//             disabled={isInvalid}
//             type="submit"
//             className="ui-button"
//             value="Добавить"
//           />
//         </div>
//       </form>

//       <div>
//         {items.length == 0 && <p className="ui-title">Добавьте первый товар</p>}
//       </div>

//       <ul className="ui-list">
//         {items.map((item) => (
//           <li key={item.id} className="ui-item-list">
//             <Item info={item} />
//             <button onClick={() => delItem(item.id)} className="item-button">
//               Удалить
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// изучаю скрипты
// изучил функции в пропсах
// не успел(())
//опять не успел
// опять
//продолжил теперь проект
// начал проект и все обновил по знанияя, половину сделал уже
// import Item from "./item.js";
// export default function ItemList(props) {
//   const { items, onDelItem } = props;
//   // мы получили из пропсов функцию onDelItem в которую передали delItem
//   // и массив items в который передали массив всех добавленных товаров
//   return (
//     <>
//       <ul className="ui-list">
//         {items.map((item) => (
//           <li key={item.id} className="ui-item-list">
//             <Item info={item} />
//             <button onClick={() => onDelItem(item.id)} className="item-button">
//               Удалить
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
//доделал
//62 процента
// не усмепю
//не успею
//не делал
//не успел
//отпуск не делаю
//отпуск не делаю
//вышел с отпуска нажо вспоминать:(
//так и не начал
//так и не начал
//так и не начал
//кажется начал
//все повторил надо вливаться
//начинаю
//начинаю все сначала(
//до 62 процентов не пишу в Ноушен
//продолжаю
//18 процентов
//22 процента
//28 процентов
//пролдолжаю 4 день подряд
//38
//yt ltkfk
//начал
//сделал практику 3
// function Blaster() {
//   const [ammo, setAmmo] = useState(10);
//   const [mag, setMag] = useState(3);

//   function handleShootClick() {
//     ammo > 0
//       ? setAmmo((prev) => prev - 1)
//       : (setMag((prev) => prev - 1), setAmmo((prev) => prev + 10));
//   }

//   return (
//     <>
//       <h2>Зарядов: {ammo}</h2>
//       <h2>Обойм: {mag}</h2>
//       {!mag == 0 && (
//         <button onClick={handleShootClick}>
//           {ammo == 0 ? "Перезарядка" : "Выстрелить"}
//         </button>
//       )}
//     </>
//   );
// }

// createRoot(document.querySelector("#root")).render(<Blaster />);
//47
// начал
//делаю практику в решение не полез чат гпт подсказал
//поздно но зашел
// доделал практику
//57
//начал
//60 и сделал проект 5 (1.5 часа)
// 66 час дошел до проекта 6 (уже новый материал)
// начал, вчера не удалось, была поездка вобласть
// сделал практику 6 ноона не работает дело в токене
// начал
//74 часа 2-3 подобался к практике
// начал
// сделал проект 8 разобрался
// оч много сделал 80
// начал
// дошел до проекта 9
// сделал проект 9
//85
//начал
//начал
//дошел до практики 11
//сделал с новым токеном карта заработала
//91
//начал
//93 прошел кастомный useFetch
//начал
//сделал практику 12
//useRef, дошел до практики 13
//ращобрался с useRef
//95
//начал
//нужно изучить useMemo memo useCallback, а так курс закончил
// начал
//буду делать полный сволд
// ничего не делал и сегодня тоже(())
// ничего не делал и сегодня тоже(())
//не делал
