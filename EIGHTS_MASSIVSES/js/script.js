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
