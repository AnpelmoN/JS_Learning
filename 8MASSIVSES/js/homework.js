//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

// 👉 Спочатку через for

const friends = ["яблуко", "банан", "груша", "апельсин"];
let string = "";
for (let i = 0; i < friends.length; i++) {
  string += `${friends[i]}, `;
  if (i === friends.length - 1) {
    console.log(string.slice(0, string.length - 2));
  }
}

// 👉 Потім через join()

console.log(friends.join(", "));

//2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

//3. Видалити картку

const cardToRemove = "Карточка-3";
const removing = cards.indexOf(cardToRemove);
cards.splice(removing, 1);
console.log(cards);

//4. Додати картку

const cardToAdd = "Карточка-6";
const adding = cards.indexOf("Карточка-5") + 1;
cards.splice(adding, 0, cardToAdd);
console.log(cards);

//5. Оновлення картки

const cardToUpdate = "Карточка-4";
const cardUpdate = "Оновлена карточка-4";
const updating = cards.indexOf(cardToUpdate);
cards.splice(updating, 1, cardUpdate);
console.log(cards);
