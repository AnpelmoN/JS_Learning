//? OOП (Обьектноорентированное програмирование)

// 1 variation to make prototype

const car = {
  wheels: 4,
  speed: 220,
  color: "white",
  drive() {
    console.log("go");
  },
};

const dodge = {
  _proto_: car,
  health: 100,
};

console.log(dodge);

console.log(dodge.wheels);
console.log(dodge.speed);

// dodge.drive();

// 2 method to create protype

//? Object.create()

const mazda = Object.create(car);

mazda.name = "mazda";
mazda.color = "red";

console.log(mazda);
console.log(mazda.speed);

//? hasOwnProperty - check if property is from oject on method that we call

console.log(mazda.hasOwnProperty("name"));
console.log(mazda.hasOwnProperty("speed"));

//classes

// call classes

class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const alex = new User("Alex", "alex@gmail.com");

console.log(alex);

const poly = new User("Poly", "poly@gmail.com");

class VipUser {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const user = new VipUser({ name: "Oleg", email: "oleg@gmail.com" });

//
//
//

class Car {
  //# - для свойстав, которые не должны изменяться после создания обьекта
  #fuelLevel = 100;

  // getter - для получения значения приватного свойства
  get fuelLevel() {
    return this.#fuelLevel;
  }

  // setter - для изменения значения приватного свойства
  set fuelLevel(level) {
    if (level >= 0 && level <= 100) {
      this.#fuelLevel = level;
    } else {
      console.log("Уровень топлива должен быть от 0 до 100");
    }
  }

  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  signal() {
    console.log("Би-бип! Это я " + this.name);
  }
}

let myCar = new Car("red", "Toyota");

// myCar.#fuelLevel = 5000; // ❌ Ошибка! Снаружи напрямую изменить нельзя

myCar.fuelLevel = 80; // ✅ Используем сеттер для изменения
console.log(myCar.fuelLevel); // ✅ Используем геттер для получения значения

myCar.signal();

class Car {
  // Статичное свойство (общее для всего класса)
  static allCars = 0;

  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
    Car.allCars++; // Увеличиваем счетчик завода при выпуске новой машины
  }

  // Статичный метод
  static compare(car1, car2) {
    console.log(`Сравниваем ${car1.brand} и ${car2.brand}...`);
  }
}

let car1 = new Car("красный", "Toyota");
let car2 = new Car("черный", "BMW");

// Обращаемся напрямую к классу (заводу), а не к car1 или car2
console.log(Car.allCars); // Выведет 2
Car.compare(car1, car2);

class Truck extends Car {
  constructor(color, brand, loadCapacity) {
    // 1. Сначала отправляем цвет и бренд на родительскую сборочную линию
    super(color, brand);

    // 2. Затем добавляем уникальное свойство самого грузовика
    this.loadCapacity = loadCapacity;
  }

  // Мы можем добавить уникальный метод только для грузовика
  разгрузить() {
    console.log(`Грузовик ${this.brand} выгрузил ${this.loadCapacity} тонн!`);
  }
}

let volvo = new Truck("синий", "Volvo", 20);
console.log(volvo);

class Car {
  constructor(options) {
    this.color = options.color;
    this.brand = options.brand;
    this.year = options.year;
  }
}
class Car {
  // Программа сама достанет нужные свойства из переданного объекта
  constructor({ color, brand, year }) {
    this.color = color;
    this.brand = brand;
    this.year = year;
  }
}

// Передаем один объект с настройками
let myCar = new Car({ color: "красный", brand: "Toyota", year: 2023 });
