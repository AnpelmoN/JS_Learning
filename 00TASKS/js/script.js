class Person {
  static Role = {
    ADMIN: "admin",
    USER: "user",
    EDITOR: "editor",
    STUDENT: "student",
  };

  static #arrayEmails = [];

  //? оголошення приватних (інкапсульованих) властивостей
  #email;
  #role;

  constructor({ name, email, role }) {
    this.name = name;
    this.#email = email;
    this.#role = role;
  }

  //? Геттер
  get influenceEmail() {
    return this.#email;
  }

  //? сеттер
  set influenceEmail(newEmail) {
    if (newEmail !== "" && newEmail.includes("@")) {
      this.#email = newEmail;
    } else {
      console.log("Помилка! Пошта не може бути пустою або без @");
    }
  }

  get roleUser() {
    return this.#role;
  }

  set roleUser(newRole) {
    this.#role = newRole;
  }

  static ArrayEmail(email) {
    Person.#arrayEmails.push(email);
  }

  static getArrayEmails() {
    return Person.#arrayEmails;
  }
}

const jonh = new Person({
  name: "Jonh",
  email: "jonh@gmail.com",
  role: Person.Role.STUDENT,
});
console.log(jonh.roleUser); // student

//? Геттери і сеттери завжди застосовуються в парі і повинні називатися однаково
console.log(jonh.influenceEmail); // jonh@gmail.com
jonh.influenceEmail = "onejonh@gmail.com";
console.log(jonh.influenceEmail); // onejonh@gmail.com

Person.ArrayEmail("example@gmail.com"); // додали нову пошту для надання доступів user

console.log(Person.getArrayEmails()); // [ 'example@gmail.com' ]

//? Наслідування

class Alex extends Person {
  constructor({ name, email, posts }) {
    super({ name, email });

    this.posts = posts;
  }

  addNewPost(title) {
    this.posts.push({ name: this.name, email: this.email, title: this.title });
  }
}

const editor = new Alex({ name: "Alex", email: "alex@gmail.com", posts: [] });

console.log(editor); // Alex { name: 'Alex' }
console.log(editor.email); // undefined
console.log(editor.influenceEmail); // alex@gmail.com

editor.addNewPost("New Posts - 1");

console.log(editor.posts);
