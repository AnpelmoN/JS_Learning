let choice = "Чай";

switch (choice) {
  case "Кава":
    console.log("Кава");
    break;
  case "Чай":
    console.log("Чай");
    break;
  case "Сік":
    console.log("Сік");
    break;
  default:
    console.log("Інше");
}

let day = "Субота";

if (day == "Субота" || day == "Неділя") {
  console.log("Вихідний");
} else {
  console.log("Робочий день");
}

let num = 4;

if (num == 3 || num == 4 || num == 5) {
  console.log("Весна");
} else if (num == 6 || num == 7 || num == 8) {
  console.log("Літо");
} else if (num == 9 || num == 10 || num == 11) {
  console.log("Осінь");
} else if (num == 12 || num == 1 || num == 2) {
  console.log("Зима");
} else {
  console.log("Некоректний номер місяця.");
}

let color = "зелений";

switch (color) {
  case "червоний":
    console.log("стоп");
    break;
  case "жовтий":
    console.log("чекати");
    break;
  case "зелений":
    console.log("йти");
    break;
  default:
    console.log("світлофор зломався");
}

let numOne = 1;
let numTwo = 2;
let operation = "*";

switch (operation) {
  case "+":
    console.log(numOne + numTwo);
    break;
  case "-":
    console.log(numOne - numTwo);
    break;
  case "*":
    console.log(numOne * numTwo);
    break;
  case "/":
    if (numTwo === 0) {
      console.log("На нуль деліти не можливо!!!");
    } else {
      console.log(numOne / numTwo);
      break;
    }
  default:
    console.log("Невідомий оператор");
}
