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

//с return и без

// let funks = [3100, 7804, 5217, 8857]
// let sumFunks = funks.reduce((acc, cur) => {
//   return acc + cur
// }, 0)
// console.log(sumFunks)

// const sumPunks = punks => {
//   return punks.reduce((acc,cur) => {
//     return acc + cur
//   },0)
// }
// console.log(sumPunks([2140, 7252, 2338, 6275]))

// let funks1 = [3100, 7804, 5217, 8857]
// let sumFunks1 = funks1.reduce((acc, cur) => acc + cur, 0)
// console.log(sumFunks1)

// const sumPunks1 = punks1 => punks1.reduce((acc,cur) => acc + cur,0)
// console.log(sumPunks([2140, 7252, 2338, 6275]))
// const getBlockReport = (block) => {
//   const [blockHeight, totalTxs] = block;

//   return `Блок номер ${blockHeight} содержит ${totalTxs} транзакций.`;
// };

// console.log(getBlockReport([9585604, 110])); // "Блок номер 9585604 содержит 110 транзакций."
// console.log(getBlockReport([12585603, 185])); // "Блок номер 12585603 содержит 185 транзакций."

// const getBlockReport1 = ([blockHeight, totalTxs]) =>
//   `Блок номер ${blockHeight} содержит ${totalTxs} транзакций.`;

// console.log(getBlockReport1([12345, 678, 2]));
// // Блок номер 12345 содержит 678 транзакций.

// const getMinerInfo = ([miner, time]) =>
//   `Этот блок замайнил ${miner} за ${time} секунд.`;

// console.log(getMinerInfo(["Nanopool", 25])); // "Этот блок замайнил Nanopool за 25 секунд."
// console.log(getMinerInfo(["Ethermine", 11])); // "Этот блок замайнил Ethermine за 11 секунд."
// const joinAssets = (wallet1, wallet2) => [...wallet1, ...wallet2];

// console.log(joinAssets(["21 IFY", "18 AAVE"], ["32 MATIC", "73 CRV"])); // ["21 IFY", "18 AAVE", "32 MATIC", "73 CRV"]
// console.log(joinAssets(["8 DAI", "59 GTC"], ["5 DYDX", "46 SHIB"])); // ["8 DAI", "59 GTC", "5 DYDX", "46 SHIB"]

// const user = {
//   id: 2,
//   name: "Nick Szabo",
//   age: 57,
// };
// console.log(user.id);
// user.id = 3;
// console.log(user.id);
// const key = "id";
// user[key] = 4;
// console.log(user[key]);
// console.log(user.id);
// const settings = {
//   theme: "dark",
//   version: "2.4.1",
//   beta: false,
// };

// const keys = Object.keys(settings);
// console.log(keys); // ["theme", "version", "beta"]

// keys.forEach((key) => {
//   console.log(settings[key]);
// });
// // "Dark"
// // "2.4.1"
// // false
//
// const getNumberOfKeys = (obj) => Object.keys(obj).length;

// console.log(getNumberOfKeys({ id: 1, name: "Vitalik", country: "Canada" })); // 3
// console.log(
//   getNumberOfKeys({
//     id: 1,
//     name: "Vitalik",
//     country: "Canada",
//     website: "vitalik.ca",
//   })
// ); // 4
// const getCapsKeys = (obj) => {
//   let a = Object.keys(obj);
//   return a.map((a) => a.toUpperCase());
// };
// const getCapsKeys = (obj) => Object.keys(obj).map((key) => key.toUpperCase());

// console.log(getCapsKeys({ id: 1, name: "Vitalik", country: "Canada" })); // ["ID", "NAME", "COUNTRY"]
// console.log(getCapsKeys({ id: 1, name: "Vitalik", website: "vitalik.ca" })); // ["ID", "NAME", "WEBSITE"]
// const logValues = (obj) =>
//   Object.keys(obj).forEach((key) => console.log(obj[key]));

// logValues({ id: 1, name: "Vitalik", country: "Canada" }); // Выводит в консоль три сообщения: 1, "Vitalik", "Canada"
// logValues({ id: 1, name: "Vitalik", website: "vitalik.ca" }); // Выводит в консоль три сообщения: 1, "Vitalik", "vitalik.ca"

// const prices = {
//   ethereum: {
//     usd: 3382,
//     eur: 2916,
//     rub: 246392,
//   },
//   bitcoin: {
//     usd: 123,
//     eur: 324,
//     rub: 456,
//   },
// };

// const getPrice = (currency) =>
//   Object.keys(prices).forEach((key) => console.log(prices[key][currency]));

// getPrice("usd");
// console.log(getPrice("bitcoin", "usd"));

// const getPrice2 = (coin, currency) => {
//   return prices[coin][currency];
// };

// console.log(getPrice2("bitcoin", "usd")); // 3382\

// const getPrice1 = (currency) => {
//   return prices.ethereum[currency];
// };
// console.log(prices.ethereum);
// console.log(getPrice1("usd"));
// console.log(getPrice1("eur"));
// console.log(getPrice1("rub"));

// console.log(getPrice("usd"));
// console.log(getPrice("eur"));
// console.log(getPrice("rub"));

// const account = {
//   nonce: 186,
//   balance: 4032522415168559363,
// };

// console.log(`Balance: ${account.toString()} WEI`); // "Balance: [object Object] WEI"

// const getCapsValues = (obj) =>
//   Object.values(obj).map((value) => value.toUpperCase());

// console.log(getCapsValues({ body: "Lab Coat" })); // ["LAB COAT"]
// console.log(getCapsValues({ body: "Lab Coat", head: "Sombrero" })); // ["LAB COAT", "SOMBRERO"]

// const logEntries = (obj) => {
//   return Object.values(obj);
// };

// // Сверьтесь с результатом в консоли
// console.log(logEntries({ body: "Kimono Orange", head: "Backwards Hat Red" }));
// console.log(logEntries({ body: "Puffer Blue", head: "Mohawk Purple" }));
// const account = {
//   address: "0xFF9...13D7",
//   type: "contract",
//   balance: 2,
// };

// const { address, balance = 0 } = account;
// console.log(balance); // 0

// const type = "USB-C";

// const account = {
//   address: "0xFF9...13D7",
//   type: "contract",
// };

// const { type: accountType, address } = account;
// console.log(accountType); // "contract"

// const getRarityScore = ({ bag, score }) =>
//   `Мешок #${bag} имеет ${score} очков редкости.`;

// console.log(getRarityScore({ bag: 6189, score: 164.41 }));
// // "Мешок #6189 имеет 164.41 очков редкости."

// const getRarityScoreRank = ({ bag, score, rank = 0 } = loot) =>
//   `Мешок #${bag} имеет ${score} очков редкости и занимает ${rank} место в рейтинге.`;

// console.log(getRarityScoreRank({ bag: 6189, score: 164.41, rank: 2372 }));
// // "Мешок #6189 имеет 164.41 очков редкости и занимает 2372 место в рейтинге."
// console.log(getRarityScoreRank({ bag: 7498, score: 40.39 })); // rank не указан
// // "Мешок 7498 имеет 40.39 очков редкости и занимает 0 место в рейтинге."
// const dao = {
//   members: {
//     founder: {
//       address: "0xaf45b3",
//     },
//   },
//   treasury: null,
// };

// console.log(dao.members?.founder?.address); // "0xaf45b3"
// console.log(dao.treasury?.value); // undefined
// console.log(dao.proposals?.template); // undefined
// console.log(dao.members?.staff?.count); // undefined

// const getBalance = (wallet) => wallet.ethereum?.balance;

// // Примеры использования
// console.log(getBalance({ ethereum: { balance: "0.2 ETH" } })); // "0.2 ETH"
// console.log(console.log(getBalance({ ethereum: null }));); // undefined
// console.log(getBalance({})); // undefined

// const getNonce = (tx) => tx.receipt?.details?.nonce;

// // Примеры использования
// console.log(getNonce({ hash: 0x54b7ad, success: false })); // undefined
// console.log(
//   getNonce({
//     hash: 0xa8fe4b,
//     success: true,
//     receipt: { details: { nonce: 12 } },
//   })
// ); // 12
// const getFirstCall = (tx) => tx.receipt?.calls?.[0];

// const getBalance = (wallet) => wallet.ethereum?.balance?.toUpperCase();

// // Примеры использования
// console.log(getBalance({ ethereum: { balance: "0.2 eth" } })); // "0.2 ETH"
// console.log(getBalance({ ethereum: null })); // undefined
// console.log(getBalance({})); // undefined
// const getPlaceholder = () => {
//   console.log("Вызов getPlaceholder");
//   return "Anon";
// };

// const sayHello = (name) => {
//   return `Hello ${name ?? getPlaceholder()}`;
// };

// console.log(sayHello()); // "Hello Vitalik"
// const getBalance = (address) => address.balance ?? "N/A";

// // Примеры использования
// console.log(getBalance({ balance: 42 })); // 42
// console.log(getBalance({})); // "N/A"

// const getGreeting = (user) => `Привет, ${user.name ?? "аноним"}`;

// // Примеры использования
// console.log(getGreeting({ name: "Виталик" })); // "Привет, Виталик"
// console.log(getGreeting({})); // "Привет, аноним"
// const getChainId = (network) => network?.info?.chainId ?? 0;

// // Примеры использования
// console.log(getChainId({ info: { chainId: 31337 } })); // 31337
// console.log(getChainId({ info: null })); // 0
// console.log(getChainId({})); // 0
// const getTxValue = (tx) => tx.details?.value?.eth ?? "N/A";

// // Примеры использования
// console.log(getTxValue({ hash: 0x1, success: false })); // "N/A"
// console.log(
//   getTxValue({ hash: 0x2, success: true, details: { value: { eth: 0.2 } } })
// // ); // 0.2
// const getNetworkName = (network) =>
//   network?.info?.name.toLowerCase() ?? "network";

// // Примеры использования
// console.log(getNetworkName({ info: { name: "Rinkeby" } })); // "rinkeby"
// console.log(getNetworkName({ info: null })); // "network"
// console.log(getNetworkName({})); // "network"
// const getTxStatus = (tx) => {
//   const notif = {
//     pending: "Ожидаем подтверждения от сети.",
//     confirmed: "Пробуем выполнить транзакцию.",
//     canceled: "Не удалось выполнить транзакцию.",
//     success: "Транзакция выполнена успешно!",
//   };
//   return notif[tx.status] ?? "Статус транзакции недоступен.";
// };

// const tx1 = { status: "pending" };
// console.log(getTxStatus(tx1)); // Ожидаем подтверждения от сети.
// const tx2 = { status: "success" };
// console.log(getTxStatus(tx2)); // Транзакция выполнена успешно!
// const tx3 = {};
// console.log(getTxStatus(tx3)); // Транзакция выполнена успешно!
