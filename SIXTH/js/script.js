//? Цикл while - циклБ який виконується поки істинна умова
let expression = "Вираз";

while (expression.length < 30) {
  expression = " After";
}

console.log(expression);

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter += 1;
}

let clientCounter = 18;
const maxClientInHotel = 25;

while (clientCounter <= maxClientInHotel) {
  console.log(clientCounter);
  clientCounter++;
}

let counterForLoop = 11;

do {
  console.log(counterForLoop);
  counterForLoop++;
} while (counterForLoop < 100);

let passwordUser = "";

do {
  passwordUser = prompt("write a password");
} while (passwordUser < 5);

for (let i = 0; 1 < 10; i++) {
  console.log(i);
}

const target = 21;
let sum = 0;

for (let i = 0; i <= target; i += 2) {
  sum += i;
}
console.log(sum);

const quote =
  "Все залежить від думок. Думка - початок всього. І думками потрібно керувати. І тому головна справа вдосконалення - робота над думками";
let word;
for (let i = 0; i < quote.length; i++) {
  if (quote.includes("керувати")) {
    word = "керувати";
    break;
  }
}
console.log(word);

const number = 10;
for (let i = 1; i < number; i++) {
  //? Числа які діляться на 2 без остачі ми пропускаємо, таким чином залишаючи всі непарні числа
  if (i % 2 === 0) {
    continue;
  }

  console.log("non-pair", i);
}
