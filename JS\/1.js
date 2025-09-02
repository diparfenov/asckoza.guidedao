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
