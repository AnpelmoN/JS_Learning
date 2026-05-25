// TODD Логічне і (&&) завжди зупиняеться на брехні
//  true     false
console.log(8 > 2 && 9 < 4); // false

console.log(8 > 2 && 9 < 4 && 15 < 7 && 8 > 1); // false

console.log("Я правдивий" && ""); // false

console.log("Я правдивий" && false && ["Я також правдивий"]);

console.log("Я правдивий" && true && ["Я також правдивий"]);

console.log(null && 0 && undefined && ""); //? 0 , тому що як тільки && зустрічається з першим falsy значенням, він повертає його і не перевіряє далі

// TODD Логічне і (||) завжди зупиняеться на правді

console.log(8 > 2 || 9 < 4);

console.log(false || false || true); //? Якщо всі значення правдиві, повертається останнє

console.log(false || "Я правдивий" || 0 || "Я спанч боб"); //? Я правдивий , тому що як тільки || зустрічається з першим truthy значенням, він повертає його і не перевіряє далі

console.log("Я правдивий" || "Спанч Боб" || "Рікі і Морті");

console.log(false || "" || undefined || null);

// TODD Логічне HE (!)

console.log(!true); // false

console.log(!""); // true

console.log(!1); // false

console.log(!0); // true

// TODO Оператори разголуження
//? if

if (true) {
  console.log("Hello User");
}

if (9 < 7) {
  console.log("Ця умова хибна тому результат не виведеться");
}

let getUserAgeFrominterface = 21;

if (18 < getUserAgeFrominterface) {
  console.log("User повнолітній");
}

//? if ... else

let cost;

let subscriptionType = "Premium";

if (subscriptionType === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(`Вартість вашої підписки: ${cost} USD`);

//? else ... if

if (subscriptionType === "pro") {
  cost = 100;
} else if (subscriptionType === "free") {
  cost = 0;
} else if (subscriptionType === "Premium") {
  cost = 500;
} else {
  console.log("Тип підписки не вірний");
}

console.log(`Вартість вашої підписки: ${cost} USD`);

const salary = 500;

if (salary >= 1000 && salary < 2000) {
  console.log("Level 1");
} else if (salary >= 2000 && salary < 3000) {
  console.log("Level 2");
} else if (salary >= 3000 && salary < 4000) {
  console.log("Level 3");
} else if (salary >= 4000 && salary < 5000) {
  console.log("Level 4");
} else {
  console.log("Працюй більше!!!");
}

let getYearReleaseEcmaScript = prompt(
  "В якому році була опублікована EcmaScript-2015?"
);

if (getYearReleaseEcmaScript < 2015) {
  alert("Зарано...");
} else if (getYearReleaseEcmaScript > 2015) {
  alert("Запізно...");
} else {
  alert("Вірно!");
}

// TODO Тернарний оператор

let age = prompt("Скільки вам років");

let accessAllowed =
  age >= 18
    ? alert("Ви можете здійснити оплату")
    : alert("Ви не можете здійснити оплату");

const balance = 500;

if (balance > 1) {
  let message = "Yuor balance positive";
  console.log(message);
} else {
  let message = "Your balance is negative";
}

const message =
  balance > 1 ? "Your balance is positive" : "Ypur balance is negative";

let ageUser = prompt("How old are you?");

let answerrorUser;
if (ageUser < 3) {
  answerrorUser = "Hi kid";
} else if (ageUser < 18) {
  answerrorUser = "Good morning";
} else {
  answerrorUser = "Hello";
}
alert(answerrorUser);

// Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

let answerAboutName = prompt("Яка “офіційна” назва JavaScript?");
let messageName =
  answerAboutName === "ECMAScript"
    ? alert("Правильно!")
    : alert("Ви не знаєте? ECMAScript!");

// if (answerAboutName === "ECMAScript") {
//   messageName = "Правильно!";
// } else {
//   messageName = "Ви не знаєте? ECMAScript!";
// }

// alert(messageName);
const value = prompt("give a number");

if (value > 0) {
  alert("1");
} else if (value < 0) {
  alert("-1");
} else if (value === 0) {
  alert("0");
} else {
  console.log("none");
}

// Перепишіть конструкцію if, використовуючи умовний оператор '?':
// let result;
// if (a + b < 4) {
//   result = 'Нижче';
// } else {
//   result = 'Вище';
// }

let a = 15;
let b = -12;

let result = a + b < 4 ? alert("Вище!") : alert("Нижче");

//напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
const x1 = 10;
const x2 = 30;
const number = 45;

if (x1 < number < x2) {
  alert("від х1 до х2");
} else {
  alert("до х1 або після х2");
}

//Напиши скрипт який перевіряє можливість відкрити чат з користувачем. Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати

const isOnline = true;
const isFriend = true;
const isDnd = true;

if (isOnline && isFriend && isDnd) {
  console.log("відкрити чат з користувачем.");
}

// Напиши скрипт перевірки підписки користувачапід час доступу до контенту. Єтри типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.
