//? Split(s) - дозволяє перетворити рядок в масив, розбивши її по розподілу s. Це не метод масиву, але розглядаємо ми його зараз так, як раніше про масиви не знали.
const massiveWelcome = "welcome to Ukraine";

console.log(massiveWelcome.split(""));

console.log(massiveWelcome.split(" "));

const clients = ["Mango", "Poly", "Ajax", "Chelsey"];
Console.log(clients.join(" "));
Console.log(clients.join("-"));

const clients2 = ["Mango", "Poly", "Ajax", "Chelsey"];
console.log(clients2.indexOf("Ajax")); // 2
console.log(clients2.indexOf("Chelsey")); // 3
console.log(clients2.indexOf("Kiwi")); // -1

console.log(clients2.includes("Poly")); // true
console.log(clients2.includes("Kiwi")); // false

const fruit = "cherry";
if (fruit === "apple" || fruit === "pear") {
  console.log("is fruit");
}

const fruits = ["cherry", "apple", "pear"];
if (fruit.includes("apple")) {
  console.log("is fruit");
}

const skills = [];
skills.push("html");
skills.push("css");
skills.push("js");
console.log(skills);

skills.pop();
console.log(skills);

const qualityAndSkills = [
  "Уважність",
  "Відповільність",
  "Комунікація",
  "Терпіння",
  "Дисципліна",
  "Доброзичливість",
  "Дружелюбність",
  "Щедрість",
  "Чесність",
  "Вихованість",
];
const skills2 = qualityAndSkills.slice(2, 5);
console.log(skills2);
const quality = qualityAndSkills.slice(0, 4);
console.log(quality);

//? Splice() - дозволяє видаляти, додавати або замінювати елементи в масиві.

// TODO: Видалення елементів

const scopes = [1, 2, 3, 4, 5];

console.log("current", scopes);

// scopes.splice(0, 2);

const deletedScopes = scopes.splice(0, 3);

console.log("after splice", scopes);
console.log("array copy element from scopes", deletedScopes);

// TODO: Додавання елементів
//? splice(position, 0, element, element2, ...)
//? position - позиція, з якої потрібно додати елементи
//? 0 - говорить про те, що елементи не потрібно видаляти з масиву
//? element - елементи, які потрібно додати в масив
const colors = ["red", "green", "blue", "yellow", "pink"];

console.log("current", colors);

colors.splice(1, 0, "black", "white", "gray", "purple");

console.log("after splice", colors);

// TODO: Замінення елементів

const languages = ["C", "C++", "Java", "JavaScript", "Python"];

console.log("current", languages);

languages.splice(1, 1, "phyton");

console.log("after splice", languages);

languages.splice(2, 1, "C#", "Swift", "Go");

console.log("after splice", languages);

//? Конкатенація масивів - метод concat()

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Chelsy", "Lily"];

const allClients = oldClients.concat(newClients);

console.log(allClients);
//? allClients - новий масив, в який скопійовані елементи з oldClients і newClients
console.log(oldClients);
//? oldClients - без змін
console.log(newClients);
//? newClients - без змін

//? spread оператор - дозволяє розбити масив на окремі елементи

const newArray = [...oldClients, ...newClients];

console.log("newArray", newArray);
