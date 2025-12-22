//?Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax"]);

//?Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
  if (message.trim() === "") {
    return "Нема тексту";
  }
  const wordsCount = message.split(" ").length;
  return `Стільки коштує ваше гравіювання ${wordsCount * pricePerWord} $`;
};

//?Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findlongestWord = function (string) {
  const arrayOfWords = string.split(" "); //? ['adskljal', 'ajdl;a', 'mmmm', 'asdkl;alksjdk', 'a']
  console.log("Words massive: ", arrayOfWords);
  let longestWord = arrayOfWords[0]; //? 'adskljal'

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
};
console.log(findlongestWord("adskljal ajdl;a  mmmm asdkl;alksjdk a"));

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
let string =
  "Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно";
const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  }

  return string.slice(0, 40) + "...";
};
console.log(formatString(string));

//?Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
let message =
  " Функція перевіряє її на вміст слів  і . Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.";

const checkForSpam = function (message) {
  let normalizedMessage = message.toLowerCase();
  if (
    normalizedMessage.includes("spam") ||
    normalizedMessage.includes("sale")
  ) {
    return true;
  }
  return false;
};
console.log(checkForSpam(message));

//? Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

const sumOfNumbers = function (numbers) {
  let input;
  let numbers = [];
  let total = 0;

  do {
    input = prompt("Введіть число");
    if (input !== null) {
      const number = +input;
      if (!Number.isNaN(number)) {
        alert("Було введено не число, спробуйте ще раз");
      } else {
        numbers.push(number);
      }
    }
  } while (input !== null);

  if (numbers.length !== 0) {
    for (const number of numbers) {
      total += number;
    }
  }
  return `Загальна сума чисел дорівнює ${total}`;
};

//?
