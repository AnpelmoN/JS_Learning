const searchInput = document.querySelector("[type='search']");
const items = document.querySelectorAll(".products li");
// input - подія, яка спрацьовує при кожній зміні в полі вводу. Вона викликається щоразу, коли користувач вводить або видаляє символ у полі вводу. Це дозволяє отримувати актуальне значення поля вводу в реальному часі. Наприклад, якщо користувач вводить текст у поле пошуку, подія "input" буде спрацьовувати кожного разу, коли він додає або видаляє символ, і ви можете використовувати це для реалізації функції автозаповнення або фільтрації результатів пошуку.

// change - подія, яка спрацьовує, коли поле вводу втрачає фокус і його значення змінилося. Це означає, що подія "change" викликається лише тоді, коли користувач закінчує редагування поля вводу і переходить до іншого елемента на сторінці. Наприклад, якщо користувач вводить текст у поле пошуку і потім клікає за межами цього поля або натискає клавішу Tab для переходу до іншого елемента, подія "change" буде спрацьовувати, якщо значення поля пошуку було змінено.
searchInput.addEventListener("input", () => {
  console.log(searchInput.value);
  const value = searchInput.value.toLocaleLowerCase();

  items.forEach((item) => {
    // console.log(item);

    const text = item.textContent.toLocaleLowerCase();
    if (text.includes(value)) {
      item.style.color = "orange";
      item.style.display = "list-item";
    } else {
      item.style.color = "black";
    }
  });
});
