const prices = {
  ethereum: {
    usd: 3382,
    eur: 2916,
    rub: 246392,
  },
};
const getPrice = (currency) =>
  prices[Object.keys(prices)][currency.toLowerCase()];

const getPrice1 = (currency) => {
  return prices.ethereum[currency];
};
console.log(getPrice1("USD"));
console.log(getPrice1("EUR"));
console.log(getPrice1("RUB"));
