//Уявімо, що ти закладаєш фундамент будинку. Ти можеш сам замішувати бетон, носити цеглу та класти її. А можеш стати «менеджером» і дати команду майстру: «Коли цегла приїде, поклади її ось так». Оця команда, яку ти передаєш майстру, і є колбеком (callback-функцією).

//Oдна функція приймає іншу функцію як «інструкцію», яку треба виконати пізніше
//Це дозволяє нам абстрагуватися від деталей — нам не важливо, як саме функція перебирає масив, нам важливо, що саме вона має зробити з кожним елементом.

// 1. Функція, яка приймає іншу функцію (колбек)

const processUser = function (name, callback) {
  console.log("Обробка данних користувача: ", name);
  callback(); // Викликаємо колбек тут
};

// 2. Функція, яку ми передамо як колбек

const showDoneMessage = function () {
  console.log("Готово! Користувача оброблено.");
};

// 3. Виклик: передаємо саму функцію, а не її результат
processUser("Іван", showDoneMessage);

// Головна мета колбеків — уникати дублювання коду.

const repeatThreeTimes = function (callback) {
  for (let i = 1; i <= 3; i++) {
    callback(i);
  }
};

const result = [];

const addToResult = function (num) {
  result.push(num);
};

repeatThreeTimes(addToResult);

console.log(result); // [ 1, 2, 3 ]

// Приклад з фільтрацією масиву

const numbers = [10, 20, 30, 40];

const isBig = function (n) {
  return n > 25;
};

const filtered = numbers.filter(isBig);
