//? функция doHomeWork принимает два параметра: subject (предмет) и callback (функция обратного вызова).
const doHomeWork = function (subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
  console.log(`Finished my ${subject} homework`);
  for (let i = 0; i < 1000000000; i++) {
    i += 1;
    // console.log("result");
  }
};
//? callback функція - тому що вона передається в якості аргумента в іншу ф-цію

const alertFinished = function () {
  setTimeout(() => {
    console.log("Finished my homework"); //? це асинхронний код, тому що виконається після синхронного коду
  }, 1);
};

doHomeWork("math", alertFinished);

//? Абстракція - це приховування складних деталей реалізації і надання користувачеві простого інтерфейсу для взаємодії з об'єктом або системою.
//? Колбек - це функція, яка передається як аргумент в іншу функцію і виконується після завершення певної операції або події.
//? Асинхронний код - це код, який виконується незалежно від основного потоку виконання програми, дозволяючи програмі продовжувати роботу, поки очікується завершення певних операцій, таких як запити до серверу або таймери.

const arr1 = [1, 2, 3, 4, 5];
const total1 = 0;
for (let i = 0; i < arr1.length; i++) {
  total1 += arr1[i];
}
console.log(total1);
const sumOfPrices = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};
console.log(sumOfPrices(arr1));

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(sumOfPrices(arr2));

// const arr3 = [1, 2, 3, 4, 5];
// const total3 = 0;
// for (let i = 0; i < 5; i++) {
//   total3 += arr3[i];
// }

// const arr4 = [1, 2, 3, 4, 5];
// const total4 = 0;
// for (let i = 0; i < 5; i++) {
//   total4 += arr4[i];
// }

const filter = function (arr, test) {
  const filteresElement = [];

  for (const element of arr) {
    const passed = test(element, 100);
    if (passed) {
      filteresElement.push(element);
    }
  }

  return filteresElement;
};
const fruits = [
  {
    name: "apple",
    price: 10,
    quantity: 200,
  },
  {
    name: "banana",
    price: 20,
    quantity: 100,
  },
  {
    name: "cherry",
    price: 30,
    quantity: 150,
  },
  {
    name: "elderberry",
    price: 40,
    quantity: 100,
  },
  {
    name: "fig",
    price: 50,
    quantity: 100,
  },
  {
    name: "grape",
    price: 60,
    quantity: 120,
  },
  {
    name: "pineapple",
    price: 70,
    quantity: 70,
  },
];
const cheapFruits = function (fruits, price) {
  return fruits.price < price;
};

const quantityFruits = function (fruits, quantity) {
  return fruits.quantity <= quantity;
};

const resultCheap = filter(fruits, cheapFruits);
console.log(resultCheap);

const resultQuantity = filter(fruits, quantityFruits);
console.log(resultQuantity);

//? Arrow function

const handleSubmit = (email, user, age) => {
  const userData = {
    email,
    user,
    age,
  };
  let isSuccess = true;

  if (isSuccess) {
    return userData;
  } else {
    return null;
  }
};

const showFromData = (email, user, age) => {
  `Email: ${email}, User: ${user}, Age: ${age}`;
};

console.log(handleSubmit("test@gmail.com", "test", 20));
console.log(showFromData("test@gmail.com", "test", 20));
