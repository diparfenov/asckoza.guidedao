/* function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log("Результат:", result); */

// let text = "JavaScript";

// console.log(
//   text.length * 8,
//   text.length,
//   text.toLowerCase(),
//   "JavaScript".toUpperCase(),
//   text[1],
//   text[0],
//   text[text.length - 2],
//   "GORE-TEX".substring(5),
//   "Helly Hansen".substring(0, 5),
//   "The North Face".substring(4, 9)
// );

// let name = "Gleb";
// name += " Kostin"; // то же самое, что и name = name + " Kostin"
// name = 2;
// console.log(name);

// let language = "JavaScript";
// console.log(`Я учу ${language + `${name + 2}`}`);

// function getFullName(first, last) {
//   return `${first + " " + last}`;
// }
// console.log(getFullName(1, "s"));

// function getFullName(first, last) {
//   return `${first} ${last}`;
// }
// console.log(getFullName("w", "e"));

// function spaceOdysseyTagline() {
//   return `An epic drama
// of adventure
// and exploration`;
// }
// console.log(spaceOdysseyTagline());

// function renderTableRow(label, value) {
//   return `<tr>
//         <td>здесь ${label}</td>
//         <td>здесь ${value}</td>
//         </tr>`;
// // }

// console.log(renderTableRow("sss", "wwww"));

//

// console.log(Number.parseInt("1 + 123 abc", 10));

//

// function getExcerpt(text) {
//   if (text.length >= 10) {
//     return `${text}...`;
//   }
//   return text;
// }

// console.log(getExcerpt("1234567891"));
// console.log(getExcerpt("1234567891234"));
// console.log(getExcerpt("12345"));

// const cryptoPunks = [7804, 3100, 5217, 7252];
// console.log(cryptoPunks.push(2140)); // вернет 5 (новая длина массива)
// // console.log(cryptoPunks); // [7804, 3100, 5217, 7252, 2140]
// function addBrave(browsers) {
//   return browsers.push("Brave")[0];
// }

// console.log(addBrave(["Firefox", "Chrome"]));
// console.log(addBrave(["Safari"]));
// const punks = [7804, 3100, 5217, 7252];
// punks.forEach(function (punk) {
//   punk -= 1;
//   // Действие с отдельным панком
//   console.log(punk, punks[0]);
// });

// function sumBags(bags) {
//   let a = 0;
//   bags.forEach(function (bag) {
//     a += bag;
//   });
//   return a;
// }

// console.log(sumBags([3043, 7658, 5046, 949]));
// // 16696
// console.log(sumBags([6109, 52, 2422, 696]));
// // 9279

// function sumSomeBags(bags) {
//   let sum = 0;
//   bags.forEach(function (bag) {
//     if (bag.toString().length === 4) {
//       sum += bag;
//     }
//   });
//   return sum;
// }

// console.log(sumSomeBags([3043, 7658, 5046, 949]));
// // 15747
// console.log(sumSomeBags([6109, 52, 2422, 625]));
// // 8531

// function sumOddBags(bags) {
//   let sum = 0;
//   bags.forEach(function (bag) {
//     if (bag % 2 == 1) {
//       sum += bag;
//     }
//   });
//   return sum;
// }

// console.log(sumOddBags([3043, 7658, 5046, 949]));
// // 3992
// console.log(sumOddBags([6109, 52, 2422, 625]));
// // 6734

// export function getDropdown(currencies) {
//   let html = `<option value="">Выберите валюту</option>`;
//   currencies.forEach(function (currency) {
//     html += `<option value="${currency.toLowerCase()}">${currency}</option>`;
//     console.log(html);
//   });

//   return html;
//   // Пишите код решения здесь
// }
// const ultrasound = [1559, "Ethereum", true, "🦇", "🔊"];

// console.log(ultrasound.toString());
// console.log(ultrasound.join(``));

// function isTxIncluded(bk, tx) {
//   return bk.includes(tx);
// }

// console.log(isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a")); // false
// console.log(isTxIncluded(["0x912f", "0x8d19", "0x20ba"], "0x8d19")); // true

// function getSizes(words) {
//   return words.map(function (word) {
//     return word.length;
//   });
// }

// console.log(getSizes(["Moscow", "Coding", "School"])); // [6, 6, 6]
// console.log(getSizes(["Do", "Your", "Own", "Research"])); // [2, 4, 3, 8]

// function getWithSpaces(strings) {
//   const joined = strings.join(" ");
//   return [joined, joined.length];
// }

// console.log(getWithSpaces(["Moscow", "Coding", "School"])); // ["Moscow Coding School", 20]
// console.log(getWithSpaces(["Do", "Your", "Own", "Research"])); // ["Do Your Own Research", 20]

// const block = {
//   height: 13272801,
//   transactions: 452,
//   minedBy: "Spark Pool",
//   reward: 2.4811,
//   stateRoot: "0xaa8f4",
// };

// block.transactions = "w";
// console.log(block);
// const abc = "userok";
// function welcomeUser(name = abc) {
//   name = 2;
//   return `Hello ${name}`;
// }

// console.log(welcomeUser("Vitalik")); // "Hello Vitalik"
// console.log(welcomeUser()); // "Hello user"
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(1, 2));

// const getAvgGlucose = (checks) => {
//   let sum = 0;
//   checks.forEach((check) => {
//     sum += check;
//   });
//   const avg = sum / checks.length;
//   return avg.toFixed(1);
// };

// console.log(getAvgGlucose([5.4, 8.1, 6.3, 4.9])); // 6.2
// const getGlucoseSpikes = (checks) => {
//   return checks.filter((check) => {
//     return check > 7.6;
//   });
// };

// console.log(getGlucoseSpikes([4.2, 8.5, 6.6, 9.1, 5.0])); // [8.5, 9.1]
//
// const getTopRetweets = (retweets) =>
//   retweets.filter((retweet) => retweet > 100);
// const getTopRetweets1 = (retweets) =>
//   retweets.filter((retweet) => retweet > 100);
// console.log(getTopRetweets([2, 234, 21, 620])); // [234, 620]
// console.log(getTopRetweets1([234, 47, 157])); // [234, 157]

// const getLowRetweets = (retweets) => retweets.filter((retweet) => retweet < 8);

// console.log(getLowRetweets([2, 23, 4, 62])); // [2, 4]
// console.log(getLowRetweets([34, 7, 15, 0])); // [7, 0]
// const getTwitterHandle = (users, searchUser) =>
//   users.find((user) => user === searchUser);

// console.log(
//   getTwitterHandle(["@kyled116", "@dhof", "@karl_dot_tech"], "@kyled116")
// ); // "@kyled116"
// console.log(
//   getTwitterHandle(["@ukolodny", "@punk4156", "@iamDCinvestor"], "@cdixon")
// ); // undefined

// const getUsernameLengths = (users) =>
//   users.map((user) => (user = user.length - 1));

// console.log(getUsernameLengths(["@kyled116", "@dhof", "@karl_dot_tech"])); // [8, 4, 13]
// console.log(getUsernameLengths(["@ukolodny", "@punk4156", "@iamDCinvestor"])); // [8, 8, 13]

// const getTwitterHandle = (twitterHandle) => {
//   if (twitterHandle[0] === "@") {
//     return twitterHandle;
//   }
//   return `@${twitterHandle}`;
// };

// console.log(getTwitterHandle("@kyled116")); // "@kyled116"
// console.log(getTwitterHandle("hasufl")); // "@hasufl"

// const getCurrency = (price) => {
//   if (price.includes("$")) {
//     return "Доллар";
//   }
//   if (price.includes("€")) {
//     return "Евро";
//   }
//   return "Недоступно";
// };

// console.log(getCurrency("$100")); // "Доллар"
// console.log(getCurrency("5€")); // "Евро"
// console.log(getCurrency("30 USD")); // "Недоступно"

// let kampai = "За ростовскую братву!";
// let a = "";
// kampai = kampai.replace(" ", "_"); // "За_ростовскую братву!"
// console.log(kampai); // "За ростовскую братву!"

// const getSlug = (title) =>
//   title.toLowerCase().substring(0, 15).replaceAll(" ", "-");

// console.log(getSlug("Shill your bags")); // "shill-your-bags"
// console.log(getSlug("Buy the dips")); // "buy-the-dips"
// console.log(getSlug("Ignore the FUD")); // "ignore-the-fud"
// console.log(getSlug("We are all gonna make it")); // "we-are-all-gonn"

// const getTodosNumber = (todos) => todos.split(",").length;

// console.log(
//   getTodosNumber("Сдать пластик,Купить капучинатор,Пересадить аглаонему")
// ); // 3
// console.log(getTodosNumber("Установить метамаск,Заправить картридж")); // 2
// const users = [
//   {
//     id: 1,
//     name: "Nick Szabo",
//   },
//   {
//     id: 2,
//     name: "Gavin Wood",
//   },
// ];

// const html = `<ul>
// ${users.map((user) => `<li class="${user.id}">${user.name}</li>`).join("")}
// </ul>`;
// console.log(html); // "<ul> <li>Nick Szabo</li><li>Gavin Wood</li> </ul>"

// export const renderTableRows = (rows) =>
//   rows
//     .map(
//       (row) =>
//         `<tr>
// <td>${row[0]}</td>
// <td>${row[1]}</td>
// </tr>`
//     )
//     .join("");
// const getDropdown = (currencies) =>
//   `<option value="">Выберите валюту</option>
//       ${currencies
//         .map(
//           (currency) =>
//             `<option value="${currency.toLowerCase()}">${currency}</option>`
//         )
//         .join("")}`;

// const needOtrabotka = (grades) => grades.some((grade) => grade < 3);

// console.log(needOtrabotka([3, 4, 5, 3])); // false
// console.log(needOtrabotka([4, 2, 3, 5])); // true

// const tokens = ["$UNI", "$LINK", "$DAI"];

// // Удаляет первый элемент массива и присваивает его переменной firstItem
// const firstItem = tokens.splice(2);
// console.log(tokens); // ["$LINK", "$DAI"]
// console.log(firstItem); // ["$UNI"]

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
// console.log(arr); // [1, 2, 3, 4, 5]``

// let nums = [10, 5, 15, 20];

// let sum = nums.reduce((acc, cur) => {
//   console.log(`Аккумулятор: ${acc}`);
//   console.log(`Текущее значение: ${cur}`);
//   console.log("-----------------------");
//   return acc + cur;
// }, 2);

// console.log(`Итоговая сумма: ${sum}`);

// let punks = [3100, 7804, 5217, 8857];

// let sum1 = punks.reduce((acc, cur) => acc + cur, 0);
// console.log(`Итоговая сумма: ${sum1}`);

// const sumPunks = (punks) => punks.reduce((acc, cur) => acc + cur, 0);

// console.log(sumPunks([3100, 7804, 5217, 8857])); // 24978
// console.log(sumPunks([2140, 7252, 2338, 6275])); // 18005
