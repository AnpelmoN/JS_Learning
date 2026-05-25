//1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

//2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const strings = ["first", "second", "third"];
strings.push("fourth");
console.log(strings);
//3. Створити скрипт який поверне суму всіх чисел в масиві.

const numArray = [5, 10, 15, 20, 25];
let sum = 0;
for (let i = 0; i < numArray.length; i++) {
  sum += numArray[i];
}
console.log(sum);

//4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const fiveNumbers = [2, 4, 6, 8, 10];
for (let i = 0; i < fiveNumbers.length; i++) {
  console.log(fiveNumbers[i]);
}

//5. Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.

const fiveStrings = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < fiveStrings.length; i++) {
  if (fiveStrings[i].length > 5) {
    console.log(fiveStrings[i]);
  }
}
//6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const tenNumbers = [3, 7, 2, 9, 4, 12, 5, 8, 1, 6];
let max = tenNumbers[0];
for (let i = 1; i < tenNumbers.length; i++) {
  if (tenNumbers[i] > max) {
    max = tenNumbers[i];
  }
}
console.log(max);
//7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const tenNums = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
for (let i = 0; i < tenNums.length; i++) {
  if (tenNums[i] % 2 === 0) {
    console.log(tenNums[i]);
  }
}
