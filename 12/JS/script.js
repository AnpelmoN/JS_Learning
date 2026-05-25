const { useReducer } = require("react");

const friends = [
  { name: "Jonh", age: 20, online: true },
  { name: "Sarah", age: 25, online: false },
  { name: "Mike", age: 30, online: true },
  { name: "Jane", age: 35, online: false },
];
const user = user.find((user) => user.name === "Mike");
const user2 = user.find((user) => user.name === "Mike");

const phrases = [
  "Все починається з першого кроку.",
  "Маленький прогрес — теж прогрес.",
  "Помилки — це частина навчання.",
  "Сьогодні гарний день, щоб почати.",
  "Ти робиш більше, ніж здається.",
  "Не поспішай — рухайся впевнено.",
  "Кожен день дає новий шанс.",
  "Сфокусуйся на тому, що можеш змінити.",
  "Результат приходить з досвідом.",
  "Навіть складні речі стають простішими з часом.",
  "Краще зробити, ніж ідеально планувати.",
  "Твоя наполегливість має значення.",
  "Навчання — це інвестиція в себе.",
  "Не порівнюй свій шлях з чужим.",
  "Крок за кроком — і ти дійдеш до мети.",
];

const phrase = phrase.find((phrase) => {
  return phrase === "Результат приходить з досвідом.";
});

console.log(phrase);

const products = [
  {
    id: 1,
    name: "Смартфон Galaxy S23",
    category: "Електроніка",
    price: 29999,
    inStock: true,
    rating: 4.7,
    description: "Новий флагман від Samsung з чудовою камерою та батареєю.",
  },
  {
    id: 2,
    name: "Ноутбук MacBook Air M2",
    category: "Електроніка",
    price: 54999,
    inStock: false,
    rating: 4.9,
    description:
      "Тонкий і легкий ноутбук з високою продуктивністю та довгим часом роботи батареї.",
  },

  {
    id: 3,
    name: "Кава Arabica 250г",
    category: "Продукти",
    price: 199,
    inStock: true,
    rating: 4.5,
    description: "Ароматна кава для ранкового заряду енергії.",
  },
  {
    id: 4,
    name: 'Рюкзак для ноутбука 15"',
    category: "Аксесуари",
    price: 999,
    inStock: true,
    rating: 4.3,
    description:
      "Зручний рюкзак з відділенням для ноутбука та додатковими кишенями.",
  },
];

const isAllProductsInStock = products.every((product) => product.inStock);

const numbers3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers3.length; i++) {
  sum += numbers3[i];
}

console.log(sum);

const total = numbers3.reduce((acc, num) => acc + num);

console.log(total);

const evenNumbers = numbers3.reduce((acc, num) => {
  if (num % 2 === 0) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(evenNumbers);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
const sumOfLikes = tweets.reduce((acc, tweet) => acc + tweet.reduce);

const numbers6 = [100, 21, 320, 46, 523];

console.log(numbers6.sort((a, b) => a - b));
console.log(numbers6.sort((a, b) => b - a));

//localeCompare()
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(fruits.sort((a, b) => a.localeCompare(b)));
console.log(fruits.sort((a, b) => b.localeCompare(a)));

console.log(fruits);

const userForRender = [
  { name: "Mango", daysActive: 15 },
  { name: "Poly", daysActive: 4 },
  { name: "Ajax", daysActive: 27 },
  { name: "Chelsey", daysActive: 2 },
];
userForRender.sort((a, b) => a.name.localeCompare(b, name));

userForRender.sort((a, b) => b.daysActive - a.daysActive);

//
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const sumOfProduct = cart.reduce(
  (current, product) => current + product.quantity,
  0,
);

console.log(sumOfProduct);

// Відсортуйте масив об'єктів за спаданням значення властивості price, а при однаковому значенні price - за зростанням значення властивості quantity.
const products3 = [
  { name: "Product 1", price: 100, quantity: 5 }, // 1a
  { name: "Product 2", price: 50, quantity: 10 }, // 1b 2a
  { name: "Product 3", price: 200, quantity: 2 }, // 2b 3a
  { name: "Product 4", price: 50, quantity: 5 }, // 3b
];

products3.sort((highest, lowest) => {
  if (highest.price === lowest.price) {
    return highest.quantity - lowest.quantity;
  }
  return lowest.price - highest.price;
});

console.log(products3);

//Знайдіть середнє значення чисел в масиві
const numbers = [1, 2, 3, 4, 5];

const numbersSum = numbers.reduce((acc, curr) => acc + curr);
console.log(numbersSum / numbers.length);

// Перетворіть масив об'єктів у об'єкт, де ключами будуть властивості name, а значеннями - відповідні значення властивості value:
const arr = [
  { name: "apple", value: 2 },
  { name: "banana", value: 3 },
  { name: "orange", value: 4 },
];

const obj = arr.reduce((acc, el) => {
  acc[el.name] = el.value;
  return acc;
}, {});

console.log(obj); // {apple: 2, banana: 3, orange: 4}
