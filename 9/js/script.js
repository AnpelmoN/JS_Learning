//? Функціональне оголошення (function declaration) — класичний спосіб оголошення функції в JavaScript.
function sayHi() {
  console.log("Hi from Declaration!");
}
//? Функціональний вираз  (function expression) — звичайне оголошення змінної, значення якої буде функція.

const sayHelloExpression = function () {
  console.log("Hello from Expression!");
};

//? Головна відмінність між цими двома способами оголошення функцій полягає в тому, що функціональні оголошення піднімаються (hoisted) до вершини своєї області видимості, тоді як функціональні вирази не піднімаються. Це означає, що ви можете викликати функцію, оголошену за допомогою function declaration, до її визначення в коді, але не можете зробити це з функцією, оголошеною за допомогою function expression.

function showMessage(text) {
  console.log(text);
}

showMessage(); // undefined
//? З паттерном Guard Clause
function getDiscount(sum) {
  // Guard Clause: проверяем плохое условие сразу
  if (sum < 1000) {
    return "Скидки нет"; // Выходим немедленно
  }

  // Основная логика: пишем без лишних вложений в else
  return "Ваша скидка 10%!";
}

const withdraw = function (amount, balance) {
  if (amount > balance) {
    return "Not enough money";
  }
  if (amount <= 0) {
    return "Invalid amount";
  }
  return "Withdrawal successful";
};

//? Без паттерну Guard Clause
function getDiscountWithoutGuard(sum) {
  if (sum >= 1000) {
    return "Ваша скидка 10%!";
  } else {
    return "Скидки нет";
  }
}

const add = function (x, y) {
  return x + y;
};

//? Псевдомасссив arguments
const showArgs = function () {
  console.log(arguments);
};
showArgs(1, 2, 3, 4, 5);
//? Чому віе псевдомассив?
// Тому що він має індекси і властивість length, але не має методів масиву, таких як forEach, map, filter і т.д.
myFunc("apple", "banana", "cherry");
function myFunc() {
  console.log(arguments[1]);
}

//? Як переробрати arguments в масив?
// 1. Використовуємо Array.from()
const argsArray = Array.from(arguments);
// 2. Використовуємо spread оператор
const argsArray1 = [...arguments];

//? login form

// Налаштування валідації інпутів
const inputNameValue = "";
const validationName = inputNameValue.length > 0 ? true : false;

if (validationName) {
  console.log("Name is valid");
} else {
  console.log("Name is not valid");
}

const inputEmailValue = "";
const validationEmail = inputEmailValue.includes("@") ? true : false;

if (validationEmail) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}

const inputPasswordValue = "";
const validationPassword = inputPasswordValue.length > 8 ? true : false;

if (validationPassword) {
  console.log("Password is valid");
} else {
  console.log("Password is not valid");
}

const validateForm = (inputs) => {
  for (const input of inputs) {
    if (input.name === "username") {
      input.length > 0
        ? console.log("Username is valid")
        : console.log("Username is not valid");
    }
    if (input.name === "email") {
      input.includes("@")
        ? console.log("Email is valid")
        : console.log("Email is not valid");
    }
    if (input.name === "password") {
      input.length > 8
        ? console.log("Password is valid")
        : console.log("Password is not valid");
    }
  }
};

//? Вкладеність умов
if (user) {
  if (user.name) {
    if (user.age >= 18) {
      console.log("Доступ дозволено");
    }
  }
}

//? return - повністю зупиняє виконання ф-ції
if (!user) return "Користувача не знайдено";
if (!user.name) return;
if (user.age < 18) return;
console.log("Доступ дозволено");

// Підрахунок дансих в масивах використовуючи arguments

const sumAll = function () {
  console.log("NIckname", arguments);
  let sum = 0;
  const args = Array.from(arguments);
  console.log("args", args);

  for (let argument of arguments) {
    total += argument;
  }
  return total;
};

console.log(sumAll(1, 2, 3));
//? rest - ... -- дозволяє зібрати будь-яку кількість елементів, в нашому випадку аргументів, в масив
const sumAllRest = function (...args) {
  console.log("args", args);
  let total = 0;
  for (let argument of args) {
    total += argument;
  }
  return total;
};

console.log(sumAllRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//?Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xh3m4n";
const foundOfLogin = function (login) {
  if (logins.includes(login)) {
    return `Користувач ${login} знайдено`;
  }
  return `Користувач ${login} не знайдено.`;
};
console.log(foundOfLogin(loginToFind));
