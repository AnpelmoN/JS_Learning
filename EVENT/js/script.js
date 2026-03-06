let player = "stop";
// addEventListener - слухач події ( слідкує за тим яка подія на сторінці відбулася)

//? "keydown" - подія

//? callback function - функція яка викликається при настанні події
document.addEventListener("keydown", (event) => {
  //? Скасовуємо дефолтну поведінку браузера
  // event.preventDefault();
  // event - це обʼєкт події, який містить інформацію про подію яка відбулась на сторінці
  console.log("keydown", event);
  if (event.code === "KeyD") {
    player = "Turn Right";
  }

  if (event.metaKey && event.code === "KeyS") {
    console.log("Зміни збережено");
  }

  console.log(player);
});

document.addEventListener("keydown", (event) => {
  //? Скасовуємо дефолтну поведінку браузера
  // event.preventDefault();
  // event - це обʼєкт події, який містить інформацію про подію яка відбулась на сторінці
  console.log("keyup", event);

  //? key - чутливий до регістру і до мови інтерфейсу
  //? code повертає код фізичної клавіші на клавіатурі і не залежить від мови.

  document.body.style.backgroundColor = "purple";
});
//? Події миші
const array = ["#FF6B6B", "#4ECDC4", "#FFD93D"];

const box = document.querySelector(".box");
box.addEventListener("mousedown", () => {
  console.log("mousedown");

  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseup", () => {
  console.log("mouseup");

  box.style.backgroundColor = "purple";
});

box.addEventListener("mousemove", () => {
  console.log("mousemove");

  const index = Math.floor(Math.random() * array.length);
  box.style.backgroundColor = array[index];
});

const modal = document.querySelector("[data-modal]");
const btnOpenModal = document.querySelector("[data-open-modal]");
const btnCloseModal = document.querySelector("[data-remove-modal]");
btnOpenModal.addEventListener("click", () => {
  modal.classList.remove("is-hidden");
});

btnCloseModal.addEventListener("click", (e) => {
  //? Обʼєкт події
  // console.log("event: ", e);
  // console.log("type: ", e.type);
  // console.log("target: ", e.target);
  // console.log("currentTarget: ", e.currentTarget);

  modal.classList.add("is-hidden");
});

modal.addEventListener("click", (e) => {
  console.log("type: ", e.type); //? тип події яка відбулась (click, mousemove і тд)
  console.log("target: ", e.target); //? елемент на якому відбулась подія  <div class="modal">
  console.log("currentTarget: ", e.currentTarget); //? елемент на якому спрацював обробник  <div class="backdrop is-hidden" data-modal>
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("backdrop")) {
    modal.classList.add("is-hidden");
  }
});

// document.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
//   console.log("contextmenu", event);
// });

//? Координати clientX/Y pageX/Y
const rectangle = document.querySelector("#rectangle");
const info = document.querySelector("#info");

rectangle.addEventListener("mousemove", (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;

  const pageX = event.pageX;
  const pageY = event.pageY;

  info.textContent = `ClientX: ${clientX}, ClientY: ${clientY}, pageX: ${pageX}, pageY: ${pageY}`;
  rectangle.style.backgroundColor = "yellow";
});

//? clientX/Y:

// clientX/Y координати показують положення миші відносно вікна браузера. Це зручно, коли вікно прокручується. Наприклад, якщо квадратик знаходиться в центрі вікна розміром 500x500 пікселів, то clientX і clientY будуть приблизно 250, коли миша знаходиться в центрі квадратика, незалежно від прокрутки сторінки.
// pageX/Y:

// pageX/Y координати показують положення миші відносно всього документа. Це означає, що вони враховують всю прокручену частину сторінки. Наприклад, якщо сторінка прокручена вниз на 100 пікселів, а миша знаходиться в верхньому лівому куті вікна, pageX і pageY будуть відповідно 0 та 100.

rectangle.addEventListener("mouseout", () => {
  info.textContent = "";
  rectangle.style.backgroundColor = "bisque";
});

const form = document.querySelector(".form");
const username = document.querySelector('input[name="username"]');
const useremail = document.querySelector('input[name="email"]');
const userphone = document.querySelector('input[name="phone"]');
//? Подія відправки форми
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //? value - отримання значення з інпута
  //? trim() - для того щоб обрізати пробіли
  const user = username.value.trim();
  const phone = userphone.value.trim();
  const email = useremail.value.trim();

  if (user !== "" && phone !== "" && email !== "") {
    if (!email.includes("gmail.com") && !email.includes("yahoo.com")) {
      alert("Будь ласка введіть коректну пошту");
      return;
    }

    alert(
      `Дякуемо ${user} за регестрацію! Ваша пошта ${email} та телефон ${phone}`,
    );

    form.reset(); //? очищуємо форму після відправки
    modal.classList.add("is-hidden");
  }

  return alert("Будь ласка введіть повну інформацію");
});

// Подія відправки форми
form.addEventListener("submit", handleSubmit);

const searchInput = document.querySelector("[type='search']");
// input
// change
// searchInput.addEventListener("input", () => {
//   console.log(searchInput.value);
// });
searchInput.addEventListener("change", () => {
  console.log(searchInput.value);
});
