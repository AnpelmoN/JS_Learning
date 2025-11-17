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
