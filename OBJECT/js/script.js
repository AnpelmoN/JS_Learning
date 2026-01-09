const laptops = {
  model: "XPS 15",
  brand: "Dell",
  year: 2023,
  price: 1200,
  processor: "Intel i7",
  ram: "16GB",
  storage: "512GB SSD",
};
// {
//   model: "MacBook Pro",
//   brand: "Apple",
//   year: 2022,
//   price: 1500,
//   processor: "M1 Pro",
//   ram: "16GB",
//   storage: "1TB SSD"
// }

// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.
const person = {
  name: "Alex",
  age: 15,
  gender: "male",

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  },
};
person.showInfo();

// Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей.
const car = {
  brand: "Mazda",
  model: "MX-5",
  year: 1991,
  color: "red",

  showCar() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  },
};
car.showCar();

//Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"

const restaurant = {
  name: "Sushi Place",
  cuisine: "Japanese",
  address: "123 Pomelo St",
  rating: 4.5,
  updateInfo(newAddress, newRating) {
    this.address = newAddress;
    this.rating = newRating;
    console.log(
      `Updated Address: ${this.address}, Updated Rating: ${this.rating}`
    );
  },
};
restaurant.updateInfo("321 Mango St", 4.8);
console.log(restaurant);

//Створіть об'єкт "product" з властивостями "name", "price", "quantity" та "total". Додайте до об'єкту метод, який буде розраховувати загальну вартість товару (ціна * кількість) та зберігати її властивості "total".

const product = {
  name: "Lenovo",
  price: 800,
  quantity: 18,
  total: 0,
  calculateTotal() {
    this.total = this.price * this.quantity;
  },
};
product.calculateTotal();
console.log(`Total price: ${product.total}`);

//Працюємо з колекцією товарів в кошику:
//Написати методи вказані нижче в коді
const cart = {
  items: [
    { name: "🍎", price: 50, quantity: 70 },
    { name: "🍇", price: 70, quantity: 701 },
    { name: "🍋", price: 60, quantity: 710 },
    { name: "🍓", price: 110, quantity: 0 },
  ],

  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const newItems = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name !== productName) {
        newItems.push(this.items[i]);
      }
    }
    this.items = newItems;
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === productName) {
        this.items[i].quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i].name === productName && this.items[i].quantity > 0) {
    //     this.items[i].quantity -= 1;
    //   }
    // }
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].quantity === 0) {
        this.items.splice(i, 1);
        break;
      }
      if (this.items[i].name === productName) {
        this.items[i].quantity -= 1;
      }
    }
  },
};
// cart.add({ name: "🍍", price: 130 });
// cart.remove("🍋");

cart.decreaseQuantity("🍓");
console.log(cart.getItems());
