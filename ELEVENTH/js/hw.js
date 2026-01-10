// 1 Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: "Ben",
  accountNumber: 12345678910,
  balance: 30043,
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Рахунок поповнено на ${amount}. Новий баланс: ${this.balance}`
    );
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough money");
    } else {
      this.balance -= amount;
      console.log(`З рахунка знято ${amount}. Новий баланс: ${this.balance}`);
    }
  },
};

const isDeposit = confirm("Бажаєте поповнити рахунок?");

if (isDeposit) {
  const amount = +prompt("На яку суму ви хочете поповнити рахунок?");
  bankAccount.deposit(amount);
} else {
  const isWithdraw = confirm("Бажаєте зняти готівку?");
  if (isWithdraw) {
    const amount = +prompt("Яку суму ви хочете зняти з рахунку?");
    bankAccount.withdraw(amount);
  } else {
    console.log("Доброго вам дня!");
  }
}

// 2 Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const question = +prompt("Яка зараз температура?");

const weather = {
  temperature: question,
  humidity: 12,
  windSpeed: 5,

  answer() {
    return this.temperature < 0;
    // if (this.temperature < 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  },
};

if (weather.answer()) {
  console.log("температура нижче 0 градусів Цельсія");
} else {
  console.log("температура вища 0 градусів Цельсія");
}

// 3 Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password.
const user = {
  name: "Artur",
  email: "example@gmail.com",
  password: "123Abc",

  login() {
    if (this.password === "123Abc" && this.email === "example@gmail.com") {
      console.log("Ви увійшли в аккаунт");
    } else {
      console.log("Пароль або логін на вірний");
    }
  },
};

//if (name.length >= 3 && email.includes("@.") && password.length >= 6) {
//   console.log("Перенаправлення на іншу сторінку");
// } else {
//   console.log("Помилка: неправильне заповнення");
// }

// 4 Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.
const movie = {
  title: "Avatar: Fire and Ash",
  year: 2025,
  director: "James Francis Cameron",
  rating: 7.4,

  ratingCheck() {
    return this.rating > 8;
  },
};
console.log(
  `Назва: ${movie.title}, Pейтинг фільму вище 8: ${movie.ratingCheck()}, Рік ${
    movie.year
  }, Режиссер ${movie.director}`
);
