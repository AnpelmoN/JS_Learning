// 1 Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

// 2 Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
let email = "artur.yurkov@gmail.com";
let content = email.includes("@");

console.log(
  `Amount of symbols in email: ${email.length}, Contains @: ${content}`
);

// 3 Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const word1 = "My";
const word2 = "name";
const word3 = "is";
let fullName = `${word1} ${word2} ${word3}`;
fullName += " Viktor";
console.log(fullName);

// 4 Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
let userName = "Artur";
let payment = 500;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
