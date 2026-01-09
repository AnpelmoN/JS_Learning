//? Перебір об'єктів

//TODO for...in

const user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  //   console.log(key);  // ім'я властивості
  //name
  //age
  //isAdmin
  console.log(user[key]); // значення властивості
  //John
  //30
  //true
}

//TODO Методи для роботи з об'єктами

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
  isPool: true,
};

const keys = Object.keys(hotel);

console.log(keys); // ['name', 'stars', 'capacity', 'isPool']

const values = Object.values(hotel);

console.log(values); // ['Resort Hotel', 5, 100, true]

const entries = Object.entries(hotel);

console.log(entries); // [['name', 'Resort Hotel'], ['stars', 5], ['capacity', 100], ['isPool', true]]

for (let key of keys) {
  console.log("Value: ", hotel[key]);

  if (key === isPool && hotel[key]) {
    console.log("Готель з басейном");
  }
}

//? Операція ...spread - дозволяє розгорнути елементи масиву або властивості обʼєктів

const temperatures = [18, 13, 16, 20, 43, 1, -16];

console.log("temperatures - ", temperatures);
//[
//   18, 13,  16, 20,
//   43,  1, -16
// ]

console.log("...temperatures - ", ...temperatures); // 18 13 16 20 43 1 -16

const min = Math.min(...temperatures);
console.log("min - ", min);

const houses = ["Arryn", "Stark", "Lannister", "Targaryen", "Baratheon"];

const copyHouses = [...houses]; // || houses.slice()

console.log("copyHouses - ", copyHouses);

const completedHouses = ["Greyjoy", ...houses, "Tyrell"];

console.log("completedHouses - ", completedHouses);

//? Об'єднання масивів

const firstHouses = ["Arryn", "Stark", "Lannister"];
const secondHouses = ["Targaryen", "Baratheon", "Greyjoy"];

const joinedHouses = [...firstHouses, ...secondHouses]; // || firstHouses.concat(secondHouses)

console.log("joinedHouses - ", joinedHouses);

const housesInDebt = [...houses.slice(0, 3), "Bolton", ...houses.slice(3)];

console.log("housesInDebt - ", housesInDebt);

//TODO створення нового масиву з оновленими значеннями

const updatesHouses = [...houses.slice(0, 2), "Martell", ...houses.slice(3)];

console.log("updatesHouses - ", updatesHouses);

//TODO розпилнення об'єктів

const a = { x: 1, y: 2 };

log("a - ", a); // { x: 1, y: 2 }

const b = { x: 0, z: 3 };

console.log("b - ", b); // { x: 0, z: 3 }

console.log("...a , ...b ", ...a, ...b); // x:1, y:2, z:3

const c = { x: 5, j: 10, ...a, z: 15, ...b };

console.log("c - ", c); // { x: 0, j: 10, y: 2, z: 3 }

const userAccount = {
  type: "user",
  name: "John",
  startWork: 2020,
};

const adminAccount = {
  type: "admin",
  access: ["level-employee", "edit", "delete"],
};
//? Операція ...spread дозволяє обʼєднати властивості двох обʼєктів (масивів)
const manager = {
  ...userAccount,
  ...adminAccount,
};
console.log("manager - ", manager);
// {
//   type: 'admin',
//   name: 'John',
//   startWork: 2020,
//   access: [ 'level-employee', 'edit', 'delete' ]
// }

//Присвоєння за посиланням і за значенням

const r = 5;

const q = r; // Тут робиться копія значення

console.log("r - ", r); // 5
console.log("q - ", q); // 5

r = 10;

console.log("r - ", r); // 10
console.log("q - ", q); // 5

const userType = ["Admin"];
const adminType = userType;
//!(посилання) таким чином дані стають взаємозалежними один від оного змінюючи одну змінну з масивом зміниться і інша змінна

console.log("userType - ", userType); // ['Admin']
console.log("adminType - ", adminType); // ['Admin']

userType.push("User");

console.log("userType - ", userType); // ['Admin', 'User']
console.log("adminType - ", adminType); // ['Admin', 'User']

adminType.push("Ajax");

console.log("userType - ", userType); // ['Admin', 'User', 'Ajax']
console.log("adminType - ", adminType); // ['Admin', 'User', 'Ajax']

// Tasks

//Дано масив об’єктів
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

//Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти

// const findFriendByName = function (array, name) {
//   for (const friend of array) {
//     if (friend.name === name) {
//       return friend;
//     }
//   }
//   return null;
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

//Написати функцію яка буде повертати масив всіх імен друзів

const getAllNames = function (array) {
  const namesArray = [];
  for (let i = 0; i < array.length; i++) {
    namesArray.push(array[i].name);
  }
  return namesArray;
};

console.log(getAllNames(friends));

//Написати функцію яка буде повертати масив імен друзів які онлайн

const getOnlineFriends = function (array) {
  const onlineArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].online) {
      onlineArray.push(array[i].name);
    }
  }
  return onlineArray;
};

console.log(getOnlineFriends(friends));

//Написати функцію яка буде повертати масив імен друзів які офлайн
const getOfflineFriends = function (array) {
  const offlineArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i].online) {
      offlineArray.push(array[i].name);
    }
  }
  return offlineArray;
};

console.log(getOfflineFriends(friends));
