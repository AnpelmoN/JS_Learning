// //? Цикл while - циклБ який виконується поки істинна умова
// let expression = "Вираз";

// while (expression.length < 30) {
//   expression = " After";
// }

// console.log(expression);

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClientInHotel = 25;

// while (clientCounter <= maxClientInHotel) {
//   console.log(clientCounter);
//   clientCounter++;
// }

// let counterForLoop = 11;

// do {
//   console.log(counterForLoop);
//   counterForLoop++;
// } while (counterForLoop < 100);

// let passwordUser = "";

// do {
//   passwordUser = prompt("write a password");
// } while (passwordUser < 5);

// for (let i = 0; 1 < 10; i++) {
//   console.log(i);
// }

// const target = 21;
// let sum = 0;

// for (let i = 0; i <= target; i += 2) {
//   sum += i;
// }
// console.log(sum);

// const quote =
//   "Все залежить від думок. Думка - початок всього. І думками потрібно керувати. І тому головна справа вдосконалення - робота над думками";
// let word;
// for (let i = 0; i < quote.length; i++) {
//   if (quote.includes("керувати")) {
//     word = "керувати";
//     break;
//   }
// }
// console.log(word);

// const number = 10;
// for (let i = 1; i < number; i++) {
//   //? Числа які діляться на 2 без остачі ми пропускаємо, таким чином залишаючи всі непарні числа
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("non-pair", i);
// }
// Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

// let numberFromUser = +prompt("Введіть число більше 100");

// while (numberFromUser < 100) {
//   alert("Число менше 100, введіть інше");
//   numberFromUser = +prompt("Введіть число більше 100");
// }

let numFromUser;
do {
  numFromUser = +prompt("Введіть число більше 100");
  if (numFromUser <= 100) {
    alert("Число менше 100, введіть інше");
  }
} while (numFromUser <= 100);

let employees = 1000;
let totalSalary = 0;

for (let index = 0; index < employees; index++) {
  const salary = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
  totalSalary += salary;
}
console.log("Total Salary:", totalSalary);

// Напиши скрипт який порахує суму всіх парних чисел, які входять в діапазон чисел в змінних від min до max. Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому 2 парних числа - 2 та 4, їх сума 6. Можна зробити отримання значень мінімального і максимального числа через інпут.

let min = 0;
let max = 5;

let total = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    total += i; // total = total + i
  }
}
console.log(total);
