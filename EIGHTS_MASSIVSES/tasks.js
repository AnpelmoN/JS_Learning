// Робимо slug в URL з назви статті.  Заголовок статті складається тільки з букв та пропусків
//  - Нормалізуємо рядок
//  - Разбиваємо по словах
//  - Зшиваємо в рядок з розділителями
//  - Ченінг
// // Повинно вийти top-10-benefits-of-react-framework
const title = "Top 10 benefits of React framework";
const slug = title.toLowerCase().split(/\s+/).join("-");
// console.log(title.split(/\s+/));

console.log(slug);

// Напиши скрипт який рахує суму елементів двух масивів.
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const array = array1.concat(array2);

console.log(array);

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

//const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, вивести цей масив в консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. Після цього елементи масива поєднати в строку і вивести строку в консоль.
const message = "Welcome to Ukraine!";

const letters = message.split("");

console.log(letters);

console.log(message.indexOf("l"));

const joinedMessage = letters.join("");

console.log(joinedMessage);

//Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву за дпомогою push, splice and pop . Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles);
styles.splice(1, 1, "Класика");
console.log(styles);
const firstElement = styles.shift();
console.log(firstElement);
styles.unshift("Реп", "Реггі");
console.log(styles);

//Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = "Карточка-3";

const indexOfCardToRemove = cards.indexOf(cardToRemove);

console.log(indexOfCardToRemove); // -1 якщо не знайде елемент

if (indexOfCardToRemove !== -1) {
  cards.splice(indexOfCardToRemove, 1);
}

console.log(cards);

const cardToInsert = "Карточка-6";
cards.push(cardToInsert);
console.log(cards);
