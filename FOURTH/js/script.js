//? switch

let cost;
const subscription = "2";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Unknow subscription type");
    break;
}

console.log(cost);

//? Область видимостi

let num = 10;

if (true) {
  //? Block scope це внутріщня  область видимості, змінні які написанні в ній ми не зможемо використовувати в глобаліній області видмості

  let value = "Alice";
  console.log("Block scope", value);
  console.log("Block scope", num);
}

if (true) {
  console.log("Block scope", value);
}

console.log("Block scope", value);
console.log("Global scope", num);

// const globalVariable = "global";
//  if(true) {
//      const blockA = " Block A";
//      console.log{globalVariable};
//      console.log{BlockA};

//      if(true) {
//      const blockB = " Block B";
//      console.log{globalVariable};
//      console.log{BlockA};
//      console.log{blockB};
//  }
//  }

//Напишіть код з використанням switch, що відповідає наступній конструкції if..else. Результат виведіть на екран:

if (browser == "Edge") {
  p.textContent = "You've got the Edge!";
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  p.textContent = "Ми підтримуємо і ці браузери";
} else {
  p.textContent = "Маємо надію, що ця сторінка виглядає добре!";
}

let browser = "w";
switch (browser) {
  case "Edge":
    console.log("You have got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("Ми підтримуємо і ці браузери");
    break;
  default:
    console.log("Маємо надію, що ця сторінка виглядає добре!");
}

// switch &&

// const age = 25

// const gender = "Man"

// switch(true) {
//     case age >= 18 && gender === "Man":
//     console.log("Old man");
//     break;
//    case age >= 18 && gender === "чоловік":
//    console.log("Дорослий чоловік");
//    break;

// }
const age = 25;

const gender = "чоловік";

switch (true) {
  case age >= 18 && gender === "чоловік":
    console.log("Дорослий чоловік");
    break;

  case age >= 18 && gender === "жінка":
    console.log("Доросла жінка");
    break;

  default:
    console.log("Неповнолітній або невідома стать");
    break;
}

//? || Групування case

let b = 3;

switch (b) {
  case 4:
    console.log("Вірно!");
    break;
  case 3:
  case 5:
    console.log("Невірно!");
    break;

  default:
    console.log("Результат виглядає дивон 0_о");
    break;
}

//Перепишіть код нижче використовуючи одну конструкцію switch. Результат виведіть на екран. Данні отримайте з інпуту:
// let a = значення інпуту;

// if (a === 0) {
//    p.textContent = 0;
// }
// if (a === 1) {
//   p.textContent = 1;
// }

// if (a === 2 || a === 3) {
//   p.textContent = '2,3';
// }

let a = 3;
switch (+a) {
  case 0:
    console.log(a);
    break;
  case 1:
    console.log(a);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}
