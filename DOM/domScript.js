// Створення та виделення елементів

//! Створення

const title = document.createElement("h2");
const title2 = document.createElement("h2");
const title3 = document.createElement("h2");
const title4 = document.createElement("h2");

const paragraph = document.createElement("p");

const box = document.querySelector(".box");
paragraph.textContent = "special text";

console.log(title);
//element.append(el1, el2, ...) - додає один або декілька елементів
//після всіх дітей елемента element.

box.append(title, paragraph);

title.textContent = "use append child";
//element.prepend(el1, el2, ...) - додає один або декілька елементів
//перед усіма дітьми елемента element.

title.classList.add("title");

box.prepend(title2);

title2.textContent = "use prepend";

//element.after(el1, el2, ...) - додає один або декілька елементів
//після елемента element.

box.after(title3);
title3.textContent = "use after";
//element.before(el1, el2, ...) - додає один або декілька елементів
//перед елементом element.

box.before(title4);
title4.textContent = "use before";

const item3 = document.querySelector(".item3");
const item = document.createElement("span");
item.textContent = "example";
box.insertBefore(item, item3);

//! deleate

// item3.remove();

// Repaint

const usernameInput = document.querySelector("[name='username']");

const errorLabel = usernameInput.nextElementSibling;

if (usernameInput.value === "") {
  errorLabel.textContent = "Put your name";
  errorLabel.style.display = "block";
  errorLabel.style.color = "red";
  usernameInput.style.border = "1px solid red";
}

//? reflow

const emailInput = document.querySelector("[name='email']");

if (emailInput.value === "") {
  const errorLabel = emailInput.nextElementSibling;
  errorLabel.textContent = "Put your email";
  errorLabel.style.display = "block";
  errorLabel.style.color = "red";
  emailInput.style.border = "1px solid red";
  errorLabel.style.display = "block";

  emailInput.after(errorLabel);
}

//? innerHTML - читає теги
//? textContent - читає теги як текст

const contentDiv = document.querySelector(".content");
const cardContent = `<div><h3>Name</h3> <p>description</p></div>`;
console.log(contentDiv);

contentDiv.innerHTML = cardContent;

//? insertAdjacentHTML(position, text) - вставляє текст як HTML в певну позицію відносно елемента, на який викликається метод. Позиції: beforebegin, afterbegin, beforeend, afterend.

const containerDiv = document.querySelector(".container");

containerDiv.insertAdjacentHTML(
  "afterbegin",
  "<li class='product item'><p>Product 0</p></li>",
);

containerDiv.insertAdjacentHTML(
  "beforebegin",
  "<li class='product item'><h3>Title</h3></li>",
);

containerDiv.insertAdjacentHTML(
  "afterend",
  "<li class='product item'><h3>End of container</h3></li>",
);

containerDiv.insertAdjacentHTML(
  "beforeend",
  "<li class='product item'><p>Product 5</p></li>",
);

// Atribute

const saveBtn = document.querySelector("#btn-save");

console.log(saveBtn.hasAttribute("type")); // true
console.log(saveBtn.hasAttribute("class")); // true
console.log(saveBtn.hasAttribute("data-open")); // true

if (saveBtn.hasAttribute("class")) {
  console.log("Атрибут присутній");
}

//? Отримання значення атрибута:
const classValue = saveBtn.getAttribute("class");

console.log(`значення атрибуту class`, classValue);

// Встановлення атрибута:
saveBtn.setAttribute("title", "click to save");

// Видалення атрибута:
saveBtn.removeAttribute("class");

const attributes = saveBtn.attributes;

console.log(attributes);

for (attr of attributes) {
  console.log(attr.name, attr.value);
}

// data-atribute - спеціальні атрибути, які дозволяють зберігати додаткові дані на елементі. Вони починаються з "data-" і можуть мати будь-яке ім'я після цього префікса.

const closeBtn = document.querySelector("#btn-close");
const openBtn = document.querySelector("[data-action='open']");

closeBtn.dataset.action = "yellow";

console.log(closeBtn.dataset.action);
console.log(openBtn);

openBtn.dataset.model = "open";
