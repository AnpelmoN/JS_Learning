//Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
let num = 1;

while (num < 10) {
  num += 1;
}
console.log(num);

//Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue

const number = 20;
for (let i = 2; i <= number; i++) {
  //? Числа які діляться на 2 без остачі ми пропускаємо, таким чином залишаючи всі непарні числа
  if (i % 2 !== 0) {
    continue;
  }

  console.log("pair", i);
}
//Вивести в консоль таблицю множення числа 7 за допомогою циклу for.

let multiplier = 7;
for (let i = 1; i <= 10; i++) {
  console.log(multiplier * i);
}

//Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
let n = 23;
for (let i = 1; i < n; i++) {
  if (i >= n) {
    console.log("Number is large or equal to n");
    break;
  } else {
    console.log(i);
  }
}

//За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

let numbers = 1;
while (numbers <= 20) {
  numbers++;

  if (numbers % 3 === 0) {
    continue;
  } else {
    console.log(numbers);
  }
}
