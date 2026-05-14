//!1. Добавление и удаление элементов
const cart = ['Apple', 'Banana'];

cart.push('Orange');      // ['Apple', 'Banana', 'Orange'] — добавили в конец
cart.pop();               // ['Apple', 'Banana'] — удалили 'Orange'
cart.unshift('Mango');    // ['Mango', 'Apple', 'Banana'] — добавили в начало
cart.shift();             // ['Apple', 'Banana'] — удалили 'Mango'

// splice: с индекса 1 удалить 1 элемент и вставить 'Kiwi'
cart.splice(1, 1, 'Kiwi'); // ['Apple', 'Kiwi']

// slice: вырезать элементы с 0 по 2 (не включая 2)
const subList = cart.slice(0, 2); // ['Apple', 'Kiwi']


//!2. Поиск элементов

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const roles = ['admin', 'editor', 'user'];

console.log(roles.includes('admin')); // true

// find: ищем объект пользователя
const bob = users.find(u => u.name === 'Bob'); // { id: 2, name: 'Bob' }

// findIndex: на каком месте Bob?
const bobIndex = users.findIndex(u => u.name === 'Bob'); // 1


//!!!3. Перебор и трансформация

const prices = [100, 200, 300, 400];

// map: переводим цены в формат строки с валютой
const formattedPrices = prices.map(p => `${p}$`); // ["100$", "200$", "300$", "400$"]

// filter: оставляем только дорогие товары
const expensive = prices.filter(p => p > 250); // [300, 400]

// reduce: считаем общую сумму (0 — начальное значение аккумулятора)
const total = prices.reduce((acc, p) => acc + p, 0); // 1000

// forEach: просто выводим в консоль
prices.forEach(p => console.log(`Price: ${p}`));


//!4. Изменение порядка и структуры

const nums = [1, 10, 2, 25];
const nested = [1, [2, [3]]];

// sort: ВАЖНО! Без функции сортирует как строки (1, 10, 2, 25)
nums.sort((a, b) => a - b); // [1, 2, 10, 25]

// flat: убираем один уровень вложенности
console.log(nested.flat()); // [1, 2, [3]]
console.log(nested.flat(2)); // [1, 2, 3]

const tags = "js,react,vue";
const tagsArray = tags.split(","); // ["js", "react", "vue"]
const backToString = tagsArray.join(" | "); // "js | react | vue"


//!5. Копирование и проверка

const maybeArray = { length: 2, 0: 'a', 1: 'b' };

console.log(Array.isArray(maybeArray)); // false

// Array.from: превращаем в настоящий массив
const realArray = Array.from(maybeArray); // ['a', 'b']

const board = new Array(3).fill('X'); // ['X', 'X', 'X']


//!6. Новые методы (ES2023)

const original = ['Red', 'Green', 'Blue'];

// at: вместо original[original.length - 1]
const last = original.at(-1); // 'Blue'

// toSorted: вернет новый массив, оригинал не изменится
const sorted = original.toSorted(); 

// with: заменяет элемент по индексу в копии
const updated = original.with(1, 'Yellow'); // ['Red', 'Yellow', 'Blue']