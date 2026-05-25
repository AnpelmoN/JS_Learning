//Створіть функцію, яка рахує, скільки елементів масиву відповідають певній умові, використовуючи колбек-функцію для перевірки.

//Створіть функцію

//Створіть змінну

// count = 0;

//Пройдіться по масиву циклом for...of

//Для кожного елемента викличте

// condition(element);

//Якщо condition повертає true, збільште count на 1
//Поверніть кінцевий результат

//Початковий код:

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// Функція countItems тут

// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;
const countItems = function (array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
};
// Тестування
console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

// Завдання 2: Калькулятор з операціями 📚

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "Помилка";
  }
  return a / b;
};

// Тестування
console.log(calculate(10, 5, add)); // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide)); // Повинно показати 2
console.log(calculate(10, 0, divide)); // Повинно показати помилку

// Завдання 3: Генератор повідомлень 💬

const repeatMessage = function (times, messageCreator) {
  for (let i = 0; i < times; i++) {
    messageCreator(i);
  }
};
const message = (index) => {
  console.log(`Це повідомлення №${index + 1}`);
};

const simpleMath = (index) => {
  console.log(index ** 2);
};

repeatMessage(5, simpleMath);

repeatMessage(5, message);
