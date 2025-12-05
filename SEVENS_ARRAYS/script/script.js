//? Масив - це структура даних для зберігання і змінення набy індексованих значень.
const filtersOfProducts = [
  "Clothes",
  "Products",
  "Electonics",
  "Jewellery",
  "Toys",
];

const getFilter = filtersOfProducts[0];
console.log(getFilter);

const cart = [];

//? push - для додавання продуктів в масив
cart.push("Apple");

console.log(cart);

const cartOfProducts = ["Apple", "Schinken", "Candys", "Shashlik"];

cartOfProducts[2] = "Kiwi";

console.log(cartOfProducts);

const numbers = [];

for (let i = 0; i < 50; i++) {
  numbers.push(`client-${i}`);
}

console.log(numbers);

const clients2 = ["Mango", "Poly", "Ajax", "Chelsey"];
for (const client of clients2) {
  console.log(client);
}

const word = "Hello world!";
for (const letter of wrod) {
  console.log(letter);
}

//? task

const savedClients = ["Mango", "Poly", "Ajax", "Chelsey"];

const clientNameToFind = "Ajax";
let message;
//? fro ... of
for (const client of savedClients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям знайдений!";
    break;
  }

  message = "Клієнт з таким ім'ям в нас немає!";
}
console.log(message);

//? for

for (let index = 0; index < savedClients.length; index++) {
  if (savedClients[index] === clientNameToFind) {
    message = `Клієнт з таким ім'ям знайдений! на позиції ${index}`;
    break;
  }
  message = "Клієнт з таким ім'ям в нас немає!";
}

const prices = [200, 150, 300, 100, 250];
let clientPrice = 100;

for (let i = 0; i < prices.length; i++) {
  if (prices[i] > clientPrice) {
    continue;
  }
  console.log(`ціни менші ${clientPrice}`);
}

let matrix = [[23, 54, 1, 3], [1, 6, 2], [2], [4, 32, 7]];

let sumOfMatrix = 0;

for (let i = 0; i < matrix.length; i++) {
  console.log("array in matrix", matrix[i]);

  for (let n = 0; n < matrix[i].length; n++) {
    console.log("array in matrix (n)", matrix[i][n]);
    sumOfMatrix += matrix[i][n];
  }
}
