// 1 Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "Alex",
  hobby: "football",
  premium: true,
};

// user.mood = "happy";
// user.premium = false;

// const entries = Object.entries(user);

// console.log(entries);

// 2 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps(user));

// 3 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const findBestEmployee = function (employees) {
  let maxTasks = 0;
  let bestEmployee = " ";
  for (const name in employees) {
    const tasksCount = employees[name];

    if (tasksCount > maxTasks) {
      maxTasks = tasksCount;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

// 4 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
  let totalSum = 0;
  for (const name in employees) {
    if (employees.hasOwnProperty(name)) {
      const salaryCount = employees[name];
      totalSum += salaryCount;
    }
  }

  return totalSum;
};

// 5 Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const getAllPropValues = function (arr, prop) {
  let propValues = [];
  for (const item of arr) {
    if (prop in item) {
      propValues.push(item[prop]);
    }
  }

  return propValues;
};

// 6 Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  for (const product of allProdcuts) {
    if (product.name in productName) {
      totalPrice = totalPrice + product.price * product.quantity;

      break;
    }
  }

  return totalPrice;
};
